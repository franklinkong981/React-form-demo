import React, {useState} from "react";

const SimpleForm = () => {
  const initialState = {
    email: ""
  };
  const [formData, setFormData] = useState(initialState);
  const [isInvalid, setIsInvalid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = e => {
    setIsTouched(true);
    const {name, value} = e.target;
    if (value === '') {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }

    setFormData(data => ({...data, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email} = formData;

    if (!isInvalid) {
      alert(`Added you to mailing list, ${email}`);
      setFormData(initialState);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Simple Form</h3>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="email" name="email" id="email" value={formData.email} onChange={handleChange}/>
      {isInvalid && isTouched && <span style={{color: 'red'}}>Email cannot be blank!</span>}
      <button>Add Me to the List!</button>
    </form>
  );
};

export default SimpleForm;