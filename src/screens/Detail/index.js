import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doGet } from '../../helpers/ApiHelper';
import './style.css';
//componente funcional
const Detail = () => {
    const [person, setPerson] = useState(null);
    const {id} = useParams();

   useEffect( () => {
        doGet(`/people/${id}`).then(setPerson);
       
        }, [id]);

   if (!person) {
      return <h1>Loading...</h1>;
 }
    return(
    <>
    <h2>Nome: {person.name}</h2>
    <h2>Birth Year: {person.birth_year}</h2>
    
    
    </>)
};
export default Detail;