import suxzLogo from '../assets/suxz-logo.svg';

const Footer = () => {
  return (
    <>
      <div className="lg:w-2/6">
        <div className="flex items-center gap-2">
          <img src={suxzLogo} alt="Suxz Logo" />
          <h1 className="text-3xl font-bold text-dark">Suxz</h1>
        </div>
        <p className="my-4 text-base text-dark  font-medium  lg:text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
      </div>
      <div className="lg:w-2/4 flex justify-between gap-4 flex-wrap items-center">
        <div>
          <h1 className="text-xl text-dark font-bold">Company</h1>
          <ul className="text-base flex flex-col gap-2 text-dark font-medium my-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Portofolios</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-dark font-bold">Links</h1>
          <ul className="text-base flex flex-col gap-2 text-dark font-medium my-2">
            <li>
              <a href="#">Privacy & Policy</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Supports</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-dark font-bold">Contact</h1>
          <ul className="text-base flex flex-col gap-2 text-dark font-medium my-2">
            <li className="flex gap-2 text-primary">
              {/* <div></div> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p>(021) 31048184</p>
            </li>
            <li className="flex gap-2 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <p>irham@suxz.com</p>
            </li>
            <li>
              Jl. Narogong. Perum <br /> Cileungsi Elok Blok A No.5. <br /> Jakarta Selatan. 12240.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
