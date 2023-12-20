'use client';
import { Home } from 'lucide-react';

interface SiderProps {
    isOpenMenu: boolean;
};

export function Siderbar({ isOpenMenu }: SiderProps) {
    return (
        <div className="px-3 border-t border-t-gray-100 transition-all">
            {isOpenMenu ? (
                <div className="flex items-center mt-4 gap-1 py-3 px-1 hover:bg-gray-100 hover:text-gray-900 hover:rounded-md hover:cursor-pointer">
                    <Home size={20} />
                    <span>Home</span>
                </div>
            ) : null}
        </div>
    );
};