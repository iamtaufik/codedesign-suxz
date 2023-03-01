import suxzLogo from '../assets/suxz-logo.svg';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white">
      <div className="flex  items-center gap-16  md:gap-8">
        <div className="flex items-center gap-2">
          <img src={suxzLogo} alt="Suxz" />
          <h1 className="text-3xl font-bold text-dark md:text-2xl">Suxz</h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-8 items-center text-lg text-[#394360] font-semibold ">
            <li>
              <a className="md:text-base" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="md:text-base" href="#learnings">
                Learnings
              </a>
            </li>
            <li>
              <a className="md:text-base" href="#about-us">
                About Us
              </a>
            </li>
            <li>
              <a className="md:text-base" href="#testimonial">
                Testimonial
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex items-center ">
        <Button text="Log In" className="text-dark text-xl font-semibold md:text-base md:px-[15px]" />
        <Button text="Sign Up" className="bg-primary text-white text-xl font-semibold md:text-base md:px-[15px]" />
      </div>
      <div className="w-[40px] flex flex-col items-end gap-2 md:hidden">
        <div className="w-full h-1 bg-primary rounded-md"></div>
        <div className="w-2/3 h-1 bg-primary rounded-md"></div>
        <div className="w-1/3 h-1 bg-primary rounded-md"></div>
      </div>
    </nav>
  );
};

export default Navbar;
