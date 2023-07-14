import React, { useState } from 'react';
import ShowList from '../components/showList';
import ShowDetails from '../components/ShowDetails';

const SearchScreen = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  return (
    <div>
      <h1>TV Show Search</h1>
      {selectedShow ? (
        <ShowDetails show={selectedShow} />
      ) : (
        <ShowList onSelectShow={handleSelectShow} />
      )}
    </div>
  );
};

export default SearchScreen;
