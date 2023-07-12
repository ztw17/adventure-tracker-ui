import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/activities');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <div>
    //   {data.map((activity => (
    //     <div key={activity.id}>{activity.name}</div>
    //   )))}
    // </div>
    // <Switch>
    //   <Route path='/' render={() => <LandingPage></LandingPage>}></Route>
    // </Switch>
    <Router>
      <Routes>
      <Route path='/' render={() => <LandingPage></LandingPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
