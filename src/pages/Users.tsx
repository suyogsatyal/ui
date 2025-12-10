// src/pages/Users.tsx
import { useSearchStore } from "../stores/useSearchStore";
import { getUsers } from "../api/users";
import UserGrid from "../components/user/UserGrid.tsx";
import { useEffect } from "react";
import React from "react";

export default function Users() {
    const [users, setUsers] = React.useState<Array<{ id: number; name: string; email: string; position: string }>>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);
    
    const query = useSearchStore((state) => state.query);

    const filteredUsers = users.filter((user) =>
        query === "" ||
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.position.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Users</h1>
            {query && (
                <p className="text-gray-600 mb-4">
                    Found {filteredUsers.length} user{filteredUsers.length !== 1 ? "s" : ""} for "{query}"
                </p>
            )}
            <UserGrid users={filteredUsers} />
        </div>
    );
}