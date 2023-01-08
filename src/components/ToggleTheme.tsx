import { useEffect, useState } from "react"

export const ToggleTheme = () => {
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






    return <button type="button" onClick={toggleTheme}>{theme === 'light' ? 'Turn off the light' : 'Turn on the light' }</button>
}