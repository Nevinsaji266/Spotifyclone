import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <footer className="spotify-footer">
      <div className="md mt-2">
        <h5>Preview of Spotify</h5>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
        </p>
      </div>
      <div className="user-controls md">
      <Button className='btntn' style={{ backgroundColor: 'white', color: 'black', border: 'none' , }}>Sign up free</Button>

        
      </div>
    </footer>
  );
}

export default Footer;
