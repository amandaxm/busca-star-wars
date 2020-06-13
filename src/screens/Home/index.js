import React, { useState, useEffect } from 'react';
import { doGet, getIdFromUrl } from '../../helpers/ApiHelper';

import { Link } from 'react-router-dom';
import './style.css';

//componente funcional
const Home = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    doGet('/people').then(response => setPeople(response.results));
  }, []);
  if (!people || !people.length) {
    return <h1>
      Loading
</h1>;

  }
  const peopleList = people.map(p => {
    const id = getIdFromUrl(p.url);
    return (
      <li key={p.url}>
        <Link style={{color: "white"}} to={`/detail/${id}`}>{p.name}</Link>
      </li>);
  });


  return (
    <>
      <h1 style={{color: "yellow"}}>Characters</h1>
      <ul>{peopleList}</ul>
  </>
  );
};
export default Home; 