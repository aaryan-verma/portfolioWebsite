import React, { useState, useEffect } from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work';
import SyncLoader from 'react-spinners/SyncLoader';
import '../styles/Experience.css';

function Experience() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='experience'>
      {loading ? (
        <div className="loader" style={{ opacity: 0.5 }}>
          <SyncLoader 
            size={10}
            color={"#123abc"}
            loading={loading}/>
        </div>
      ) : (
        <div className='content'>
          <h1>My Experience</h1>
          <p>Details about your professional experience go here.</p>
          <VerticalTimeline lineColor='#3e497a'>

            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date = '2017-2018'
                iconStyle={{background: '#3e497a', color : '#fff'}}
                icon = {<SchoolIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>Dr. Virendra Swarup Public School, Kanpur</h3>
                    <p>Higher Secondary</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date = '2019-2023'
                iconStyle={{background: '#3e497a', color : '#fff'}}
                icon = {<SchoolIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>Pranveer Singh Institute Of Technology, Kanpur</h3>
                    <p>B.Tech (Computer Science)</p>
            </VerticalTimelineElement>


            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date = '06/2023 - 09/2023 '
                iconStyle={{background: '#3e497a', color : '#fff'}}
                icon = {<WorkIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>EddyTools Tech Solutions</h3>
                    <p>Software Engineer Trainee</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date = '09/2023 - 02/2024'
                iconStyle={{background: '#3e497a', color : '#fff'}}
                icon = {<WorkIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>Razorpay Software Pvt. Ltd.</h3>
                    <p>Junior Technical Consultant</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date = '05/2024 - Current'
                iconStyle={{background: '#3e497a', color : '#fff'}}
                icon = {<WorkIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>Mavonic Technology Pvt. Ltd.</h3>
                    <p>Associate Software Developer</p>
            </VerticalTimelineElement>
            

        </VerticalTimeline>
        </div>
      )}
    </div>
  );
}

export default Experience;