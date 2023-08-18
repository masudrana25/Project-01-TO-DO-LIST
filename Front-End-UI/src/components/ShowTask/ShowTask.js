import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OneTask from '../OneTask/OneTask';
import './ShowTask.css'
import { Link } from 'react-router-dom';

const ShowTask = () => {

  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
  
  const [taskData, setTaskData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(`${REACT_APP_SERVER_URL}/taskData`);
        const tData = data.data;
        setTaskData(tData);
        // console.log(tData);
      } catch (error) {
         console.log(error);
      }
    };
    fetchData();
  }, [REACT_APP_SERVER_URL]);

  return (
    <div className='container'>
      <div className='d-flex'>
        <div><h1 className='container headline'>Your Tasks:</h1></div>
        <div class="ml-auto p-2"> <Link to='/addTask'><button className='btn btn-primary'><h5>Add New Task</h5></button></Link></div>
      </div>
    <div className='showTask container'>
      {
        taskData?.map(dt => <OneTask data = {dt} key ={dt._id}></OneTask>)
      }
      </div>
      </div>
  );
};

export default ShowTask;