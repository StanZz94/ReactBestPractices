import { useState } from "react"

export default function SearchableList({ items, children }) {
    const [searchTerm, setSearchTerm] = useState('');

    const searchResult = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))

    function handleChange(e) {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
    }

    return <div className="searchable-list">
        <input type="search" onChange={handleChange} placeholder="Search..." />
        <ul>
            {searchResult.map((item, index) => (<li key={index}>
                {children(item)}
                </li>))}
        </ul>
    </div>
}