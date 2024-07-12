// src/WorkoutForm.js

import React, { useState } from 'react';

const WorkoutForm = ({ onAddWorkout }) => {
  const [userName, setUserName] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [workoutMinutes, setWorkoutMinutes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWorkout({ userName, workoutType, workoutMinutes: parseInt(workoutMinutes) });
    setUserName('');
    setWorkoutType('');
    setWorkoutMinutes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Name*</label>
        <input 
          type="text" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Workout Type*</label>
        <select 
          value={workoutType} 
          onChange={(e) => setWorkoutType(e.target.value)} 
          required
        >
          <option value="">Select...</option>
          <option value="Cycling">Cycling</option>
          <option value="Running">Running</option>
          <option value="Swimming">Swimming</option>
          <option value="Yoga">Yoga</option>
        </select>
      </div>
      <div>
        <label>Workout Minutes*</label>
        <input 
          type="number" 
          value={workoutMinutes} 
          onChange={(e) => setWorkoutMinutes(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
