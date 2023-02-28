import icon1 from '../assets/icon-1.svg';
import icon2 from '../assets/icon-2.svg';
import icon3 from '../assets/icon-3.svg';
import icon4 from '../assets/icon-4.svg';
import Card from './Card';

interface ICard {
  title: string;
  description: string;
  image: string;
}

const CardList = () => {
  const cards: ICard[] = [
    {
      title: 'Starter',
      description: 'Free class access for that start learning code and design',
      image: icon1,
    },
    {
      title: 'Premium',
      description: 'Advanced material from the Starter & learn to build projects',
      image: icon2,
    },
    {
      title: 'Superstar',
      description: 'Materials for experts who have completed the premium package',
      image: icon3,
    },
    {
      title: 'Bootcamp',
      description: 'Informatics science training program with the latest material',
      image: icon4,
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <Card title={card.title} description={card.description} image={card.image} />
      ))}
    </>
  );
};

export default CardList;
