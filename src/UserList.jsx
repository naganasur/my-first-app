import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]= useState(null)

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      setLoading(false);
     })
     .catch((err) => {
        setError("failed to load users. Please try again later.");
        setLoading(false);
    });


  }, []);

  return (
    <div>
        {loading && <p> Loading users ...</p>}
        {error && <p style={{color:"red"}}>{error}</p>}
        {!loading && !error &&(
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
        )}
    </div>
  );
}

export default UserList