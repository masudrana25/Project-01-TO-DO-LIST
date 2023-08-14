import React from 'react';
import './OneTask.css';

const OneTask = props => {
  const data = props.data;
  console.log(data);
  return (
    <div className="oneTask d-flex flex-column">
      <div>
        <h3>{data.title}</h3>
        <h5>{data.date}</h5>
        <p>{data.description}</p>
      </div>
      <div className="button_3 mt-auto p-2">
        <button className="btn btn-success">Complete</button>{' '}
        <button className="btn btn-primary">Edit</button>{' '}
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default OneTask;
