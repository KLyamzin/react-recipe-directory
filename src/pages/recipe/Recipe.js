import { useFetch } from '../../hooks/useFetch';
// import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Recipe.css';

export default function Recipe() {
  const { id } = useParams(); // this will give us params.id from the url
  const url = 'http://localhost:3000/recipes/' + id;
  const { data: recipe, isPending, error } = useFetch(url);
  // const history = useHistory();
  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       history.push('/');
  //     }, 2000);
  //   }
  // }, [error, history]);
  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <p> Ingredients:</p>
          <ul>
            {recipe.ingredients &&
              recipe.ingredients.map((ing) => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
