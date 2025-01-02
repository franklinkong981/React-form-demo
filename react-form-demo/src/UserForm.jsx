import React, {useState} from "react";

const UserForm = () => {
  const [username, setUsername] = useState("ChickenLady");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Created user, ${username}`);
    setUsername("");
  };
  return (
    <form>
      <label htmlFor="username">Username: </label>
      <input id="username" type="text" value={username} onChange={handleChange}/>
      <button onClick={handleSubmit}>Add me to list!</button>
    </form>
  );
}

export default UserForm;