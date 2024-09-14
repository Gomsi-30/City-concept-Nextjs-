'use client';

import { usePathname } from 'next/navigation';
import Link from "next/link";

const ArticleNavbar = () => {
    let path = usePathname();
    path = path.split('/')[2];
    path = path[0] + path[1];

    return (
        <div className='w-full border-black border-[1px] py-2 overflow-x-auto'>
            <div className='container flex flex-col md:flex-row gap-4 text-lg font-semibold'>
                <Link className={`${path.startsWith('re') ? 'font-bold underline' : ''}`} href='/article/realestate'>Real Estate</Link>
                <Link className={`${path.startsWith('pr') ? 'font-bold underline' : ''}`} href='/article/properties'>Properties</Link>
                <Link className={`${path.startsWith('ma') ? 'font-bold underline' : ''}`} href='/article/marketnews'>Market News</Link>
                <Link className={`${path.startsWith('lo') ? 'font-bold underline' : ''}`} href='/article/loan'>Loan</Link>
                <Link className={`${path.startsWith('in') ? 'font-bold underline' : ''}`} href='/article/investments'>Investment</Link>
            </div>
        </div>
    );
}

export default ArticleNavbar;
