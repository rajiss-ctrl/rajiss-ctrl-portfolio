
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Profile from './pages/moreabout/Profile';
import Pages from './pages';

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={ <Pages/>}/>
          <Route path="profile" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
