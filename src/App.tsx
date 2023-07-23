import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { RootState } from './redux/store'
import { getGeometry, resetState } from './redux/geometryReducer'
import './App.css';
import Map from './components/Map';

function App() {
  const dispatch = useDispatch()
  const {geometry} = useSelector((state: RootState) => state.geometry);

  const handleClick = () => {
    dispatch(resetState());
    dispatch(getGeometry({
      coordinates: [[59.84660399, 30.29496392], [59.82934196, 30.42423701], [59.83567701, 30.38064206]]
    }));
    console.log(geometry)
  }

  return (
    <>
      <Map />
      <button onClick={handleClick}>pr</button>
    </>
  )
}

export default App
