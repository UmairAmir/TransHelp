import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div style={{display: 'flex', cursor: 'pointer'}}>
      <div>
        <FaFacebook size={30} style={{ margin: '0 10px' }} />
        <FaTwitter size={30} style={{ margin: '0 10px' }} />
      </div>
      <div>
        <FaInstagram size={30} style={{ margin: '0 10px' }} />
        <FaLinkedin size={30} style={{ margin: '0 10px' }} />
      </div>
    </div>
  );
};

export default SocialMediaIcons;