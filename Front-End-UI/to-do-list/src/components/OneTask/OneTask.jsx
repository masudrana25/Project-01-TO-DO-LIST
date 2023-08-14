import React from 'react';
import './OneTask.css'

const OneTask = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <div className='oneTask'>
      <h3>{data.title}</h3>
      <h5>{data.date}</h5>
      <p>{data.description}</p>
    </div>
  );
};

export default OneTask;