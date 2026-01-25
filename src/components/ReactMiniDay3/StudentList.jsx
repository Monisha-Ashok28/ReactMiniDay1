import "./StudentList.css"
function StudentList() {
  const students = [
    { name: "John", marks: 45 },
    { name: "Emma", marks: 78 },
    { name: "Alex", marks: 52 },
    { name: "Sophia", marks: 30 },
    { name: "Michael", marks: 90 }
  ];

  return (
    <div>
      <h2>Student List</h2>

      <ul>
        {students.map((student, index) => (
          <li
            key={index}
            style={{
              color: student.marks > 50 ? "green" : "black",
              fontWeight: student.marks > 50 ? "bold" : "normal"
            }}
          >
            {student.name} - {student.marks}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
