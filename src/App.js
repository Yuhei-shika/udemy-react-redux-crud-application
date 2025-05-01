import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 15 },
    { name: "Jiro"}
     
  ];
  return (
    <div>
      
      {profiles.map((profile, index) => {
        return (
          <User name={profile.name} age={profile.age} key={index} />
        );
      })}
    </div>
  )
}

const User = (props) => {
  return (
    <div>Hi, I am {props.name}, and {props.age} years old!</div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
export default App;