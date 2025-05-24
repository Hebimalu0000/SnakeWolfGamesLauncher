// client/src/components/Button.tsx
import React from 'react';
import './Button.css'; // ボタンのスタイルシート

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  ...props
}) => {
  const className = `button ${variant}-button ${disabled ? 'disabled' : ''}`;
  return (
    <button className={className} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;