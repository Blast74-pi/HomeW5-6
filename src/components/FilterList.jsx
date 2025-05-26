import React, {useState, useMemo, useCallback} from "react";

const FilterList = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'Beka'},
        {id: 2, name: 'Sasha'},
    ]);
    const [filter, setFilter] = useState('')

    const filteredUsers = useMemo(() => {
        console.log('Filtering users');
        return users.filter(user =>
            user.name.toLowerCase().includes(filter.toLowerCase()));
    }, [users, filter]);

    const addUser = useCallback(() =>
    {
        const newId = users.length + 1;
        const newName = `User${newId}`;
        setUsers(prev => [...prev,
            {id: newId, name: newName}]);
    }, [users]);

    return (
        <div>
            <input
            type="text"
            placeholder="Filter by name"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            />
            <button onClick={addUser}>Добавить пользователя</button>
            <ul>
                {filteredUsers.map(user =>
                    (
                        <li key={user.id}>{user.name}</li>
                    ))}
            </ul>
        </div>
    );
};

export default FilterList