import { useState, type FormEvent, type ChangeEvent } from 'react';
import axios from 'axios';
import { apiBaseUrl } from '../utils/config';

interface LinkFormProps {
  updateReloadState: () => void;
  setGlobalMessage: (text: string, type: 'success' | 'error') => void;
}

const LinkForm: React.FC<LinkFormProps> = ({ updateReloadState, setGlobalMessage }) => {
  const [originalLink, setOriginalLink] = useState<string>('');

  const isValidUrl = (url: string): boolean => {
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
    return urlRegex.test(url);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidUrl(originalLink)) {
      setGlobalMessage('Please enter a valid URL (e.g., https://example.com)', 'error');
      return;
    }

    try {
      await axios.post(`${apiBaseUrl}/links`, { originalLink });
      setGlobalMessage('Short link created successfully!', 'success');
      setOriginalLink('');
      updateReloadState();
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Failed to create short link.';
      setGlobalMessage(errorMessage, 'error');
    }
  };

  return (
    <section className="mb-8 p-6 rounded-xl bg-cover bg-center bg-[url('./src/assets/bg.jpg')] backdrop-brightness-50">
      <div className="text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          ClipURL Shortener
        </h2>
        <p className="text-lg font-light mb-2">
          Transform long URLs into short, shareable links in seconds
        </p>
        <p className="text-sm font-thin mb-6 max-w-xl mx-auto">
          With ClipURL, create compact links that are easy to share and track. Perfect for social media, marketing campaigns, or personal use. Start shortening now and monitor clicks with our intuitive dashboard.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Enter your link (e.g., https://example.com)"
            value={originalLink}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setOriginalLink(e.target.value)
            }
            className="flex-1 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white/90"
            required
          />
          <button
            type="submit"
            className="px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors"
          >
            Shorten Link
          </button>
        </form>
      </div>
    </section>
  );
};

export default LinkForm;