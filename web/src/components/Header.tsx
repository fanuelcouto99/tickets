'use client'
import { Sling as Hamburger } from 'hamburger-react'
import * as Separator from '@radix-ui/react-separator';
import * as Popover from '@radix-ui/react-popover';
import * as Avatar from '@radix-ui/react-avatar';
import { Bell, Settings, LogOut, UserCircle2, Settings2 } from 'lucide-react';
import { useState } from 'react';

interface Props {
    onHandleOpenSidebar: (isOpenDialog: boolean) => void;
};

export function Header({ onHandleOpenSidebar }: Props) {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    return (
        <div className="h-14 flex items-center justify-between px-3 text-gray-100 bg-gray-900">
            <div>
                <Hamburger
                    size={20}
                    duration={0.8}
                    toggled={isOpenMenu}
                    toggle={setIsOpenMenu}
                    onToggle={toggled => {
                        if (toggled) {
                            onHandleOpenSidebar(true);
                        } else {
                            onHandleOpenSidebar(false);
                        }
                    }}
                />
            </div>

            <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2'>
                    <Bell size={18} className='cursor-pointer hover:stroke-gray-400' />
                    <Settings size={18} className='cursor-pointer hover:stroke-gray-400' />
                </div>

                <Separator.Root decorative orientation='vertical' className='h-8 w-[1px] bg-gray-100' />

                <Popover.Root>
                    <Popover.Trigger asChild>
                        <div className='flex items-center cursor-pointer'>
                            <Avatar.Root>
                                <Avatar.Image
                                    src='https://github.com/fanuelcouto99.png'
                                    alt=''
                                    className='w-10 h-10 rounded-md'
                                />
                                <Avatar.Fallback>
                                    <UserCircle2 size={28} />
                                </Avatar.Fallback>
                            </Avatar.Root>

                            <span className='ml-2 flex items-center gap-1'>
                                Fanuel Couto
                                <Separator.Root decorative orientation='vertical' className='h-5 w-[1px] bg-gray-100' />
                                <small>
                                    Diretor
                                </small>
                            </span>
                        </div>
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Content sideOffset={5} className='flex flex-col mr-4 py-2 px-1 w-48 rounded-md bg-gray-100 text-gray-900 border border-gray-900'>
                            <span className='flex items-center gap-1 px-1 w-full h-10 cursor-pointer rounded-md hover:bg-gray-900 hover:text-gray-100 transition-all'>
                                <Settings2 size={18} />
                                Alterar dados
                            </span>

                            <span className='flex items-center gap-1 px-1 w-full h-10 cursor-pointer rounded-md hover:bg-gray-900 hover:text-gray-100 transition-all'>
                                <LogOut size={18} />
                                Logout
                            </span>

                            <Popover.Arrow className='fill-gray-100' />
                        </Popover.Content>
                    </Popover.Portal>
                </Popover.Root>
            </div>
        </div>
    );
};