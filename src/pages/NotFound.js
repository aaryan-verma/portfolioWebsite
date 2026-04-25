import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const errorLog = "> SYSTEM FAILURE: 404_PAGE_NOT_FOUND\n> ATTEMPTING_RECOVERY...\n> CRITICAL: DIRECTORY_DOES_NOT_EXIST\n> PLEASE_RETURN_TO_BASE...";

function NotFound() {
  const [text, setText] = useState('');
  
  useEffect(() => {
    let isMounted = true;
    
    const typeError = async () => {
      for (let i = 0; i <= errorLog.length; i++) {
        if (!isMounted) return;
        setText(errorLog.slice(0, i));
        await new Promise(r => setTimeout(r, 40));
      }
    };
    
    typeError();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className='not-found'>
      <div className='terminal-container'>
        <div className='terminal-header'>
          <span className='dot red'></span>
          <span className='dot yellow'></span>
          <span className='dot green'></span>
          <span className='title'>bash - terminal</span>
        </div>
        <div className='terminal-body'>
          <pre>{text}{text.length < errorLog.length && <span className='cursor'>|</span>}</pre>
          {text.length === errorLog.length && (
            <Link to='/' className='recover-btn'>INITIALIZE SECTOR_0_REBOOT</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NotFound;
