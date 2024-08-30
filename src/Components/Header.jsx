import  { useState } from 'react';
//import react from react
import '../Style/header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleProfile = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className='container'>
      <div className="logo">Logo</div>
      <div className="profile" onClick={handleProfile}>
        <img 
          src="https://img.freepik.com/free-photo/portrait-friendly-looking-happy-attractive-male-model-with-moustache-beard-wearing-trendy-transparent-glasses-smiling-broadly-while-listening-interesting-story-waiting-mom-give-meal_176420-22400.jpg?size=626&ext=jpg&ga=GA1.1.2069956529.1711599316&semt=ais_hybrid" 
          alt="profile" 
          className='profile-image' 
        />
        <div className="badge"></div>
      </div>
      {isOpen && (
        <div className='profile_toggle'>
          <div className='profile_name'>John Doe</div>
          <div className='settings'>Settings</div>
          <div className='settings'>Notifications <div className='notifiactionbadge'></div></div>
        </div>
      )}
    </div>
  );
}

export default Header;
