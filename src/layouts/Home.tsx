import Navbar from '../components/Navbar';
import headerImage from '../assets/header_img.svg';
import bgWoman from '../assets/bg-woman.svg';
import profilePict from '../assets/profile-pic.svg';
import starsIcon from '../assets/stars.svg';
import checkSecon from '../assets/check-secondary.svg';
import checkPrimary from '../assets/check-primary.svg';
import bgStart from '../assets/bg-start.svg';
import Button from '../components/Button';
import CardList from '../components/CardList';
import CompaniesList from '../components/CompaniesList';
import AlumniList from '../components/AlumniList';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div className="container py-[30px] font-sans scroll-smooth">
        <Navbar />
        <main id="home" className="bg-white flex gap-8 flex-col items-center mt-4 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/2">
            <h2 className="uppercase text-primary text-sm tracking-wide lg:text-lg">Suxz make It Easy</h2>
            <h1 className="text-4xl text-dark font-bold leading-[3rem] lg:text-7xl">
              Find Your Way <br className="lg:none" /> Of Success
            </h1>
            <p className="text-base text-dark my-4 font-medium lg:text-xl lg:my-6">We help you to increase self-confidence and train yourself in a direction, and make you more creative in developing a work.</p>
            <div className="w-full lg:w-2/3 flex justify-between">
              <Button text="Get Started" className="bg-primary text-white px-[16px] font-semibold lg:px-[34px]" />
              <Button text="Our Services" className="bg-[#F7F7FD] text-[#A2B3BF] px-[16px] font-semibold lg:px-[34px]" />
            </div>
          </div>
          <div className="w-full flex justify-center lg:w-1/2 order-first lg:order-last">
            <img src={headerImage} alt="Header Image" className="w-[320px] h-[300px] lg:w-[574px] lg:h-[616px]" />
          </div>
        </main>
      </div>
      <section id="learnings" className="bg-[#F8F8FF] flex flex-col gap-8 container mt-8 py-[40px] lg:py-[80px]">
        <div>
          <h2 className="uppercase text-primary text-sm tracking-wide lg:text-lg">Learnings</h2>
          <h1 className="text-xl text-dark font-bold my-2 lg:text-3xl">
            Online Learning Platform <br /> International Curriculum
          </h1>
          <p className="text-base text-dark  font-medium lg:text-xl lg:my-6">
            Study and understand the material <br /> class is more relaxed without time limit.
          </p>
        </div>
        <div className="flex  flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-0">
          <CardList />
        </div>
      </section>
      <section id="about-us" className="flex flex-col gap-12 container bg-white py-[40px] lg:gap-0 lg:flex-row lg:justify-between lg:py-[80px]">
        <div className="relative ">
          <img src={bgWoman} alt="Woman" className="rounded-lg" />
          <div className="absolute -bottom-8 right-4 px-2 py-2 flex gap-4 bg-white rounded-lg border border-[#F8F8FF] shadow-xl shadow-[#F7F7FD]">
            <div className="relative  w-[60px] h-[60px]">
              <img src={profilePict} alt="Sarah Manrope" />
              <div className="absolute flex items-center justify-center bg-white w-[20px] h-[20px] rounded-full top-0 right-0">
                <img src={checkSecon} alt="Check" />
              </div>
            </div>
            <div>
              <h1 className="text-base font-bold text-dark">Sarah Manrope</h1>
              <p className="text-sm text-dark font-light">Designer</p>
              <div className="flex gap-1">
                <img src={starsIcon} alt="Stars" />
                <img src={starsIcon} alt="Stars" />
                <img src={starsIcon} alt="Stars" />
                <img src={starsIcon} alt="Stars" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-5/12 ">
          <h2 className="uppercase text-primary text-sm tracking-wide lg:text-lg">About Us</h2>
          <h1 className="text-xl text-dark font-bold  my-2 lg:text-5xl">
            We Help Improve <br /> Your Work Experience
          </h1>
          <p className="text-base text-dark  font-medium lg:text-xl lg:my-6">We help you to increase self-confidence and train yourself in a direction.</p>
          <div className="my-4 lg:my-8">
            <ul className="flex flex-col gap-2">
              <li className="w-full flex gap-4 items-center">
                <div className="w-[30px] bg-opacity-30 h-[30px] flex justify-center rounded-full items-center bg-[#44E4C9]">
                  <img src={checkPrimary} alt="Check Primary" className="w-[15px] h-[15px]" />
                </div>
                <p className="w-5/6 text-base text-dark font font-medium">Study and produce creation to get a job</p>
              </li>
              <li className="w-full flex gap-4 items-center">
                <div className="w-[30px] bg-opacity-30 h-[30px] flex justify-center rounded-full items-center bg-[#44E4C9]">
                  <img src={checkPrimary} alt="Check Primary" className="w-[15px] h-[15px]" />
                </div>
                <p className="w-5/6 text-base text-dark font font-medium">Up to date material and created by expert creators</p>
              </li>
              <li className="w-full flex gap-4 items-center">
                <div className="w-[30px] bg-opacity-30 h-[30px] flex justify-center rounded-full items-center bg-[#44E4C9]">
                  <img src={checkPrimary} alt="Check Primary" className="w-[15px] h-[15px]" />
                </div>
                <p className="w-5/6 text-base text-dark font font-medium">Complete classes and projects and get a certificate from us</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8FF] flex flex-col gap-8 container mt-8 py-[40px] lg:py-[80px]">
        <h1 className="text-xl text-dark font-bold  text-center lg:text-5xl">Companies That Recruit Our Graduates</h1>
        <p className="text-base text-dark  font-medium text-center lg:text-xl ">Our graduates have worked in more than 400 companies around the World</p>
        <div className="flex justify-center my-4">
          <ul className="flex flex-wrap  justify-center items-center gap-6 lg:w-2/3 lg:gap-14">
            <CompaniesList />
          </ul>
        </div>
      </section>
      <section className="flex flex-col container bg-white py-[40px]  lg:py-[80px]">
        <h2 className="uppercase text-primary text-sm tracking-wide text-center lg:text-lg">Testimonial</h2>
        <h1 className="text-xl text-dark font-bold my-2 text-center lg:text-5xl">Our Alumni Say</h1>
        <p className="text-base text-dark  font-medium text-center lg:text-xl ">These are the words of people who have taken our class</p>
        <div className="flex justify-center flex-col items-center lg:flex-row lg:justify-between lg:mt-8">
          <AlumniList />
        </div>
      </section>
      <section style={{ backgroundImage: `url(${bgStart})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="  flex flex-col items-center container mt-8 py-[40px] lg:py-[80px]">
        <h1 className="text-xl text-white font-bold my-2 text-center lg:text-5xl">So? What Are You Waiting For</h1>
        <p className="text-base text-white  font-medium text-center lg:text-xl ">It's time to build your career, study in a relaxed and purposeful manner</p>
        <div className="mt-10">
          <Button text="Get Started" className="bg-primary text-white px-[16px] font-semibold lg:px-[34px]" />
          <Button text="Contact Us" className=" text-white px-[16px] font-semibold lg:px-[34px]" />
        </div>
      </section>
      <footer className="flex flex-col items-center container bg-white pt-[40px]  lg:pt-[80px] ">
        <div className="flex flex-col lg:justify-between lg:flex-row">
          <Footer />
        </div>
        <p className="text-sm font-normal text-dark text-center py-8">
          Created By <span className="font-bold">Muhammad Taufik Hidayat</span>
        </p>
      </footer>
    </>
  );
};

export default Home;
