// BackToTopButton.tsx
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Show the button when the user scrolls down 300px
  const toggleVisibility = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 300) {
      // Show the button if scrolled down more than 300px
      if (currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else {
        // Hide the button if scrolling up
        setIsVisible(false);
      }
    } else {
      setIsVisible(false);
    }
    setLastScrollY(currentScrollY);
  };

  // Smooth scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisibility();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, );

  return (
    <div
      className={`fixed bottom-20 z-50 md:bottom-16 right-4 md:right-8 transform transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <button
        title='Back To Top'
        onClick={scrollToTop}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none hover:scale-110"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
  );
};

export default BackToTopButton;
