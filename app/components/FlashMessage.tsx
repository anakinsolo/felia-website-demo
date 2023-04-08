import React, { useEffect, useState } from 'react';
import flashMessageStyles from '~/assets/styles/components/flash-message.css';

interface FlashMessageProps {
  message: string | null;
  error: string | null;
}

export const links = [{ rel: 'stylesheet', href: flashMessageStyles }];

export default function FlashMessage({ message, error }: FlashMessageProps) {
  const [isFlashVisible, setIsFlashVisible] = useState(false);

  useEffect(() => {
    if (message || error) {
      setIsFlashVisible(true);
      setTimeout(() => {
        setIsFlashVisible(false);
      }, 5000);
    }
  }, [message, error]);

  return (
    <>
      {isFlashVisible && (
        <div className={`flash-message ${error ? 'error' : 'success'} ${!isFlashVisible ? 'hidden' : ''}`}>
          <p>{message || error}</p>
        </div>
      )}
    </>
  );
};
