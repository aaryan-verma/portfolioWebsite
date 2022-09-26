import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date = '2015-2016'
                iconStyle={{background: '#3e497a', color : '#fff'}}
                icon = {<SchoolIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>Dr. Virendra Swarup Public School, Kanpur</h3>
                    <p>High School</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date = '2017-2018'
                iconStyle={{background: '#3e497a', color : '#fff'}}
                icon = {<SchoolIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>Dr. Virendra Swarup Public School, Kanpur</h3>
                    <p>Intermediate</p>
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
        </VerticalTimeline>
    </div>
  );
}

export default Experience;