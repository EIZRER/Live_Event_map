import React, { useState } from 'react';

interface Props {
  recentSearches: string[];
  onSelectRecentSearch: (search: string) => void;
}

const RecentSearchesButton = ({ recentSearches, onSelectRecentSearch }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={toggleDropdown}
        style={{
          padding: '10px 14px',
          backgroundColor: '#3f51b5',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '14px',
          cursor: 'pointer',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s',
        }}
      >
        Recent Searches
      </button>

      {isOpen && recentSearches.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
            padding: '8px 14px',
            marginTop: '6px',
            maxHeight: '200px',
            overflowY: 'auto',
            width: '200px',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {recentSearches.map((search, index) => (
              <li
                key={index}
                onClick={() => onSelectRecentSearch(search)}
                style={{
                  padding: '8px 0',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#f1f1f1'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
              >
                {search}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecentSearchesButton;
