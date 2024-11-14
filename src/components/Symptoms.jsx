import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Symptoms = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    primarySymptoms: '',
    symptomDuration: '',
    painLevel: '1',
    previousMedicalHistory: '',
    currentMedications: '',
    allergies: '',
    lifestyle: '',
    dietaryHabits: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#BDD7BB',
    padding: '40px 20px',
    overflowX: 'hidden',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    color: '#1E5242',
    textAlign: 'center',
    marginBottom: '30px',
  };

  const inputGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#1E5242',
    fontWeight: '500',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#1E5242',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1 style={headerStyle}>Symptoms Assessment Form</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Primary Symptoms</label>
            <textarea
              name="primarySymptoms"
              value={formData.primarySymptoms}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="Please describe your main symptoms in detail"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>How long have you been experiencing these symptoms?</label>
            <input
              type="text"
              name="symptomDuration"
              value={formData.symptomDuration}
              onChange={handleChange}
              style={inputStyle}
              placeholder="e.g., 2 weeks, 3 months"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Pain Level (if applicable)</label>
            <input
              type="range"
              name="painLevel"
              min="1"
              max="10"
              value={formData.painLevel}
              onChange={handleChange}
              style={{ ...inputStyle, height: '20px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>1 (Mild)</span>
              <span>10 (Severe)</span>
            </div>
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Previous Medical History</label>
            <textarea
              name="previousMedicalHistory"
              value={formData.previousMedicalHistory}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="List any previous medical conditions or surgeries"
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Current Medications</label>
            <textarea
              name="currentMedications"
              value={formData.currentMedications}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="List any medications you are currently taking"
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Allergies</label>
            <textarea
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="List any known allergies"
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Lifestyle Habits</label>
            <textarea
              name="lifestyle"
              value={formData.lifestyle}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="Describe your daily routine, exercise habits, sleep pattern, etc."
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Dietary Habits</label>
            <textarea
              name="dietaryHabits"
              value={formData.dietaryHabits}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="Describe your typical diet and any dietary restrictions"
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Additional Notes</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="Any additional information you would like to share"
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Submit Symptoms
          </button>
        </form>
      </div>
    </div>
  );
};

export default Symptoms;