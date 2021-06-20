import React, { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);

  const handleTextChange = (event) => {
    //console.log(event.target)
    setValue(parseFloat(event.target.value));

   
    //console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateBudget(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required="required"
          type="number"
          className="form-control mr-3"
          id="budget"
          value={value}
          onChange={handleTextChange}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </>
  );
};

export default EditBudget;
