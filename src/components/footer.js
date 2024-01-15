import React from 'react';
import './footer.css';
import flag from "./canadian-flag-small.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p><a href='https://brocku.ca/'>Brock University</a></p>
        <p>St. Catharines, Ontario</p>
      </div>
      <div>
        <p>Authored by:</p>
        <p>Dr. Stephen Anco</p> 
        <p>Mark R. Willoughby</p>
      </div>
      <div>
        <p>&copy; 2024, <a href="https://brocku.ca/about/site-policies/">Site Policies</a></p>
        <p className='canada-flag'><img src={flag} alt='Canada flag' className='canada-flag-img'/></p>
      </div>
    </footer>
  );
};

export default Footer;