import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LogInPage from './components/LogIn/LogIn';

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
    <Router>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/login' element={<LogInPage></LogInPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
