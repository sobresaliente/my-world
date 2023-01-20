import { useEffect, useState } from "react"


function SunIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
            <path
                d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                fill="none"
            />
        </svg>
    )
}

function MoonIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

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
            root.classList.add('dark')
        }
    }, [theme]);

    useEffect(() => {
        setIsMounted(true)
    }, []);





    return (isMounted ? <div className="inline-flex items-center justify-between p-[2px] rounded-3xl bg-orange-300 dark:bg-zinc-600 w-16 opacity-60 mt-2 sm:mt-0 absolute right-3 top-0 sm:relative">{themes.map((t,) => {
        const checked = t === theme;
        return <button key={t} className={(checked ? 'bg-white text-black' : ' text-black') + ' cursor-pointer rounded-3xl p-2'} onClick={toggleTheme} aria-label={'turn on ' + t + ' theme button'}>{t === 'light' ? <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
            : <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
        }</button>
    })}
    </div>
        : <div className="inline-flex items-center p-[1px] rounded-3xl bg-orange-300 text-orange-300 dark:bg-zinc-600  dark:text-zinc-600 w-16 opacity-0 ">
            <button className='bg-orange-300 text-orange-300 dark:bg-zinc-600  dark:text-zinc-600 w-16 cursor-pointer rounded-3xl p-2 opacity-0' aria-label="turn on white theme button" ><SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" /></button>
            <button className='bg-orange-300 text-orange-300 dark:bg-zinc-600  dark:text-zinc-600 w-16 cursor-pointer rounded-3xl p-2 opacity-0' aria-label="turn on dark theme button"><MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
            </button>
        </div>)
} 
