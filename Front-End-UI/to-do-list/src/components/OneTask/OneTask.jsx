import React from 'react';
import './OneTask.css';
import axios from 'axios';

const OneTask = props => {
  //get data from props
  const data = props.data;
  console.log(data);

  //handle delete button
  const handleDelete = async id => {
    try {
      await axios
        .delete(`http://localhost:3300/taskData/delete/${id}`)
        .then(response => {
          console.log(response);
          alert('This task is deleted.');
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };

  //handle complete button
  const handleComplete = (id) => {
    console.log('clicked complete button');
  }



  return (
    <div className="oneTask d-flex flex-column">
      <div>
        <h3>{data.title}</h3>
        <h5>{data.date}</h5>
        <p>{data.description}</p>
      </div>
      <div className="button_3 mt-auto p-2">
        <button
          className="btn btn-success"
          onClick={() => handleComplete(data._id)}
        >
          Complete
        </button>{' '}
        <button
          className="btn btn-primary"
          // onClick={() => handleEdit(data._id)}
        >
          Edit
        </button>{' '}
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(data._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default OneTask;
