import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

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
    <div>
      {data.map((activity => (
        <div key={activity.id}>{activity.name}</div>
      )))}
    </div>
  );
}

export default App;
