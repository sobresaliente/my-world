interface Props {
    title: string;
    position: string;
    picture: string;
    link: string;
    description: string;
    dates: string;
    duration: string;
}

const JobBlock: React.FC<Props> = ({title, position, picture, dates, duration, link, description}) => {
    return (
    <section className="bg-orange-100 dark:bg-zinc-600 rounded-lg text-zinc-900 dark:text-slate-50 p-8 flex flex-col mb-16 w-10/12 mx-auto transition-colors duration-500">
        <h2 className="text-2xl text-center mb-4">{title}</h2>

        <img src={picture} alt=""  className="w-64 h-64 block mx-auto mb-8 border-orange-500 border-2"/>
        <span className="text-center text-gray-500 dark:text-gray-300 text-transition duration-500">{position}</span>
        <span className="text-center">{dates}</span>
        <span className="text-center mb-4">{duration}</span>
        <p className="w-10/12 mx-auto">{description}</p>
    </section>)
}

export default JobBlock;