import React from 'react';

interface ButtonProps {
  color: string;
  onClick: (name: string) => void;
  name: string;
}

export const Button = ({ color, onClick, name }: ButtonProps) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <button
      className='button'
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
