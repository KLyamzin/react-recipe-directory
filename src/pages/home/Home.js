import React from 'react';
import './Home.css';
import { useFetch } from '../../hooks/useFetch';
const url = 'http://localhost:3000/recipes';

export default function Home() {
  const { data, isPending, error } = useFetch(url);
  return (
    <div className="home">
      {error && <p className="error">{error.message}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && data.map((recipe) => <h2 key={recipe.id}>{recipe.title}</h2>)}
    </div>
  );
}
