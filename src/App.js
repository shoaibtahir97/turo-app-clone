import './App.css';
import Header from './components/Header';
import OffcanvasNavbar from './components/OffCanvasNavbar';
import Booking from './components/Booking'
import Drive from './components/Drive';
import CarouselCar from './components/CarouselCar';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
        <Header/>
        <OffcanvasNavbar/>
        <Booking />
        <Drive/>
        <CarouselCar/>
    </div>
  );
}

export default App;
