import React from 'react';
import './Maintenance.css'; 
import peakpx from './peakpx.jpg'

const Maintenance = () => {
  return (
    <div className="maintenance-form-container">
      <form method="post" action="">
        <h2 className="form-heading">Maintenance Request Form</h2>

        <div className="form-group">
          <label htmlFor="request" className="form-label">
            Request Type:
          </label>
          <select id="request" name="request" className="form-input">
            <option value="Parking">Parking</option>
            <option value="Room Cleaning">Room Cleaning</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Pest/Insect Control">Pest/Insect Control</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="roomno" className="form-label">
            Room No:
          </label>
          <input type="text" id="roomno" name="roomno" className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="details" className="form-label">
            Details:
          </label>
          <textarea rows="5" id="details" name="details" className="form-input" />
        </div>

        <div className="form-group">
          <input type="submit" id="submit" value="Raise Request" className="form-submit-btn" />
        </div>
      </form>
    </div>
  );
};

export default Maintenance;
