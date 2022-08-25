import './App.css';
import Propiedades from './components/Propiedades';

function App() {
  return (
    <div className="App">
      <h1>Lista de propiedades</h1>
      <div className = 'contenedor-principal'>
        <Propiedades 
        nombre = 'Casa de playa' 
        direccion='(207) 824-6465 960 Meadow RdCasco, Maine(ME), 04015'
        descripcion='Casa de playa con hermosas vistas y acabados Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis aliquid debitis officia, recusandae minima sapiente ' 
        img='casaBlanca'/>
        <Propiedades 
        nombre = 'Hermosa casa de campo' 
        direccion='(256) 462-2065 1299 Hopewell Rd Hartselle, Alabama(AL), 35640'
        descripcion='Casa de playa con hermosas vistas y acabados Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis aliquid debitis officia, recusandae minima sapiente '
        img='casaCampo'/>
        <Propiedades
        nombre = 'Apartamento tipo estudio' 
        direccion='(256) 715-0215 13 Ashbury Woods Dr #D Huntsville, Alabama(AL), 35824'
        descripcion='Casa de playa con hermosas vistas y acabados Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis aliquid debitis officia, recusandae minima sapiente '
        img='edificio'/>
      </div>
    </div> 
  );
}

export default App;
