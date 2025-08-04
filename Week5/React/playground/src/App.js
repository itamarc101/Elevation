import logo from './logo.svg';
import './App.css';

function App() {
  const showCompany = (name, revenue) => {
    return <div id={name}>{name} makes {revenue} every year</div>;
  }

  const getClassName = (temperature) => {
    if (temperature < 15) return "freezing";
    if (temperature <= 30) return "fair";
    return "hell-scape";
  };

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ];

  const temperature = 40;

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {companies.map(c => showCompany(c.name, c.revenue))}
      </div>

      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weatherBox" className={getClassName(temperature)}></div>
      </div>
    </div>
  );
}


export default App;
