'use client';
import { useState } from 'react';
import * as Separator from '@radix-ui/react-separator';
import { ChevronDown, Home, PlusCircle, UserRoundPlus } from 'lucide-react';

interface SiderProps {
    isOpenMenu: boolean;
};

export function Siderbar({ isOpenMenu }: SiderProps) {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    function handleOpenSubMenu() {
        setIsSubmenuOpen(!isSubmenuOpen);
        console.log(isSubmenuOpen)
    };

    return (
        <div className="px-3 border-t border-t-gray-100 transition-all">
            {isOpenMenu ? (
                <>
                    <div className="flex items-center mt-4 gap-1 py-3 px-1 hover:bg-gray-100 hover:text-gray-900 hover:rounded-md hover:cursor-pointer">
                        <Home size={20} />
                        <span>Home</span>
                    </div>

                    <Separator.Root className='bg-gray-100 w-full h-px mt-3 rounded-sm' />

                    <div>
                        <div className="flex items-center justify-between mt-4 gap-1 py-3 px-1 hover:bg-gray-100 hover:text-gray-900 hover:rounded-md hover:cursor-pointer" onClick={handleOpenSubMenu}>
                            <div className='flex items-center gap-1'>
                                <Home size={20} />
                                <span>Cadastros</span>
                            </div>
                            <ChevronDown size={20} />
                        </div>

                        {isSubmenuOpen ? (
                            <div className='mt-1 gap-3 py-2 px-1 transition-all bg-gray-100 rounded-md'>
                                <div className='flex items-center gap-1 py-3 px-1 hover:bg-gray-400/50 hover:text-gray-100 hover:rounded-md hover:cursor-pointer'>
                                    <UserRoundPlus size={18} className='stroke-gray-900'/>
                                    <span className='text-md text-gray-900'>Usuarios</span>
                                </div>
                                <div className='flex items-center gap-1 py-3 px-1 hover:bg-gray-400/50 hover:text-gray-100 hover:rounded-md hover:cursor-pointer'>
                                    <PlusCircle size={18} className='stroke-gray-900'/>
                                    <span className='text-md text-gray-900'>Categorias</span>
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className="flex items-center mt-4 gap-1 py-3 px-1 hover:bg-gray-100 hover:text-gray-900 hover:rounded-md hover:cursor-pointer">
                        <Home size={20} />
                        <span>Chamados</span>
                    </div>

                    <div className="flex items-center mt-4 gap-1 py-3 px-1 hover:bg-gray-100 hover:text-gray-900 hover:rounded-md hover:cursor-pointer">
                        <Home size={20} />
                        <span>Relatórios</span>
                    </div>
                </>
            ) : null}
        </div>
    );
};