'use client'
import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk scroll ke atas dengan smooth behavior
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Handler untuk mengecek posisi scroll
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup listener saat komponen unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center text-white font-bold transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px]"
          style={{
            zIndex: 1000,
            backgroundColor: '#FF6B35',
            border: '3px solid #1A1A2E',
            borderRadius: '6px',
            boxShadow: '4px 4px 0px #1A1A2E',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '6px 6px 0px #1A1A2E';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '4px 4px 0px #1A1A2E';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.boxShadow = '1px 1px 0px #1A1A2E';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.boxShadow = '6px 6px 0px #1A1A2E';
          }}
        >
          <i className="fa-solid fa-arrow-up text-lg"></i>
        </button>
      )}
    </>
  );
}