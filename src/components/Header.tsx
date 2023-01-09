import { ToggleTheme } from "./ToggleTheme"

interface Props {
    active: string;
}

const Header: React.FC<Props> = ({active}) => {
    return (<header className="fixed w-full backdrop-blur-md flex justify-between p-2">
    <h1 className="text-3xl"><a href="/" className={(active === 'logo' ? 'text-orange-500 ' : '') +'hover:underline decoration-orange-500 underline-offset-4'}>Sobresaliente</a></h1>
    <nav className="w-full text-xl">
        <ul className="flex justify-around items-center h-full">
            <li><a href="/projects" className={(active === 'projects' ? 'text-orange-500 ' : '') + 'hover:underline decoration-orange-500 underline-offset-4'}>Projects</a></li>
            <li><a href="/posts" className={(active === 'posts' ? 'text-orange-500 ' : '') + "hover:underline decoration-orange-500 underline-offset-4"}>Weekly digest</a></li>
            <li><a href="/about" className={(active === 'about' ? 'text-orange-500 ' : '') + "hover:underline decoration-orange-500 underline-offset-4"}>About me</a></li>
        </ul>
    </nav>
    <ToggleTheme />
</header>)
}

export default Header;