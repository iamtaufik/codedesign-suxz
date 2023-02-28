import Github from '../assets/Github.svg';
import Microsoft from '../assets/Microsoft.svg';
import Redis from '../assets/Redis.svg';
import Amazon from '../assets/Amazon.png';
import Paypal from '../assets/Paypal.svg';
import Linkedin from '../assets/Linkedin.svg';
import Reddit from '../assets/Reddit.svg';
import Medium from '../assets/Medium.svg';

interface ICompany {
  name: string;
  imageUrl: string;
}

const CompaniesList = () => {
  const companies: Array<ICompany> = [
    {
      name: 'Github',
      imageUrl: Github,
    },
    {
      imageUrl: Microsoft,
      name: 'Microsoft',
    },
    {
      imageUrl: Redis,
      name: 'Redis',
    },
    {
      imageUrl: Amazon,
      name: 'Amazon',
    },
    {
      imageUrl: Paypal,
      name: 'Paypal',
    },
    {
      imageUrl: Linkedin,
      name: 'Linkedin',
    },
    {
      imageUrl: Reddit,
      name: 'Reddit',
    },
    {
      imageUrl: Medium,
      name: 'Medium',
    },
  ];
  return (
    <>
      {companies.map((companie) => (
        <li>
          <img src={companie.imageUrl} alt={companie.name} className="w-[150px] " />
        </li>
      ))}
    </>
  );
};

export default CompaniesList;
