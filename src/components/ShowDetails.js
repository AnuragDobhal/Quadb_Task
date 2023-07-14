import React from 'react';

const ShowDetails = ({ show }) => {
  return (
    <div>
      <h2>{show.name}</h2>
      <p>{show.summary}</p>
      <button>Book Movie Ticket</button>
    </div>
  );
};

export default ShowDetails;
