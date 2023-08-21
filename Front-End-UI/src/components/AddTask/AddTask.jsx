import React, { useState } from 'react';
import './AddTask.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTask = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();

  const Navigate = useNavigate();

  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const handleSubmit = e => {
    e.preventDefault();
    if (title && date && description) {
      axios
        .post(`${REACT_APP_SERVER_URL}/addTask`, {
          title: title,
          date: date,
          description: description,
        })
        .then(result => {
          console.log(result);
          Navigate('/task');
          window.location.reload();
        })
        .catch(err => console.log(err));
    }else{
      alert(`Please Fill Up All the Data Correctly. Then Click "Add to Task" button`);
    }
  };

  // handle date
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDate = e => {
    setSelectedDate(e);
    const year = e.getFullYear();
    const month = e.getMonth() + 1;
    const date = e.getDate();
    const newDate = `${date}/${month}/${year}`;
    setDate(newDate);
  };

  return (
    <div className="container center">
      <section id="add_task">
        <div className="addTask">
          <h3>Add New Task </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">
                {' '}
                <h4>Task Title</h4>{' '}
              </label>
              <br />
              <input
                type="text"
                name="title"
                id="title"
                maxLength={20}
                placeholder="Enter Your Task Title Name"
                className="form-control"
                onChange={e => setTitle(e.target.value)}
                onClick={e =>
                  (document.getElementById('title_warning').innerText =
                    'Title should be Maximum 20 characters')
                }
              />
              <div className="title_warning" id="title_warning"></div>
            </div>

            <div className="form-group">
              <label htmlFor="">
                <h4>Date</h4>
              </label>{' '}
              <br />
              <DatePicker
                className="form-control"
                placeholder="Enter Task Date"
                selected={selectedDate}
                dateFormat="dd/MM/yyyy"
                onChange={e => handleDate(e)}
                showYearDropdown
                showMonthDropdown
              ></DatePicker>
            </div>

            <div className="form-group">
              <label htmlFor="">
                <h4>Description of Your Task</h4>
              </label>{' '}
              <br />
              <textarea
                cols="50"
                rows={5}
                type="text"
                name="description"
                maxLength={250}
                placeholder="Enter the Description of Your Task"
                className="form-control"
                onChange={e => setDescription(e.target.value)}
                onClick={e =>
                  (document.getElementById('description_warning').innerText =
                    'Title should be Maximum 250 characters')
                }
              ></textarea>
              <div
                className="description_warning"
                id="description_warning"
              ></div>
            </div>

            <button
              type="submit"
              className="btn btn-success"
              id="handleAddTask"
            >
              Add To Task
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddTask;
