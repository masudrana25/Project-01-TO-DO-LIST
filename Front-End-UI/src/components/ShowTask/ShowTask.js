import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OneTask from '../OneTask/OneTask';
import './ShowTask.css'

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
    <>
    <h1 className='container headline'>Your Tasks:</h1>
    <div className='showTask container'>
      {
        taskData?.map(dt => <OneTask data = {dt} key ={dt._id}></OneTask>)
      }
      </div>
      </>
  );
};

export default ShowTask;