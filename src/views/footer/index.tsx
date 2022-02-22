import React from 'react';

interface Props {
    name: string;
}

export const Footer: React.FC<Props> = ({ name }) => {
  return (
    <footer>
        <p> This is a footer component. {name} </p>
    </footer>
  );
};