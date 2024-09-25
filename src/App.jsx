import './App.css';

import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import PlaceholderPage from './Pages/Placeholder Page/PlaceholderPage ';

const App = () => {

  return (

    <div >
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/placeholder-page' element={<PlaceholderPage />} />
      </Routes>
    </div>

  );
};

export default App;
