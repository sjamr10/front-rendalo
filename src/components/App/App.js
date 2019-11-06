import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [people, setPeople] = useState({});

  async function fetchData() {
    const response = await fetch('http://localhost:3003/api/people');
    response
      .json()
      .then(res => setPeople(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Rendalo Front</header>
      <span>{JSON.stringify(people)}</span>
      <hr />
      <span>{hasError ? 'Ha ocurrido un error.' : ''}</span>
    </div>
  );
};

export default App;
