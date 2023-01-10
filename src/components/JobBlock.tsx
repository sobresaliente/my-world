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
    <section className="bg-zinc-700 p-8 flex flex-col mb-16 w-10/12 mx-auto">
        <h2 className="text-2xl text-center mb-4">{title}</h2>

        <img src={picture} alt=""  className="w-64 h-64 block mx-auto mb-8"/>
        <span className="text-center text-gray-300">{position}</span>
        <span className="text-center">{dates}</span>
        <span className="text-center mb-4">{duration}</span>
        <p className="w-10/12 mx-auto">{description}</p>
    </section>)
}

export default JobBlock;