import React from 'react'

export default function ViewBudget(props) {
    return (
        <div>	
        <span>Budget: {props.budget.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}</span>{"    "}
        <button type='button' className='btn btn-primary' onClick={props.handleEditClick}>
            Edit
        </button>
    
        </div>
    )
}
