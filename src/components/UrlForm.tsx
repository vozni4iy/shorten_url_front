import React, { ChangeEvent } from 'react';
import './UrlForm.scss';

interface UrlFormProps {
  originalUrl: string;
  setOriginalUrl: (url: string) => void;
  handleShorten: () => void;
  handleClear: () => void;
}

const UrlForm: React.FC<UrlFormProps> = ({ originalUrl, setOriginalUrl, handleShorten, handleClear }) => (
  <div className="input-container">
    <input
      type="text"
      placeholder="Enter long URL"
      value={originalUrl}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setOriginalUrl(e.target.value)}
    />
    <div className="button-group">
      <button onClick={handleShorten} className="short-url-button">Get Short URL</button>
      <button onClick={handleClear} className="clear-button">Clear</button>
    </div>
  </div>
);

export default UrlForm;
