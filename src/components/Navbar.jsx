import { useState } from 'react';
import { navlinks } from '../constants/constants';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import logo from '../assets/icons/logo.svg'
import styles from '../style';
import { handleDownload } from '../constants/constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleNav = () => {
    setToggle(!toggle)
  }

  return (
    <nav className={`w-full flex pt-6 justify-between items-center text-accent`}>

      <div className='relative'>
        <div className={`layer-blur-nav ${styles.blurDiv}`}></div>
        <img src={logo} alt="logo" className='h-8 w-8' />
      </div>
      
      
      <ul className={`hidden md:${styles.flexCenter} px-2 py-1 gap-12`}>
        { navlinks.map((nav, index) => (
          <li key={index} 
            className={`cursor-pointer hover:border-b-2 hover:border-accent`}>
              <a href={`#${nav.link}`}>
                {nav.text}
              </a>
          </li>
        ))}
      </ul>

      <button className={`md:flex hidden justify-end ${styles.boderedButton}`} onClick={handleDownload}>
        Resume
      </button>

      <div onClick={handleNav} className='md:hidden flex'>
          { toggle ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} /> }
          <div className={!toggle ? `absolute right-0 top-[56px] w-[40%] ease-in duration-500 bg-complimentary h-fit` : 'fixed right-[-100%]'}>
            <ul className='justify-center items-center px-2 py-2'>
              { navlinks.map((nav, index) => (
                <li key={index} 
                  className={`cursor-pointer border-b border-b-primary px-4 py-2`}>
                    <a href={`#${nav.link}`} className='text-base'>
                      {nav.text}
                    </a>
                </li>
              ))}
            </ul>

          <button className= {`${styles.boderedButton} mx-4 my-2 w-[50%]`} onClick={handleDownload}>
            Resume
          </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
