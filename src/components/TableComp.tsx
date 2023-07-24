import polyline from '@mapbox/polyline';
import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getState, setDecoded } from '../redux/geometryReducer';
import { RootState } from '../redux/store';
import { setMarkers } from '../redux/markersReducer';

const { Column } = Table;

interface DataType {
  key: React.Key;
  route: string;
  point1: string;
  point2: string;
  point3: string;
}

const data: DataType[] = [
  {
    key: '1',
    route: 'Маршрут 1',
    point1: '59.84660399, 30.29496392',
    point2: '59.82934196, 30.42423701',
    point3: '59.83567701, 30.38064206',
  },
  {
    key: '2',
    route: 'Маршрут 2',
    point1: '59.82934196, 30.42423701',
    point2: '59.82761295, 30.41705607',
    point3: '59.84660399, 30.29496392',
  },
  {
    key: '3',
    route: 'Маршрут 3',
    point1: '59.83567701, 30.38064206',
    point2: '59.84660399, 30.29496392',
    point3: '59.82761295, 30.41705607',
  },
];

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { geometry, decoded } = useSelector((state: RootState) => state.geometry);

  const handleClick = (record: DataType) => {
    const { point1, point2, point3 } = record;
    dispatch(getState({
      coordinates: [point1.split(", ").map(parseFloat), point2.split(", ").map(parseFloat), point3.split(", ").map(parseFloat)]
    }));
    dispatch(setMarkers({point1, point2, point3}));
  };

  useEffect(() => {
    const decoded = polyline.decode(geometry);
    dispatch(setDecoded({ decoded: decoded }));
  }, [geometry])

  const rowStyles = () => ({
    cursor: 'pointer',
  });

  return (
    <div className='table'>
      <Table dataSource={data} onRow={(record) => ({
        onClick: () => handleClick(record),
        style: rowStyles()
      })}>
        <Column title="Маршрут" dataIndex="route" key="route" />
        <Column title="Точка 1 (lat, lng)" dataIndex="point1" key="point1" />
        <Column title="Точка 2 (lat, lng)" dataIndex="point2" key="point2" />
        <Column title="Точка 3 (lat, lng)" dataIndex="point3" key="point3" />
      </Table>
    </div>
  );
};

export default App;
