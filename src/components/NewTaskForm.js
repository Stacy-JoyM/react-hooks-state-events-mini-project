import React, {useState} from "react";
import { v4 as uuid } from "uuid"; 

function NewTaskForm({categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    id:"",
    text:"",
    category:""
  })
  //handle onChange input of options to read values
  function handleCategoryChange(event){
    const {name, value} = event.target
    setFormData(({...formData, //since you are updating two fields, destructure
      [name]:value})) // update field based on name input

  }
  //handle submit to post values to setFormData
  function handleSubmit(event){
    event.preventDefault()
    const newTask = {
      ...formData, 
      id:uuid()
    }
    onTaskFormSubmit(newTask); //Pass new form 
    setFormData({text:"" , category:categories[0] }) //Reset Form Data

  }
  //loop through categories to get value for options
  const options= categories.map((category)=>{
    return(
      <option key={category} value={category} >{category}</option>
    )
  })

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleCategoryChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
