import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>Brock University</p>
        <p>St. Catharines, Ontario</p>
      </div>
      <div>
        <p>Authored by:</p>
        <p>Dr. Stephen Anco</p> 
        <p>Mark R. Willoughby</p>
      </div>
      <div>
        <p>&copy; 2023, <a href="https://brocku.ca/about/site-policies/">Site Policies</a></p>
      </div>
    </footer>
  );
};

export default Footer;