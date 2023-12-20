'use client';
import { useState } from 'react';
import './globals.css';
import { Roboto_Condensed } from 'next/font/google';
import { Header } from '@/components/Header';
import { Siderbar } from '@/components/Sidebar';

const robotoRegular = Roboto_Condensed({ subsets: ['latin'], weight: '400', variable: '--font-roboto-400' });
const robotoBold = Roboto_Condensed({ subsets: ['latin'], weight: '700', variable: '--font-roboto-700' });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

    function handleOpenDialogListClients(isOpenDialog: boolean) {
        setIsOpenSidebar(isOpenDialog);
    };

    return (
        <html lang="pt-br">
            <body className={`${robotoRegular.variable} ${robotoBold.variable} font-sansRegular overflow-hidden`}>
                <Header onHandleOpenSidebar={handleOpenDialogListClients} />

                <main className="flex text-gray-100 overflow-hidden">
                    <aside className={`bg-gray-900 transition-all duration-200 ${isOpenSidebar ? 'w-72 ease-in' : 'w-0 ease-out'}`}>
                        <Siderbar isOpenMenu={isOpenSidebar} />
                    </aside>
                    <div className='flex max-h-screen w-full'>
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
};