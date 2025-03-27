import React from 'react';

const handleClick = () => {
  alert('Hello from remote app')
}


const Button: React.FC = () => {
  return <button onClick={handleClick}>Remote App Button</button>;
};

export default Button;