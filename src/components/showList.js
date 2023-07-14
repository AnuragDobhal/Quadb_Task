import React, { useEffect, useState } from 'react';
import { searchShows } from '../Api';

const ShowList = ({ onSelectShow }) => {
  const [query, setQuery] = useState('');
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      if (query.trim() === '') {
        setShows([]);
        return;
      }

      const data = await searchShows(query);
      setShows(data);
    };

    fetchShows();
  }, [query]);

  return (
    <div>
      <h2>TV Shows</h2>
      <input
        type="text"
        placeholder="Search shows"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <h3>{show.show.name}</h3>
            <p>{show.show.summary}</p>
            <button onClick={() => onSelectShow(show.show)}>View Summary</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
