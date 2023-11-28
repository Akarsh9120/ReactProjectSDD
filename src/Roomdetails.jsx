import React, { useState, useEffect } from 'react';
import './Maintenance.css'; 
import peakpx from './peakpx.jpg';

const Maintenance = () => {
  
  const [mealPlanData, setMealPlanData] = useState({
    title: 'Meal Plan',
    content: 'Your meal plan details will be fetched from the backend.',
  });

  const [roomDetailsData, setRoomDetailsData] = useState({
    title: 'Room Details',
    content: 'Your room details will be fetched from the backend.',
  });

  
  useEffect(() => {
    
  }, []);

  return (
    <div className="maintenance-form-container">
      <div className="info-box">
        <h2 className="info-box-heading">{mealPlanData.title}</h2>
        <p className="info-box-content">{mealPlanData.content}</p>
      </div>

      <div className="info-box">
        <h2 className="info-box-heading">{roomDetailsData.title}</h2>
        <p className="info-box-content">{roomDetailsData.content}</p>
      </div>
    </div>
  );
};

export default Maintenance;
