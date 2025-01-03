import React, {useState} from "react";

const NewItemForm = ({addItem}) => {
  const INITIAL_STATE = {
    name: '',
    qty: ''
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({...formData});
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product: </label>
      <input id="name" type="text" name="name" placeholder="Item Name" value={formData.name} onChange={handleChange}/>
      <label htmlFor="quantity">How Many? {formData.qty}</label>
      <input id="quantity" type="range" min="1" max="10" name="qty" value={formData.qty} onChange={handleChange}/>
      <button>Add Item</button>
    </form>
  );
};

export default NewItemForm;