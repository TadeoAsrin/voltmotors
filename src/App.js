import Navbar from './componentes/Navbar';
import Autos from './componentes/Autos';
import Contacto from './componentes/Contacto';
import Parrafo from './componentes/Parrafo';
import Compra from './componentes/Compra'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Parrafo />
      <Autos />
      <Compra />
      <Contacto />
    </div>
  );
}

export default App;
