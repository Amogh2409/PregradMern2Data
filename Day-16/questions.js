const students = [
    { name: "Amogh", age: 21, marks: 85 },
    { name: "Riya", age: 20, marks: 92 },
    { name: "Ankit", age: 19, marks: 45 },
    { name: "Neha", age: 22, marks: 72 },
    { name: "Kabir", age: 23, marks: 35 }
  ];
  

// ✅ Use forEach() to print each student's name in uppercase.
// 🔍 Use filter() to get a list of students who passed (marks >= 50).
// 🧭 Use map() to return a new array of objects where each student has an extra field called grade:
// "A" if marks >= 80
// "B" if marks >= 60
// "C" otherwise
// 🎯 Use reduce() to calculate the total marks of all students.
// 🔍 Use find() to get the first student who failed (marks < 50).
// ❓ Use some() to check if any student scored above 90.
// ✅ Use every() to check if all students are above 18 years old.
// 🔍 Use includes() to check if "Neha" is in the student list (use map() to create an array of names first).
// 📦 Use push() to add a new student at the end.
// 📤 Use pop() to remove the last student.
// 🧊 Use shift() to remove the first student.
// 🔁 Use unshift() to add a new student at the beginning.

// Create a summary object using reduce()
{
    totalStudents: 5,
    passed: 3,
    failed: 2,
    averageMarks: 65.4
}

const studentSummary = students.reduce((prev, student) => {
    prev.totalStudents += 1;    // Count total students
    student.marks >= 50 ? prev.passed ++ : prev.failed ++; // Count passed and failed students
    prev.totalMarks += student.marks; // Sum total marks
    return prev;
    },
    {
        totalStudents: 0,
        passed: 0,
        failed: 0,
        totalMarks: 0
    },


    studentSummary.averageMarks = studentSummary.totalMarks / studentSummary.totalStudents;

