import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Style.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>TV Shows</h1>
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/shows/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => {
       setShows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul className="show-list">
      {shows.map((show) => (
        <li key={show.show.id}>
          <Link to={`/shows/${show.show.id}`} className="show-name">
            {show.show.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      {show && (
        <div className="show-details">
          <h2>{show.name}</h2>
          <div className="show-summary" dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
      )}
    </div>
  );
}

export default App;
