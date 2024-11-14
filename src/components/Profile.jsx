import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData] = useState({
    name: 'John Doe',
    age: 35,
    email: 'john.doe@gmail.com',
    gender: 'Male',
    bloodGroup: 'O+',
    weight: '75 kg',
    height: '175 cm',
    address: '123 Health Street, Vellore Tamil Nadu',
    phone: '+91 234-567-8900',
  });

  const [activeTab, setActiveTab] = useState('upcoming');

  // Simulated consultation data
  const [consultations] = useState({
    upcoming: [
      {
        id: 1,
        date: '2024-03-25',
        time: '10:00 AM',
        doctor: 'Dr. Ayush Kumar',
        type: 'Follow-up',
        status: 'Scheduled',
      },
      {
        id: 2,
        date: '2024-04-05',
        time: '2:30 PM',
        doctor: 'Dr. Priya Sharma',
        type: 'General Consultation',
        status: 'Pending',
      },
    ],
    previous: [
      {
        id: 3,
        date: '2024-02-15',
        time: '11:30 AM',
        doctor: 'Dr. Ayush Kumar',
        type: 'Initial Consultation',
        status: 'Completed',
        prescription: 'View Details',
      },
      {
        id: 4,
        date: '2024-01-20',
        time: '3:00 PM',
        doctor: 'Dr. Priya Sharma',
        type: 'Follow-up',
        status: 'Completed',
        prescription: 'View Details',
      },
    ],
  });

  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#BDD7BB',
    padding: '40px 20px',
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: '30px',
  };

  const headerStyle = {
    color: '#1E5242',
    marginBottom: '30px',
    textAlign: 'center',
  };

  const profileGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  };

  const infoItemStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    color: '#1E5242',
    fontWeight: 'bold',
    marginBottom: '5px',
    display: 'block',
  };

  const valueStyle = {
    color: '#333',
    fontSize: '16px',
  };

  const tabsStyle = {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  };

  const tabButtonStyle = (isActive) => ({
    padding: '10px 20px',
    backgroundColor: isActive ? '#1E5242' : '#e9ecef',
    color: isActive ? '#fff' : '#1E5242',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  });

  const consultationCardStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '15px',
    border: '1px solid #dee2e6',
  };

  const cardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
  };

  const statusStyle = (status) => ({
    display: 'inline-block',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '14px',
    backgroundColor:
      status === 'Completed'
        ? '#d4edda'
        : status === 'Scheduled'
        ? '#cce5ff'
        : '#fff3cd',
    color:
      status === 'Completed'
        ? '#155724'
        : status === 'Scheduled'
        ? '#004085'
        : '#856404',
  });

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headerStyle}>Patient Profile</h1>

        {/* Profile Information */}
        <div style={profileGridStyle}>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Name</span>
            <span style={valueStyle}>{userData.name}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Age</span>
            <span style={valueStyle}>{userData.age} years</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Email</span>
            <span style={valueStyle}>{userData.email}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Gender</span>
            <span style={valueStyle}>{userData.gender}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Blood Group</span>
            <span style={valueStyle}>{userData.bloodGroup}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Weight</span>
            <span style={valueStyle}>{userData.weight}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Height</span>
            <span style={valueStyle}>{userData.height}</span>
          </div>
          <div style={infoItemStyle}>
            <span style={labelStyle}>Phone</span>
            <span style={valueStyle}>{userData.phone}</span>
          </div>
        </div>

        {/* Consultations Section */}
        <h2 style={{ ...headerStyle, textAlign: 'left', marginTop: '40px' }}>
          Consultations
        </h2>

        {/* Tabs */}
        <div style={tabsStyle}>
          <button
            style={tabButtonStyle(activeTab === 'upcoming')}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Consultations
          </button>
          <button
            style={tabButtonStyle(activeTab === 'previous')}
            onClick={() => setActiveTab('previous')}
          >
            Previous Consultations
          </button>
        </div>

        {/* Consultation Cards */}
        <div>
          {consultations[activeTab].map((consultation) => (
            <div key={consultation.id} style={consultationCardStyle}>
              <div style={cardGridStyle}>
                <div>
                  <span style={labelStyle}>Date</span>
                  <span style={valueStyle}>{consultation.date}</span>
                </div>
                <div>
                  <span style={labelStyle}>Time</span>
                  <span style={valueStyle}>{consultation.time}</span>
                </div>
                <div>
                  <span style={labelStyle}>Doctor</span>
                  <span style={valueStyle}>{consultation.doctor}</span>
                </div>
                <div>
                  <span style={labelStyle}>Type</span>
                  <span style={valueStyle}>{consultation.type}</span>
                </div>
                <div>
                  <span style={labelStyle}>Status</span>
                  <span style={statusStyle(consultation.status)}>
                    {consultation.status}
                  </span>
                </div>
                {consultation.prescription && (
                  <div>
                    <span style={labelStyle}>Prescription</span>
                    <button
                      style={{
                        backgroundColor: '#1E5242',
                        color: '#fff',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={() => alert('Viewing prescription details...')}
                    >
                      View Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
