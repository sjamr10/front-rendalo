import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [people, setPeople] = useState([]);

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
      <div>
        {people.length === 0 ? "Don't forget to add some people first using the API" : ''}
        {people.map(person => (
          <div className="person">
            <div className="data">{person.name}</div>
            <div className="data">{person.age}</div>
          </div>
        ))}
      </div>
      <span>{hasError ? 'Ha ocurrido un error.' : ''}</span>
    </div>
  );
};

export default App;
