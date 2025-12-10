// src/components/user/UserDetailsModal.tsx
import type { User } from "../../types/user";
import { X, Mail, Briefcase, User as UserIcon } from "lucide-react";
import Avatar from "../ui/avatar";
import Button from "../ui/button";

interface UserDetailsModalProps {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function UserDetailsModal({ user, isOpen, onClose }: UserDetailsModalProps) {
    if (!isOpen || !user) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />

            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-lg transition z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-8 pt-12 text-center">
                    <Avatar size="lg" className="w-28 h-28 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                    <p className="text-lg text-blue-600 font-medium mt-2">{user.position}</p>

                    <div className="mt-8 space-y-5 text-left">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <UserIcon size={18} className="text-gray-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Full Name</p>
                                <p className="font-medium">{user.name}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <Mail size={18} className="text-gray-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">{user.email}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <Briefcase size={18} className="text-gray-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Position</p>
                                <p className="font-medium">{user.position}</p>
                            </div>
                        </div>
                    </div>

                    <Button onClick={onClose} variant="secondary" className="w-full mt-8">
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
}