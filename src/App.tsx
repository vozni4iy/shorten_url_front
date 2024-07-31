import React, { useState } from 'react';
import axios from 'axios';
import UrlForm from './components/UrlForm';
import ShortUrlDisplay from './components/ShortUrlDisplay';
import ErrorDisplay from './components/ErrorDisplay';
import './App.scss';
import { isValidUrl } from './utils/isValidUrl';

const App: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const validateOriginalUrl = (): boolean => {
    if (!isValidUrl(originalUrl)) {
      setError('URL is invalid');
      return false;
    }
    return true;
  };

  const handleShorten = async () => {
    setError(null);
    if (!validateOriginalUrl()) return;
    try {
      const response = await axios.post<{ shortCode: string }>(
        `${import.meta.env.VITE_API_BASE_URL}shorten`,
        { originalUrl }
      );
      setShortUrl(response.data.shortCode);
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response?.data.error);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  const handleClear = () => {
    setOriginalUrl('');
    setShortUrl('');
    setError(null);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>URL Shortener</h1>
      </header>
      <main>
        <UrlForm
          originalUrl={originalUrl}
          setOriginalUrl={setOriginalUrl}
          handleShorten={handleShorten}
          handleClear={handleClear}
        />
        {error && <ErrorDisplay error={error} />}
        {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} />}
      </main>
    </div>
  );
};

export default App;
