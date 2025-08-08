import React, { useState } from 'react';
import './App.css';
import SpotCheck1 from './SpotCheck1';
import Company from './Company';
import Hudini from './components/Hudini';
import Landing from './components/Landing';
import Home from './components/Home';




function App() {

  const [state, setState] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  })

  return (
    <div className="App">
      <Landing user={state.user} store={state.store} />
      <Home store={state.store} />
    </div>
  );

  // return (
  //   <div className='App'>
  //     <h1>Hudini Magic</h1>
  //     <Hudini />
  //   </div>
  // );

  // let companiesData = [
    
  //     { name: "Tesla", revenue: 140 },
  //     { name: "Microsoft", revenue: 300 },
  //     { name: "Google", revenue: 600 }
  // ]

  // let[companies, setCompanies] = useState(companiesData)

  // return (
  //   <div className="ex-space">
  //     {companies.map(company => <Company name={company.name} revenue={company.revenue}></Company>)}
  //   </div>
  // )
  // return (
  //   <div className="App">
  //     <h1>React Spot Check 1</h1>
  //     <SpotCheck1 />
  //   </div>
  // );
};

export default App;
