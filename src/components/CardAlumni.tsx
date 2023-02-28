interface IAlumni {
  name: string;
  job: string;
  message: string;
  image: string;
}

const CardAlumni = ({ name, job, message, image }: IAlumni) => {
  return (
    <div className="group px-4 mt-16 relative w-[240px] border border-primary rounded-lg flex flex-col items-center transition-colors duration-150 hover:bg-primary">
      <img src={image} alt={name} className="absolute -top-10 w-[80px] h-[80px]" />
      <div className="my-14">
        <h1 className="text-base font-bold text-dark text-center group-hover:text-white">{name}</h1>
        <p className="text-sm text-dark font-light text-center group-hover:text-white">{job}</p>
      </div>
      <p className="text-base mb-14 text-dark  font-medium text-center lg:text-xl group-hover:text-white">"{message}"</p>
    </div>
  );
};

export default CardAlumni;
