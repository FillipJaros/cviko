import './App.css';
import Bikes from './components/Bikes';

function App() {

  const bikes = [
    {
      id: 1,
      name: "Horske",
      price: 500
    },
    {
      id: 2,
      name: "Detske",
      price: 200
    },
    {
      id: 3,
      name: "Silnicni",
      price: 1500
    },
    {
      id: 4,
      name: "Gravel",
      price: 2500
    },
  ]
  return (
    <div className="App">
      <h1>Kolosalon</h1>
      <Bikes bikes={bikes}/>
    </div>
  );
}

export default App;
