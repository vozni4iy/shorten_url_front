import React from 'react';
import './ErrorDisplay.scss';

interface ErrorDisplayProps {
  error: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => (
  <p className="error-text">{error}</p>
);

export default ErrorDisplay;
