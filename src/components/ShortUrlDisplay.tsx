import React from 'react';
import './ShortUrlDisplay.scss';

interface ShortUrlDisplayProps {
  shortUrl: string;
}

const ShortUrlDisplay: React.FC<ShortUrlDisplayProps> = ({ shortUrl }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(`${import.meta.env.VITE_API_BASE_URL}${shortUrl}`);
  };

  const handleRedirect = () => {
    window.open(`${import.meta.env.VITE_API_BASE_URL}${shortUrl}`, '_blank');
  };

  return (
    <div className="short-url-container">
      <p>Short URL: {`${import.meta.env.VITE_API_BASE_URL}${shortUrl}`}</p>
      <div className="button-group">
        <button onClick={handleCopy}>Copy URL</button>
        <button onClick={handleRedirect}>Redirect to URL</button>
      </div>
    </div>
  );
};

export default ShortUrlDisplay;
