import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import SearchBar from './SearchBar';
import './Navbar.css';

export default function Navbar() {
  const { color } = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link className="brand" to="/">
          <h1>Cake Ave.</h1>
        </Link>
        <SearchBar></SearchBar>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
