import { ToggleTheme } from './ToggleTheme';

interface Props {
  active: string;
}

const Header: React.FC<Props> = ({ active }) => {
  return (
    <header className='fixed w-full backdrop-blur-md flex flex-col sm:flex-row justify-between p-2 z-20 border-black border-b-4 bg-header'>
      <h1 className='text-3xl tracking-tighter text-center sm:text-left'>
        <a
          href='/'
          className={
            (active === 'logo' ? 'dark:text-dark-secondary text-secondary ' : '') +
            'hover:underline dark:decoration-dark-secondary decoration-secondary underline-offset-4 font-rowdies'
          }
        >
          Sobresaliente
        </a>
      </h1>
      <nav className='w-full text-xl sm:max-w-5xl'>
        <ul className='flex justify-around items-center h-full mt-4 sm:mt-0 text-sm sm:text-xl'>
          <li>
            <a
              href='/projects'
              className={
                (active === 'projects' ? 'dark:text-dark-secondary text-secondary ' : '') +
                'hover:underline dark:decoration-dark-secondary decoration-secondary underline-offset-4'
              }
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='/articles'
              className={
                (active === 'articles' ? 'dark:text-dark-secondary  text-secondary ' : '') +
                'hover:underline dark:decoration-dark-secondary decoration-secondary underline-offset-4'
              }
            >
              Articles
            </a>
          </li>

          <li>
            <a
              href='/digests'
              className={
                (active === 'digests' ? 'dark:text-dark-secondary  text-secondary ' : '') +
                'hover:underline dark:decoration-dark-secondary decoration-secondary underline-offset-4'
              }
            >
              Weekly digest
            </a>
          </li>
          <li>
            <a
              href='/about'
              className={
                (active === 'about' ? 'dark:text-dark-secondary  text-secondary ' : '') +
                'hover:underline dark:decoration-dark-secondary decoration-secondary underline-offset-4'
              }
            >
              About me
            </a>
          </li>
        </ul>
      </nav>
      <ToggleTheme />
    </header>
  );
};

export default Header;
