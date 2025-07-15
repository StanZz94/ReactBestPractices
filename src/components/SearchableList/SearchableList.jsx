import { useRef, useState } from "react"

export default function SearchableList({ items, itemKeyFn, children }) {
    const [searchTerm, setSearchTerm] = useState('');
    const lastChange = useRef();
    const searchResult = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))

    function handleChange(e) {
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchTerm(e.target.value);
        }, 500);
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