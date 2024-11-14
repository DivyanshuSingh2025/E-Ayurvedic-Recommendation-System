import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage1 from '../components/1.jpg';
import myImage2 from '../components/2.jpg';
import myImage3 from '../components/3.jpg';

const HomePage = () => {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isRegisterHovered, setIsRegisterHovered] = useState(false);

  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    paddingBottom: '0px',
    marginLeft: '10px',
  };

  const headerStyle = {
    color: '#1E5242',
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const textContainerStyle = {
    flex: 1,
    textAlign: 'center',
    paddingRight: '20px',
  };

  const imageContainerStyle = {
    flex: 1,
    textAlign: 'right',
  };

  const imageContainerStyleMargin = {
    ...imageContainerStyle,
    marginLeft: '0.35rem',
  };

  const imageStyle = {
    height: '192px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    minWidth: '100px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    color: 'white',
    borderRadius: '5px',
  };

  const btnLoginStyle = {
    ...buttonStyle,
    backgroundColor: isLoginHovered ? '#26765b' : '#1E5242', // Changes color on hover
  };

  const btnRegisterStyle = {
    ...buttonStyle,
    backgroundColor: isRegisterHovered ? '#26765b' : '#1E5242', // Changes color on hover
  };

  const footerStyle = {
    marginRight: '24px',
    textAlign: 'center',
    marginTop: '92px',
    fontSize: '14px',
  };

  const flexStyle = {
    display: 'flex',
    backgroundColor: '#BDD7BB',
  };

  return (
    <div style={flexStyle}>
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1>Welcome to the E-Ayurvedic Recommendation System</h1>
          <p>
            <i>Your Wellness Partner for Ayurveda-Based Health Solutions</i>
          </p>
        </header>

        <div style={contentStyle}>
          <div style={textContainerStyle}>
            <h2 style={headerStyle}>Your Health, Our Priority</h2>
            <p style={headerStyle}>
              Find trusted Ayurvedic guidance and solutions anytime, from the
              comfort of your home. Our platform connects you with personalized
              advice based on your symptoms and medical history, whether you
              seek an Ayurvedic treatment plan or an online consultation with
              our experts.
            </p>

            <div className="action-buttons">
              <Link to="/login">
                <button
                  style={btnLoginStyle}
                  onMouseEnter={() => setIsLoginHovered(true)}
                  onMouseLeave={() => setIsLoginHovered(false)}
                >
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  style={btnRegisterStyle}
                  onMouseEnter={() => setIsRegisterHovered(true)}
                  onMouseLeave={() => setIsRegisterHovered(false)}
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <footer style={footerStyle}>
          <p>© 2024 E-Ayurvedic System | All Rights Reserved</p>
        </footer>
      </div>
      <div style={imageContainerStyle}>
        <img src={myImage1} alt="Ayurvedic Treatment" style={imageStyle} />
        <img src={myImage2} alt="Ayurvedic Treatment" style={imageStyle} />
        <img src={myImage3} alt="Ayurvedic Treatment" style={imageStyle} />
      </div>
      <div style={imageContainerStyleMargin}>
        <img src={myImage3} alt="Ayurvedic Treatment" style={imageStyle} />
        <img src={myImage1} alt="Ayurvedic Treatment" style={imageStyle} />
        <img src={myImage2} alt="Ayurvedic Treatment" style={imageStyle} />
      </div>
    </div>
  );
};

export default HomePage;
