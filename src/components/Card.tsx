import Button from './Button';

interface ICard {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: ICard) => {
  return (
    <div className="group w-[250px] h-[330px] flex flex-col gap-4 bg-white px-[30px] py-[30px] rounded-lg transition-colors duration-150 hover:bg-primary">
      <img src={image} alt={title} className="w-[80px] h-[80px] rounded-lg" />
      <div>
        <h1 className="text-xl text-dark font-bold group-hover:text-white">{title}</h1>
        <p className="text-sm text-dark font-medium my-2 group-hover:text-white">{description}</p>
      </div>
      <div className="w-full">
        <Button text="See Class" className="bg-[#44E4C9] text-white font-semibold w-full" />
      </div>
    </div>
  );
};

export default Card;
