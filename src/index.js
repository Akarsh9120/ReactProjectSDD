import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import car from './car.svg';
import accessibility from './accessibility.svg';
import homehospital from './homehospital.svg';
import sleeperchair from './sleeperchair.svg';
import heatingsquare from './heatingsquare.svg';
import Privatewifi from './Privatewifi.svg';
import coffeecup from './coffeecup.svg';
import parking from './parking.svg';
import evplugcharging from './evplugcharging.svg';
import lock from './lock.svg';
import videocamera from './videocamera.svg';
import cars from './cars.png';
import wifis from './wifis.png';
import twentyfours from './twentyfours.png';
import doctors from './doctors.png';
import evs from './evs.png';
import foods from './foods.png';
import heaters from './heaters.png';

import cameras from './cameras.png';

export const skills = [
  {
      imageUrl: car,
      name: "Parking",
     
  },
  {
      imageUrl: accessibility,
      name: "24/7 Assistance",
      
  },
  {
      imageUrl: homehospital,
      name: "On Site Doctor",
      
  },
  {
      imageUrl: sleeperchair,
      name: "Furnished",
      
  },
  {
      imageUrl: heatingsquare,
      name: "Heater",
      
  },
  {
      imageUrl: Privatewifi,
      name: "Wifi",
      
  },
  {
      imageUrl: coffeecup,
      name: "Meal Plans",
     
  },
  {
      imageUrl: parking,
      name: "Parking",
      
  },
  {
      imageUrl: evplugcharging,
      name: "EV Slots",
      
  },
  {
      imageUrl: lock,
      name: "Security",
     
  },
  {
      imageUrl: videocamera,
      name: "Camera Survelliance",
     
  },
  
];

export const experiences = [
  {
      title: "Security",
      company_name: "A1 Security",
      icon: cars,
      iconBg: "#accbe1",
      
      points: [
          "Ensure secure environments and emergency preparedness.",
          "Foster a positive culture and work-life balance.",
          "The A1 Security company is known for regerious training of their employees to provide safety in all situations and stay active.",
          "can assist you to room from the bus stop late nights.",
      ],
  },
  {
      title: "Food",
      company_name: "Oberoi",
      icon: foods,
      iconBg: "#fbc3bc",
  
      points: [
          "Five-star chefs, culinary virtuosos crafting masterpieces on plates.",
          "Their artistry transforms ingredients into a symphony of flavors, a dance on taste buds.",
          "Elevating dining to an exquisite experience, five-star chefs weave magic with every dish.",
          "On Demand Meal plans available to all our tenants based on their dier and allergens.",
      ],
  },
  {
      title: "Heater",
      company_name: "Philips",
      icon: heaters,
      iconBg: "#b7e4c7",
      
      points: [
          "Heaters play a vital role in supporting health and well-being by preventing exposure to extreme cold, which can lead to discomfort, stress, and potential health issues. Maintaining a warm environment ",
          "Heaters offer precise temperature control, allowing users to adjust the warmth according to their preferences. This flexibility is crucial for maintaining a comfortable indoor climate tailored to individual needs.",
          "Modern heaters often come with energy-efficient features, providing effective heating while minimizing energy consumption.",
          "Heaters will be free.",
      ],
  },
  {
      title: "EV Stations",
      company_name: "Ather",
      icon: evs,
      iconBg: "#a2d2ff",
      
      points: [
          "EV stations provide a convenient and accessible way for electric vehicle owners to charge their cars, reducing concerns about range limitations and making electric vehicles a more viable option for daily use.",
          "Pay just 1/4th of your rent to use EV Chargers in the parking.",
          "Fast EV chargers eqipped with high effeciency.",
          
      ],
  },
  {
      title: "Camera Survelliance",
      company_name: "BOSCH",
      icon: cameras,
      iconBg: "#b7e4c7",
      
      points: [
        "Camera surveillance is crucial for enhancing security by providing real-time monitoring and deterrence.",
        "CSurveillance cameras aid in preventing and detecting criminal activities.",
        "HD Cameras with storage upto 1 month  .",
        
      ],
  },
  {
      title: "Doctor",
      company_name: "Appolo",
      icon: doctors,
      iconBg: "#b7e4c7",
      
      points: [
          "Onsite doctors, guardians of health, bring healing directly to where it's needed.",
          "Crafting well-being within walls, onsite doctors shape spaces where health thrives.",
          "Doctors from Apollo are known for their long term experiences .",
          "Pay a 1/4th of your rent to avail this facility every month.",
      ],
  },
  {
      title: "Wifi",
      company_name: "JIO",
      icon: wifis,
      iconBg: "#b7e4c7",
      
      points: [
          "High-speed WiFi ensures rapid data transmission, facilitating quick and seamless internet access to all rooms.",
          "Enables smooth streaming of high-definition content and minimizes buffering interruptions.",
          "Free High speed PRIVATE 5G+ wifi to all ROOMS and tenants .",
          "Unlimited wifi usage with speed upto 1000Mbps.",
      ],
  },
  {
      title: "24/7 Assistance",
      company_name: "RR Room Services",
      icon: twentyfours,
      iconBg: "#b7e4c7",
      
      points: [
          "24/7 assistance ensures tenants have access to help and information at any hour, enhancing their overall experience..",
          "Tenants can promptly address concerns or issues with their rooms, ensuring a quick and satisfactory resolution..",
          "Any issues related to room RR Servies is comitted to solve it immediately.",
          
      ],
  },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

