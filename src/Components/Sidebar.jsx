//import React from 'react';
import  { useEffect, useState } from 'react';
import '../Style/sidebar.css';

const Sidebar = () => {
  const [screenwidth,setScreenWidth] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false); 
  };
  useEffect(()=>{
    const handleResize =()=>{
setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])
  useEffect(()=>{
   setScreenWidth(window.innerWidth)  
   if(screenwidth>1100){
    setIsOpen(true)
   }else{
    setIsOpen(false)
   }
    
  },[screenwidth])

  return (
    <>
      <button className={`toggle-button ${isOpen ? 'toggle-hide' : ''}`} onClick={handleToggle}>
        <img src="../../Images/menu.png" alt="Toggle Menu" className='toggle-img' />
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button className="close-button" onClick={handleClose}>
            <img src="../../Images/cross-mark.png" alt=""  className='toggle-close-img'/>
        </button>
       
        <ul className="sidebar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Stocks</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </div>
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={handleClose}></div>
    </>
  );
};

export default Sidebar;
