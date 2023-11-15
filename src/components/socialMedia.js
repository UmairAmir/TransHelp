import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div style={{ display: 'flex', cursor: 'pointer' }}>
      <div>
        <a href="https://www.facebook.com/TransHelp.pk/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
          <FaFacebook size={30} style={{ margin: '0 10px' }} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
          <FaTwitter size={30} style={{ margin: '0 10px' }} />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/transhelp.pk/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
          <FaInstagram size={30} style={{ margin: '0 10px' }} />
        </a>
        <a href="https://www.linkedin.com/company/96035146/admin/feed/posts/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
          <FaLinkedin size={30} style={{ margin: '0 10px' }} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
