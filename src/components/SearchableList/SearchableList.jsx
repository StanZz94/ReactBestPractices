import { useState } from "react"

export default function SearchableList({ items, itemKeyFn, children }) {
    const [searchTerm, setSearchTerm] = useState('');

    const searchResult = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))

    function handleChange(e) {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
    }

    return <div className="searchable-list">
        <input type="search" onChange={handleChange} placeholder="Search..." />
        <ul>
            {searchResult.map((item) => (<li key={itemKeyFn(item)}>
                {children(item)}
            </li>))}
        </ul>
    </div>
}