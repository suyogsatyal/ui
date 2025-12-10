// src/components/user/UserCard.tsx
import type { User } from "../../types/user";
import Avatar from "../ui/avatar";
import Button from "../ui/button";
import { Mail, Briefcase } from "lucide-react";

interface UserCardProps {
    user: User;
    onView: () => void;
}

export default function UserCard({ user, onView }: UserCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="p-6 text-center">
                <Avatar size="lg" className="mx-auto mb-4" />

                <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-blue-600 font-medium mt-1">{user.position}</p>

                <div className="mt-4 text-left space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail size={16} />
                        <span className="truncate">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Briefcase size={16} />
                        <span>{user.position}</span>
                    </div>
                </div>

                <Button onClick={onView} variant="primary" size="sm" className="w-full mt-6">
                    View Details
                </Button>
            </div>
        </div>
    );
}