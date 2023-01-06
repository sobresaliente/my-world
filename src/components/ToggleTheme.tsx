import { useState } from "react"

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



    return <button type="button">Toggle</button>
}