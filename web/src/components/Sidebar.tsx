'use client';
import { useState } from 'react';
import * as Separator from '@radix-ui/react-separator';
import { BarChart3, ChevronDown, Home, Plus, PlusCircle, ScrollText, Search, Send, Ticket, UserRoundPlus } from 'lucide-react';

interface SiderProps {
    isOpenMenu: boolean;
};

export function Siderbar({ isOpenMenu }: SiderProps) {
    const [isSubmenuOpenNew, setIsSubmenuOpenNew] = useState(false);
    const [isSubmenuOpenTickets, setIsSubmenuOpenTickets] = useState(false);
    const [isSubmenuOpenChart, setIsSubmenuOpenChart] = useState(false);

    function handleOpenSubMenu(menu: string) {
        switch (menu) {
            case 'NEW':
                setIsSubmenuOpenNew(!isSubmenuOpenNew);
            break;

            case 'TICKETS':
                setIsSubmenuOpenTickets(!isSubmenuOpenTickets);
            break;

            case 'CHART':
                setIsSubmenuOpenChart(!isSubmenuOpenChart);
            break;
        }
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
                        <div className="flex items-center justify-between mt-4 gap-1 py-3 px-1 hover:bg-gray-100 hover:text-gray-900 hover:rounded-md hover:cursor-pointer" onClick={() => handleOpenSubMenu('NEW')}>
                            <div className='flex items-center gap-1'>
                                <Plus size={20} />
                                <span>Cadastros</span>
                            </div>
                            <ChevronDown size={20} />
                        </div>

                        {isSubmenuOpenNew ? (
                            <div className='mt-1 gap-3 py-2 px-1 transition-all bg-gray-100 rounded-md'>
                                <div className='flex items-center gap-1 py-3 px-1 hover:bg-gray-400/50 hover:text-gray-100 hover:rounded-md hover:cursor-pointer'>
                                    <UserRoundPlus size={18} className='stroke-gray-900' />
                                    <span className='text-md text-gray-900'>Usuarios</span>
                                </div>
                                <div className='flex items-center gap-1 py-3 px-1 hover:bg-gray-400/50 hover:text-gray-100 hover:rounded-md hover:cursor-pointer'>
                                    <PlusCircle size={18} className='stroke-gray-900' />
                                    <span className='text-md text-gray-900'>Categorias</span>
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className="flex items-center justify-between mt-4 gap-1 py-3 px-1 hover:bg-gray-100 hover:text-gray-900 hover:rounded-md hover:cursor-pointer" onClick={() => handleOpenSubMenu('TICKETS')}>
                        <div className='flex items-center gap-1'>
                            <Ticket size={20} />
                            <span>Chamados</span>
                        </div>
                        <ChevronDown size={20} />
                    </div>

                    {isSubmenuOpenTickets ? (
                        <div className='mt-1 gap-3 py-2 px-1 transition-all bg-gray-100 rounded-md'>
                            <div className='flex items-center gap-1 py-3 px-1 hover:bg-gray-400/50 hover:text-gray-100 hover:rounded-md hover:cursor-pointer'>
                                <Send size={18} className='stroke-gray-900' />
                                <span className='text-md text-gray-900'>Novo chamado</span>
                            </div>
                            <div className='flex items-center gap-1 py-3 px-1 hover:bg-gray-400/50 hover:text-gray-100 hover:rounded-md hover:cursor-pointer'>
                                <Search size={18} className='stroke-gray-900' />
                                <span className='text-md text-gray-900'>Pesquisar</span>
                            </div>
                        </div>
                    ) : null}

                    <div className="flex items-center justify-between mt-4 gap-1 py-3 px-1 hover:bg-gray-100 hover:text-gray-900 hover:rounded-md hover:cursor-pointer" onClick={() => handleOpenSubMenu('CHART')}>
                        <div className='flex items-center gap-1'>
                            <BarChart3 size={20} />
                            <span>Relatorios</span>
                        </div>
                        <ChevronDown size={20} />
                    </div>

                    {isSubmenuOpenChart ? (
                        <div className='mt-1 gap-3 py-2 px-1 transition-all bg-gray-100 rounded-md'>
                            <div className='flex items-center gap-1 py-3 px-1 hover:bg-gray-400/50 hover:text-gray-100 hover:rounded-md hover:cursor-pointer'>
                                <ScrollText size={18} className='stroke-gray-900' />
                                <span className='text-md text-gray-900'>Relatorio de Chamados</span>
                            </div>
                        </div>
                    ) : null}
                </>
            ) : null}
        </div>
    );
};