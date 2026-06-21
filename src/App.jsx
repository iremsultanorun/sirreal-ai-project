import './App.css';

import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import PlaceholderPage from './Pages/Placeholder Page/PlaceholderPage ';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const modal = useSelector((state) => state.modals.activeModal)
  const isModal = modal === "collectionModal"
  useEffect(() => {
    document.body.style.overflow = isModal ? "hidden" : "auto"
  }, [isModal])
  return (

    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/placeholder-page' element={<PlaceholderPage />} />
      </Routes>
    </div>

  );
};

export default App;
