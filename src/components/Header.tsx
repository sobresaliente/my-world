import { ToggleTheme } from './ToggleTheme';

interface Props {
  active: string;
}

const Header: React.FC<Props> = ({ active }) => {
  return (
    <header className='fixed w-full backdrop-blur-md flex flex-col sm:flex-row justify-between p-2 z-20 border-black border-b-4 bg-header'>
      <h1 className='text-3xl tracking-tighter text-center sm:text-left sm:ml-16'>
        <a
          href='/'
          className={
            (active === 'logo' ? 'dark:text-white text-secondary ' : '') +
            'hover:text-white duration-300 dark:decoration-dark-secondary text-stone-500 decoration-secondary underline-offset-4 font-rowdies'
          }
        >
          Sobresaliente
        </a>
      </h1>
      <nav className='w-full text-xl sm:max-w-xl'>
        <ul className='flex justify-around items-center h-full mt-4 sm:mt-0 text-sm sm:text-xl'>
          <li>
            <a
              href='/projects'
              className={
                (active === 'projects' ? 'dark:text-white text-secondary ' : '') +
                'hover:text-white duration-300 text-stone-500 dark:decoration-dark-secondary decoration-secondary underline-offset-4'
              }
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='/articles'
              className={
                (active === 'articles' ? 'dark:text-white  text-secondary ' : '') +
                'hover:text-white duration-300 dark:decoration-dark-secondary text-stone-500 decoration-secondary underline-offset-4'
              }
            >
              Articles
            </a>
          </li>

          <li>
            <a
              href='/about'
              className={
                (active === 'about' ? 'dark:text-white  text-secondary ' : '') +
                'hover:text-white duration-300 text-stone-500 dark:decoration-dark-secondary decoration-secondary underline-offset-4'
              }
            >
              About me
            </a>
          </li>
          <ToggleTheme />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
