import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiBaseUrl } from '../utils/config';
import type { LinkData } from '../types/LinkData';
import LinkForm from './LinkForm';
import LinkTable from './LinkTable';

interface ApiResponse {
  message: string;
  data?: LinkData[];
}

interface Message {
  text: string;
  type: 'success' | 'error';
}

const Home = () => {
  const [links, setLinks] = useState<LinkData[]>([]);
  const [reload, setReload] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<Message | null>(null);

  const updateReloadState = () => setReload(true);

  const setGlobalMessage = (text: string, type: 'success' | 'error') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const fetchLinks = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<ApiResponse>(`${apiBaseUrl}/links`, {
        timeout: 5000,
      });
      if (!response.data.data || !Array.isArray(response.data.data)) {
        throw new Error('Invalid response format from server');
      }
      setLinks(response.data.data);
    } catch (err: any) {
      if (err.response?.status !== 404) {
        const errorMessage = err.response?.data?.message || 'Failed to fetch links. Please try again.';
        setGlobalMessage(errorMessage, 'error');
      }
    } finally {
      setIsLoading(false);
      setReload(false);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, [reload]);

  return (
    <main className="container mx-auto px-4 py-6 bg-gray-100 min-h-screen">
      {message && (
        <div
          className={`mb-4 p-4 rounded-lg flex justify-between items-center max-w-2xl mx-auto border-2 ${
            message.type === 'success'
              ? 'bg-green-600 text-white border-green-800'
              : 'bg-red-600 text-white border-red-800'
          } animate-slide-in`}
        >
          <span className="font-semibold">{message.text}</span>
          <button
            onClick={() => setMessage(null)}
            className="text-white hover:text-gray-200"
          >
            ✕
          </button>
        </div>
      )}
      {isLoading && (
        <p className="text-center text-gray-600">Loading links...</p>
      )}
      <LinkForm
        updateReloadState={updateReloadState}
        setGlobalMessage={setGlobalMessage}
      />
      <LinkTable
        updateReloadState={updateReloadState}
        data={links}
        setGlobalMessage={setGlobalMessage}
        setLinks={setLinks}
      />
    </main>
  );
};

export default Home;