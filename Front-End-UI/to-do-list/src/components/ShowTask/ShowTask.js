import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OneTask from '../OneTask/OneTask';
import './ShowTask.css'

const ShowTask = () => {
  const [taskData, setTaskData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get('http://localhost:3300/taskData');
        const tData = data.data;
        setTaskData(tData);
        // console.log(tData);
      } catch (error) {
         console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='showTask container'>
      {
        taskData?.map(dt => <OneTask data = {dt}></OneTask>)
      }
    </div>
  );
};

export default ShowTask;