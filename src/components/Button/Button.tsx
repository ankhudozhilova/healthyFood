import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
    color?: string;
    size?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color = 'black', size = 'medium' }) => {
    return (
        <button
            className={`btn btn-${color} btn-${size}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
 export default Button;