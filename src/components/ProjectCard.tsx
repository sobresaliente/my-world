interface Props {
  title: string;
  description: string;
  link: string;
  image: string;
  rmm: number;
  status: string;
}

const ProjectCard: React.FC<Props> = ({ title, description, link, image, rmm, status }) => {
  return (
    <div className='p-6 bg-bg-secondary dark:bg-dark-bg-secondary text-zinc-900 transition-colors duration-500 dark:text-slate-50 flex flex-col-reverse sm:flex-row-reverse mx-auto rounded-md justify-between sm:w-1/2 mt-8'>
      <div className='flex flex-col-reverse sm:flex-row-reverse sm:justify-end items-center'>
        <div className='mt-4 sm:mt-0 sm:pl-8 sm:w-8/12 text-dark-text-primary'>
          <h2 className='mb-4 text-xl text-center sm:text-left mt-2'>{title}</h2>
          <p className='text-center sm:text-left font-rubik h-24'>{description}</p>
        </div>
        <a href={link}>
          <img
            src={image}
            alt=''
            className='w-32 h-32 border-accent dark:border-dark-accent border-4 bg-white'
          />
        </a>
      </div>

      <div className='order-first text-center sm:ml-8 text-sm mt-4 sm:mt-2'>
        <span className='text-dark-text-primary'>
          Status <br />
          <span
            className={status === 'Active' ? 'dark:text-green-600 text-green-400' : 'text-red-600'}
          >
            {status}
          </span>{' '}
        </span>
      </div>

      <div className='order-first text-center text-sm mt-2 sm:mt-0'>
        {rmm > 0 && (
          <span>
            RMM <br />$ {rmm}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
