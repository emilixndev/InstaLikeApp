import { AiOutlineHome, BiCompass, IoMdAddCircleOutline, RiAccountCircleLine } from 'react-icons/all';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <div className="border-b-[0.8px]">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-2 h-16">
          <Link to="/feed">
            <h1 className="font-['Billabong'] text-[44px]">Instalike</h1>{' '}
          </Link>
          <nav className="flex gap-5">
            <Link to="/feed">
              <AiOutlineHome size={30}></AiOutlineHome>
            </Link>
            <Link to="/discover">
              <BiCompass size={30}> </BiCompass>
            </Link>
            <Link to="/addPost">
              <IoMdAddCircleOutline size={30}></IoMdAddCircleOutline>
            </Link>
            <Link to="/profile">
              <RiAccountCircleLine size={30}></RiAccountCircleLine>
            </Link>
            {/*<a href="#">*/}
            {/*  <FontAwesomeIcon className="text-[24px]" icon={faMoon} />*/}
            {/*</a>*/}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
