import React, {useState} from "react";

const UserForm = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialFormData);
  };

  return (
    <form>
      <label htmlFor="username">Username: </label>
      <input id="username" type="text" name="username" value={formData.username} onChange={handleChange}/>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" value={formData.email} onChange={handleChange}/>
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" value={formData.password} onChange={handleChange}/>
      <button onClick={handleSubmit}>Add me to list!</button>
    </form>
  );
}

export default UserForm;