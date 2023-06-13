import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './App.css';

const ResumeBuilder = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    education: [{
      institute: '',
      year: '', 
      degree: '' 
    }],
    experience: [{
      company: '', 
      year: '', 
      designation: ''
    }],
    skills:[]
  })
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({...userData,[name]:value});
};

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...userData.education];
    updatedEducation[index][name] = value;
    setUserData({...userData,education:updatedEducation});
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...userData.experience];
    updatedExperience[index][name] = value;
    setUserData({...userData,experience:updatedExperience});
  };

  const handleAddMore = (section) => {
    if (section === 'education') {
      setUserData({...userData,education:[...userData.education, { institute: '', year: '', degree: '' }]});
    } else if (section === 'experience') {
      setUserData({...userData,experience:[...userData.experience, { company: '', year: '', designation: '' }]});
    }
  };

  const handleSkillChange = (e) => {
    const { value } = e.target;
    setUserData({...userData,skills:value.split(',')});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData)
  };

  return (
    <section className='container'>
      <div className='my-3'>
        <h2 className='fw-bold'>Resume Builder</h2>
        <hr />
      </div>
      <Form onSubmit={handleSubmit} className='formCard mb-5'>
      <Form.Group controlId="name">
        <Form.Label>Name: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name='name'
          value={userData.name}
          onChange={handleChange}
          required
          className='border border-primary'
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email: </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name='email'
          value={userData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Address: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your address"
          name='address'
          value={userData.address}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone: </Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your phone number"
          name='phone'
          value={userData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="education">
        <Form.Label>Education: </Form.Label>
        {userData.education.map((edu, index) => (
          <div key={index} className='d-flex m-2'>
            <Form.Control
            className='mx-2'
              type="text"
              placeholder="Institute"
              name="institute"
              value={edu.institute}
              onChange={(e) => handleEducationChange(index, e)}
              required
            />
            <Form.Control
            className='mx-2'
              type="text"
              placeholder="Year"
              name="year"
              value={edu.year}
              onChange={(e) => handleEducationChange(index, e)}
              required
            />
            <Form.Control
            className='mx-2'
              type="text"
              placeholder="Degree"
              name="degree"
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, e)}
              required
            />
          </div>
        ))}
        <div className="d-flex justify-content-end my-2">
        <Button variant="secondary" className='my-2' onClick={() => handleAddMore('education')}>
          Add More
        </Button>
        </div>
      </Form.Group>

      <Form.Group controlId="experience">
        <Form.Label>Experience: </Form.Label>
        {userData.experience.map((exp, index) => (
          <div key={index} className='d-flex m-2'>
            <Form.Control
            className='mx-2'
              type="text"
              placeholder="Company"
              name="company"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, e)}
              required
            />
            <Form.Control
            className='mx-2'
              type="text"
              placeholder="Year"
              name="year"
              value={exp.year}
              onChange={(e) => handleExperienceChange(index, e)}
              required
            />
            <Form.Control
            className='mx-2'
              type="text"
              placeholder="Designation"
              name="designation"
              value={exp.designation}
              onChange={(e) => handleExperienceChange(index, e)}
              required
            />
          </div>
        ))}
        <div className="d-flex justify-content-end my-2">
        <Button variant="secondary" className='my-2' onClick={() => handleAddMore('experience')}>
          Add More
        </Button>
        </div>
      </Form.Group>

      <Form.Group controlId="skills">
        <Form.Label>Skills: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your skills (comma-separated)"
          value={userData.skills.join(',')}
          onChange={handleSkillChange}
        />
      </Form.Group>
      <div className="d-flex justify-content-center my-2">
      <Button variant="primary" type="submit" className='my-2'>
        Submit
      </Button>
      </div>
    </Form>
    
    </section>
  );
};

export default ResumeBuilder;
