import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work';
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
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
                date = '09/2023 - 02/2024'
                iconStyle={{background: '#3e497a', color : '#fff'}}
                icon = {<WorkIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>Mavonic Technology Pvt. Ltd.</h3>
                    <p>Associate Software Developer</p>
            </VerticalTimelineElement>
            

        </VerticalTimeline>
    </div>
  );
}

export default Experience;