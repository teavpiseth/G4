import React, { useState, useMemo } from "react";

const StudentList = ({ students }) => {
  console.log("child");
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} - {student.score}
        </li>
      ))}
    </ul>
  );
};

const StudentListMemo = React.memo(StudentList);

const Students = () => {
  const [search, setSearch] = useState(0);
  const [students, setStudents] = useState([
    { id: 1, name: "Piseth", score: 80 },
    { id: 2, name: "Dara", score: 45 },
    { id: 3, name: "Sok", score: 65 },
  ]);

  const highScoreStudents = useMemo(() => {
    return students.filter((item) => item.score <= 50);
  }, [students]);

  return (
    <div>
      <input
        placeholder="filter score big than"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h3>និស្សិតដែលមានពិន្ទុលើស 50:</h3>
      <StudentListMemo students={highScoreStudents} />
    </div>
  );
};

export default Students;
