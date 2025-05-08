const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
  if (req.url == '/fileupload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();  // Create a new formidable form instance
    
    // Configure upload directory
    form.uploadDir = path.join(__dirname, 'uploads');  // Set the upload directory
    form.keepExtensions = true;  // Keep file extensions

    form.parse(req, function (err, fields, files) {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        return res.end('Error uploading file');
      }

      // Check if file was actually uploaded
      if (!files.filetoupload) {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        return res.end('No file was uploaded');
      }

      const oldpath = files.upload.path;
      const newpath = path.join(form.uploadDir, files.filetoupload.originalFilename);

      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          return res.end('Error saving file');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>File uploaded and moved!</h1>');
        res.write(`<p>Saved to: ${newpath}</p>`);
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080, () => {
  console.log('Server running at http://localhost:8080');
  
  // Create uploads directory if it doesn't exist
  const uploadDir = path.join(__dirname, 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
    console.log('Created uploads directory');
  }
});