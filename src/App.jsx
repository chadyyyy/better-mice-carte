import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CarteNumerique from './CarteNumerique.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CarteNumerique />} />
      <Route path="/carte/:slug" element={<CarteNumerique />} />
      <Route path="*" element={<CarteNumerique />} />
    </Routes>
  );
};

export default App;
