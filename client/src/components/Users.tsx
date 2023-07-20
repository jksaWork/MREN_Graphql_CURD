import { useState, useEffect } from "react";
function Users() {
  const [Error, setError] = useState<string>();
  const [Users, setUsers] = useState<[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map((el: any) => el.name)))
      .catch((e) => setError("some Thing went Worng"));
  });
  //
  return (
    <div>
      {/*
      h1
       */}
      <h1>Users</h1>
      {Error && <h1>{Error}</h1>}
      {Users.map((el: any, index) => (
        <h3 key={index} className="text-red-900">
          {el}
        </h3>
      ))}
    </div>
  );
}

export default Users;
