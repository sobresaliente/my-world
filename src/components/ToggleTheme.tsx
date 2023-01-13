import { useEffect, useState } from "react"
import {Home} from '@icon-park/react';



const themes = ['light', 'dark']

export const ToggleTheme = () => {
    const [isMounted, setIsMounted] = useState(false)

    const [theme, setTheme] = useState(() => {

        if (import.meta.env.SSR) {
            return undefined;
        }

        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    }

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'light') {
            root.classList.remove('dark');
        } else {
            root.classList.add('dark');
        }
    }, [theme]);

    useEffect(() => {
        setIsMounted(true)
      }, []);





    return (isMounted ? <div className="inline-flex items-center p-[1px] rounded-3xl bg-orange-300 dark:bg-zinc-600 w-16">{themes.map((t,) => {
        const checked = t === theme;
        return <button key={t} className={(checked ? 'bg-white text-black' : ' text-black') + ' cursor-pointer rounded-3xl p-2'} onClick={toggleTheme}>{t === 'light' ? <Home /> : <Home />}</button>
    })} 
    </div>
    :  <div className="inline-flex items-center p-[1px] rounded-3xl bg-orange-300 text-orange-300 dark:bg-zinc-600  dark:text-zinc-600 w-16">
<Home />
<Home />
    </div>) 
} 