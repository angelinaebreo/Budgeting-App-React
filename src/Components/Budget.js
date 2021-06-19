import React,  { useState }from 'react'
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';

export default function Budget(props) {

  
  




    return (
       	<div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{props.isEditing ? (
				<EditBudget handleSaveClick={props.handleSaveClick} budget={props.budget} />
			) : (
				<ViewBudget handleEditClick={props.handleEditClick} budget={props.budget} />
			)}
		</div>
    )
}
