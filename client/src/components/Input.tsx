// client/src/components/Input.tsx
import React from 'react';
import './Input.css'; // インプットのスタイルシート

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  const inputClass = `input-field ${error ? 'error-border' : ''} ${className || ''}`;
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input className={inputClass} {...props} />
      {error && <p className="input-error-message">{error}</p>}
    </div>
  );
};

export default Input;