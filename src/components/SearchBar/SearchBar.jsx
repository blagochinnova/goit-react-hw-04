import { CiSearch } from "react-icons/ci";
import toast  from 'react-hot-toast';
import styles from './SearchBar.module.css';
import { useState } from 'react';


export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query.trim() === '') {
            toast.error('Please enter a search query.');
            return;
        }
        onSubmit(query);
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <header className={styles.header}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                    className={styles.input}
                />
                <button type="submit" className={styles.btn}>< CiSearch/></button>
            </form>
        </header>
    );
}