import http from 'node:http';
import formidable, { errors as formidableErrors } from 'formidable';
import fs from 'node:fs';
import path from 'node:path';

// Configuration
const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
const PORT = 8080;

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const server = http.createServer(async (req, res) => {
  // Handle file upload
  if (req.url === '/api/upload' && req.method.toLowerCase() === 'post') {
    try {
      const form = formidable({
        uploadDir: UPLOAD_DIR,
        keepExtensions: true,
        maxFiles: 5,
        maxFileSize: 200 * 1024 * 1024, // 200MB
        filter: ({ name, originalFilename, mimetype }) => {
          // Only accept certain file types
          const validTypes = [
            'image/jpeg',
            'image/png',
            'application/pdf',
            'text/plain'
          ];
          return validTypes.includes(mimetype);
        }
      });

      const [fields, files] = await form.parse(req);

      // Process uploaded files
      const fileResults = [];
      if (files.multipleFiles) {
        const fileList = Array.isArray(files.multipleFiles) 
          ? files.multipleFiles 
          : [files.multipleFiles];
        
        for (const file of fileList) {
          fileResults.push({
            originalName: file.originalFilename,
            savedName: path.basename(file.filepath),
            size: file.size,
            type: file.mimetype
          });
        }
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: true,
        fields,
        files: fileResults
      }, null, 2));

    } catch (err) {
      console.error('Upload error:', err);
      
      let statusCode = 400;
      let errorMessage = 'Upload failed';
      
      if (err.code === formidableErrors.maxFieldsExceeded) {
        statusCode = 413;
        errorMessage = 'Too many fields in form';
      } else if (err.code === formidableErrors.maxFilesExceeded) {
        statusCode = 413;
        errorMessage = 'Too many files uploaded';
      } else if (err.code === formidableErrors.maxFileSizeExceeded) {
        statusCode = 413;
        errorMessage = 'File size too large';
      } else if (err.code === formidableErrors.invalidPart) {
        statusCode = 400;
        errorMessage = 'Invalid file type';
      }

      res.writeHead(statusCode, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: false,
        error: errorMessage,
        details: err.message
      }));
    }
    return;
  }

  // Show upload form
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>File Upload Demo</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        form { border: 1px solid #ddd; padding: 20px; border-radius: 5px; }
        .file-input { margin: 15px 0; }
        .submit-btn { padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; }
      </style>
    </head>
    <body>
      <h2>File Upload Demo</h2>
      <form action="/api/upload" enctype="multipart/form-data" method="post">
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" />
        </div>
        <div class="file-input">
          <label for="files">Select files (JPEG, PNG, PDF, TXT):</label>
          <input type="file" id="files" name="multipleFiles" multiple />
        </div>
        <button type="submit" class="submit-btn">Upload Files</button>
      </form>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Upload directory: ${UPLOAD_DIR}`);
});