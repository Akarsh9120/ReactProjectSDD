import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {skills, experiences} from './index.js';
import CTA from './CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, From{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          RR Room Services
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p> 
        RR Room Services is devoted to redefining the very essence of hospitality. Beyond offering traditional accommodation, we strive to curate an immersive experience where luxury seamlessly intertwines with intuitive service. Our commitment goes beyond the expected; we anticipate and exceed your needs, creating moments that resonate long after your stay. With meticulous attention to detail, we prioritize reliability, safety, and personalized care, ensuring every aspect of your visit is characterized by comfort and satisfaction.

      Immerse yourself in a world where each room is a carefully crafted haven, blending elegance with innovation. Every service we provide is a note in a symphony of hospitality, orchestrating an extraordinary experience for our guests. At RR Room Services, luxury, dedication, and your satisfaction converge to create a journey that transcends the ordinary, making your stay a memorable and exceptional chapter in our commitment to hospitality excellence.
          
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Services</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>About Our Services.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Experience a seamless stay with our array of services, from round-the-clock room assistance to personalized concierge support, ensuring your needs are met. 
          Your safety is our top priority, with stringent security measures in place, enhanced cleaning protocols, and emergency preparedness. 
          Enjoy peace of mind as you indulge in our amenities, knowing that your well-being is at the forefront of our service commitment. 
          Your comfort and security are paramount, making every moment of your stay with us a worry-free and enjoyable experience. 
          Welcome to a haven where "LUXURY MEETS COMFORT" and safety intertwine for an exceptional stay.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/100 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />
      <CTA/>

    
    </section>
  );
};

export default About;