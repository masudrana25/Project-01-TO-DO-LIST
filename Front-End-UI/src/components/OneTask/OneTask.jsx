import React, { useState } from 'react';
import './OneTask.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OneTask = props => {
  //get data from props
  const data = props.data;
  // console.log(data);

  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const [isComplete, setIsComplete] = useState(data.isComplete);

  //handle delete button
  const handleDelete = async id => {
    try {
      await axios
        .delete(`${REACT_APP_SERVER_URL}/taskData/delete/${id}`)
        .then(response => {
          alert('This task is deleted.');
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };

  //handle complete button

  const handleComplete = async id => {
    setIsComplete(!isComplete);
    try {
      await axios.patch(
        `${REACT_APP_SERVER_URL}/taskData/findOneAndUpdate/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="oneTask card">
      <div className="card-body">
        <div className="card-title">
          <h5>{data.title}</h5>
        </div>
        <div className="card-text">
          <h6> {data.date}</h6>
        </div>
        <div className="card-text">
          <p> {data.description}</p>
        </div>
      </div>
      <div className="button_3 mt-auto p-2">
        <button
          className={`btn btn-warning ${
            isComplete ? 'complete' : 'incomplete'
          }`}
          onClick={() => handleComplete(data._id)}
        >
          {isComplete ? 'inComplete' : <h6>Complete</h6>}
        </button>{' '}
        <Link to={`/edit/${data._id}`}>
          <button className="btn btn-primary">Edit</button>
        </Link>
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
