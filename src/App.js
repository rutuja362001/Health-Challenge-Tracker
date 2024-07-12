// src/App.js

import React, { useState, useEffect } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import Pagination from './components/Pagination';
import WorkoutChart from './components/WorkoutChart';
import './App.css';

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const filtered = workouts.filter(workout => 
      workout.userName.toLowerCase().includes(search.toLowerCase()) &&
      (filter === 'All' || workout.workoutType.includes(filter))
    );
    setFilteredWorkouts(filtered);
  }, [search, filter, workouts]);

  const handleAddWorkout = (workout) => {
    const existingWorkout = workouts.find(w => w.userName === workout.userName);
    if (existingWorkout) {
      existingWorkout.workoutType += `, ${workout.workoutType}`;
      existingWorkout.workoutCount += 1;
      existingWorkout.totalMinutes += workout.workoutMinutes;
      setWorkouts([...workouts]);
    } else {
      workout.workoutCount = 1;
      workout.totalMinutes = workout.workoutMinutes;
      setWorkouts([...workouts, workout]);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWorkouts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="App">
      <h1>Health Challenge Tracker</h1>
      <WorkoutForm onAddWorkout={handleAddWorkout} />
      <div className="search-filter">
        <input 
          type="text" 
          placeholder="Search" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Cycling">Cycling</option>
          <option value="Running">Running</option>
          <option value="Swimming">Swimming</option>
          <option value="Yoga">Yoga</option>
        </select>
      </div>
      <WorkoutList workouts={currentItems} />
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={filteredWorkouts.length} 
        paginate={paginate} 
        currentPage={currentPage} 
        setItemsPerPage={setItemsPerPage} 
      />
      <WorkoutChart workouts={workouts} />
    </div>
  );
};

export default App;
