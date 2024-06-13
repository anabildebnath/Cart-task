import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mb-4 w-1/2">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="p-2 border border-gray-300 rounded w-full"
      />
      {searchTerm && (
        <button
          type="button"
          onClick={() => setSearchTerm('')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-lg"
          style={{ padding: '0 8px', fontSize: '20px' }}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default SearchBar;
