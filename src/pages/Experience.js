import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work';
import '../styles/Experience.css';

function Experience() {
  return (
    <div className='experience'>
      <div className='content'>
        <h1>My Experience</h1>
        <VerticalTimeline lineColor='rgba(255, 255, 255, 0.1)'>

          <VerticalTimelineElement 
              className='vertical-timeline-element--work'
              date='Aug 2025 - Present'
              iconStyle={{background: '#ffffff', color: '#0f0f0f'}}
              icon={<WorkIcon/>}
              >
                  <h3 className='vertical-timeline-element-title'>TransFi India Private Limited, Remote</h3>
                  <p className='vertical-timeline-element-subtitle'>Senior Software Engineer (Promoted Apr 2026)</p>
                  <ul className='experience-details'>
                    
                    <li>Contributed to the Cyber Tech team, collaborating with Compliance, Network Operations, Product, and Engineering teams to build secure fintech infrastructure supporting 20M+ users and $1B+ transaction volume.</li>
                    <li>Developed and deployed multiple microservices while structuring multi-level KYC/KYB verification workflows, incorporating screening tiers, document validation, and webhook-driven status updates.</li>
                    <li>Strengthened the Risk Profile Management System by introducing workflows for risk status tracking, linked profile detection, rule whitelisting, bypass configurations, and audit trails.</li>
                    <li>Delivered the LVCTR compliance module to automatically detect and report high-value transactions, improving regulatory reporting accuracy.</li>
                    <li>Structured the Sender Merchant Architecture, defining scalable data models and APIs to support merchant onboarding and integrate with payment pipelines.</li>
                    <li>Introduced event-driven architecture for compliance action notifications and improved system reliability.</li>
                  </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
              className='vertical-timeline-element--work'
              date='Mar 2025 - Aug 2025'
              iconStyle={{background: '#ffffff', color: '#0f0f0f'}}
              icon={<WorkIcon/>}
              >
                  <h3 className='vertical-timeline-element-title'>Fanztar, Remote</h3>
                  <p className='vertical-timeline-element-subtitle'>Full Stack Developer</p>
                  <ul className='experience-details'>
                    <li>Built core microservices architecture powering creator–brand profiling and campaign fitment workflows across the platform, supporting 30K+ creators.</li>
                    <li>Implemented a trigger-based campaign fitment engine with fallback schedulers, dead-letter queue handling, and automated alerting, achieving 95% fit-score accuracy.</li>
                    <li>Orchestrated scalable data enrichment AI pipelines integrating third-party platforms (Ylytic, Apify) to aggregate large-scale social media metrics.</li>
                    <li>Delivered LLM-based data pipelines to extract and structure insights from unstructured social media data using robust prompt engineering.</li>
                    <li>Resolved distributed processing issues by fixing AWS SQS message visibility problems and mitigating MongoDB race conditions.</li>
                    <li>Launched a Creator Payment Info System enabling secure payout workflows for 30,000+ creators, integrating Decentro APIs.</li>
                  </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
              className='vertical-timeline-element--work'
              date='May 2024 - Mar 2025'
              iconStyle={{background: '#ffffff', color: '#0f0f0f'}}
              icon={<WorkIcon/>}
              >
                  <h3 className='vertical-timeline-element-title'>Mavonic Technology Pvt. Ltd., Remote</h3>
                  <p className='vertical-timeline-element-subtitle'>Associate Software Developer</p>
                  <ul className='experience-details'>
                    <li>Led backend integration of three payment gateways on a B2B payment platform, applying the HMAC algorithm to strengthen transaction security.</li>
                    <li>Developed and refined over 10 Angular 16 modules, improving system integration and boosting user engagement by 25%.</li>
                    <li>Established a security framework aligned with PCI DSS standards, reducing fraudulent transactions by 99.9%.</li>
                    <li>Deployed the Maker-Checker model, reducing transaction errors by 40% and increasing international payment volume by 35%.</li>
                    <li>Partnered with cross-functional teams to streamline development processes and align engineering work with business objectives.</li>
                  </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
              className='vertical-timeline-element--education'
              date='2019-2023'
              iconStyle={{background: '#ffffff', color: '#0f0f0f'}}
              icon={<SchoolIcon/>}
              >
                  <h3 className='vertical-timeline-element-title'>Pranveer Singh Institute Of Technology</h3>
                  <p className='vertical-timeline-element-subtitle'>Bachelor of Technology (Computer Science) - CGPA: 7.43</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;