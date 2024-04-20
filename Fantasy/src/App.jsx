import Header from './components/Header/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsFantasy from './components/DetailsFantasy/DetailsFantasy.jsx';
import AtractionsArea from './components/AtractionArea/AtractionsArea.jsx';
import Exterior from './components/Exterior/Exterior.jsx';
import LivingRoom from './components/LivingRoom/LivingRoom.jsx';
import CameraDubla from './components/CameraDubla/CameraDubla.jsx';
import Apartament from './components/Apartament/Apartament.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="exterior" element={<Exterior />} />
          <Route path="livingRoom" element={<LivingRoom />} />
          <Route path="cameraDubla" element={<CameraDubla />} />
          <Route path="apartament" element={<Apartament />} />
          <Route
            path="/"
            element={
              <>
                {' '}
                <Header />
                <main>
                  <DetailsFantasy />
                  <AtractionsArea />
                </main>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
