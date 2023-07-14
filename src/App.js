import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchScreen from './screens/SearchScreen';
import ShowScreen from './screens/ShowScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
        <Route path="/shows/:id" element={<ShowScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
