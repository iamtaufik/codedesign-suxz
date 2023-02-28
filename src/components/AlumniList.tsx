import jasonPic from '../assets/jason-todd.svg';
import casandraPic from '../assets/casandra.svg';
import peterPic from '../assets/peter.svg';
import jeanPic from '../assets/jean-gray.svg';
import CardAlumni from './CardAlumni';

interface IAlumni {
  name: string;
  job: string;
  message: string;
  image: string;
}

const AlumniList = () => {
  const alumnies: Array<IAlumni> = [
    {
      name: 'Jason Todd',
      job: 'Engginer',
      message: 'The mentor is cool, how to convey each material is also detailed and easy to understand..',
      image: jasonPic,
    },
    {
      name: 'Casandra K',
      job: 'Web Developer',
      message: 'The mentor is cool, how to convey each material is also detailed and easy to understand..',
      image: casandraPic,
    },
    {
      name: 'Peter Parker',
      job: 'PHP Enthusiast',
      message: 'The mentor is cool, how to convey each material is also detailed and easy to understand..',
      image: peterPic,
    },
    {
      name: 'Jean Gray',
      job: 'Designer',
      message: 'The mentor is cool, how to convey each material is also detailed and easy to understand..',
      image: jeanPic,
    },
  ];
  return (
    <>
      {alumnies.map((alumni: IAlumni, index: number) => (
        <CardAlumni name={alumni.name} image={alumni.image} job={alumni.job} message={alumni.message} key={index} />
      ))}
    </>
  );
};

export default AlumniList;
