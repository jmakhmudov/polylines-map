import 'leaflet/dist/leaflet.css';
import './App.scss';
import Map from './components/Map';
import TableComp from './components/TableComp';

function App() {

  return (
    <main>
      <TableComp />
      <Map />
    </main>
  )
}

export default App
