
interface Props {
    title: string;
    description: string;
    link: string;
    image: string;
    rmm: number;
    status: string;
}

const ProjectCard: React.FC<Props> = ({title, description, link, image, rmm, status}) => {
    return (
    <div className="p-6 bg-orange-100 dark:bg-zinc-600 text-zinc-900 transition-colors duration-500     dark:text-slate-50 flex flex-row-reverse mx-auto w-1/2 rounded-md justify-between h-48">
    <div className="flex flex-row-reverse justify-end">
        <div className="pl-8 w-8/12">
            <h2 className="mb-4 text-2xl">{title}</h2>
            <p>{description}</p>
        </div>
        <a href={link} ><img src={image} alt=""  className="w-32 h-32 border-orange-500 border-2"/></a>
    </div>
  
    <div className="order-first text-center ml-8 text-sm">
        <span>Status <br /><span className={status === "Active" ? "text-green-600" : "text-red-600"}>{status}</span> </span>
    </div>

    <div className="order-first text-center text-sm">
        {rmm > 0 && <span>RMM <br />$ {rmm}</span>}
    </div>
</div>)
}

export default ProjectCard;