import logo from './logo.svg';
import './App.css';
import Navbar from './comp/Navbar';
import Home from './comp/Home';
import {Routes, Route} from "react-router-dom";
import Boutique from './comp/Boutique';
import Healthy from './comp/Healthy';
import Detail from './comp/CompStor/detail'
import Facture from './comp/CompStor/Facture'
import {Provider} from 'react-redux';
import {store} from './comp/redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import DetailRegime from './comp/CompHealth/DetailRegime';

function App() {
  return (
    < >
    <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route  path="/boutique" element={<Boutique/>}/>
        <Route  path='/boutique/:titreRouter' element={<Detail/>}/>
        
        <Route  path='/boutique/facture' element={<Facture/>}/>
        <Route  path="healthy" element={<Healthy/>} />
        <Route  path='/healthy/:titreRoute' element={<DetailRegime/>}/>
      </Routes>
      </Provider>
    </>
  );
}

export default App;
