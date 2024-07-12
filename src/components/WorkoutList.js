// src/WorkoutList.js

import React from 'react';

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      <h2>Workout List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Workouts</th>
            <th>Number of Workouts</th>
            <th>Total Workout Minutes</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            <tr key={index}>
              <td>{workout.userName}</td>
              <td>{workout.workoutType}</td>
              <td>{workout.workoutCount}</td>
              <td>{workout.totalMinutes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutList;
