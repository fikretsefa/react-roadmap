import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ name, age, email, isActive, skills }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <div className="user-info">
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      </div>
      <div className="skills">
        <h3>Skills:</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

UserCard.defaultProps = {
  isActive: false
};

export default UserCard; 