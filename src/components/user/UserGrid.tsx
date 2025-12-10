// src/components/user/UserGrid.tsx
import type { User } from "../../types"; // you'll create this in a sec
import UserCard from "./UserCard";
import UserDetailsModal from "./UserDetailsModal.tsx";
import { useState } from "react";

interface UserGridProps {
    users: User[];
}

export default function UserGrid({ users }: UserGridProps) {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (user: User) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} onView={() => openModal(user)} />
                ))}
            </div>

            {/* Reusable Modal */}
            <UserDetailsModal
                user={selectedUser}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
}