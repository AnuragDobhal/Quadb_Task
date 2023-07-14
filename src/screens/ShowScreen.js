import React from 'react';

const ShowScreen = ({ show }) => {
  return (
    <div>
      <h1>Show Summary</h1>
      <h2>{show.name}</h2>
      <p>{show.summary}</p>
      <button>Book Movie Ticket</button>
    </div>
  );
};

export default ShowScreen;
