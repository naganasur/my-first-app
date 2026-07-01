import { useState, useEffect } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // NEW — state for the form inputs
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // NEW — reusable fetch function, same pattern as RandomFacts
  const fetchStudents = () => {
    fetch("http://localhost:3000/api/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load students.");
        setLoading(false);
      });
  };

  // useEffect now just calls the function once on load
  useEffect(() => {
    fetchStudents();
  }, []);

  // NEW — handles the Add button click
  const handleAdd = () => {
    fetch("http://localhost:3000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age: Number(age) })
    })
      .then((res) => res.json())
      .then(() => {
        setName("");
        setAge("");
        fetchStudents();   // refresh the list after adding
      });
  };

  return (
    <div>
      <h2>Students from MongoDB</h2>

      {/* Form inputs — same controlled input pattern as NameForm */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleAdd}>Add Student</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <ul>
          {students.map((student) => (
            <li key={student._id}>{student.name} — {student.age}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;