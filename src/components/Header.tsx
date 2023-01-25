import { ToggleTheme } from "./ToggleTheme"


interface Props {
    active: string;
}

const Header: React.FC<Props> = ({active}) => {
    return (<header className="fixed w-full backdrop-blur-md flex flex-col sm:flex-row justify-between p-2 z-20 ">
    <h1 className="text-3xl tracking-tighter text-center sm:text-left"><a href="/" className={(active === 'logo' ? 'dark:text-dark-secondary ' : '') +'hover:underline dark:decoration-dark-secondary underline-offset-4 font-rowdies'}>Sobresaliente</a></h1>
    <nav className="w-full text-xl sm:max-w-5xl">

        <ul className="flex justify-around items-center h-full mt-4 sm:mt-0">
            <li><a href="/projects" className={(active === 'projects' ? 'dark:text-dark-secondary ' : '') + 'hover:underline dark:decoration-dark-secondary underline-offset-4'}>Projects</a></li>
            <li><a href="/posts" className={(active === 'posts' ? 'dark:text-dark-secondary  ' : '') + "hover:underline dark:decoration-dark-secondary underline-offset-4"}>Weekly digest</a></li>
            <li><a href="/about" className={(active === 'about' ? 'dark:text-dark-secondary  ' : '') + "hover:underline dark:decoration-dark-secondary underline-offset-4"}>About me</a></li>
        </ul>
    </nav> 
    <ToggleTheme />
</header>)
}

export default Header;