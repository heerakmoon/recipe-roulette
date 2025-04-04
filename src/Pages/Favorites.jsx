import HeaderMsg from '../components/HeaderMsg';
import WebHeader from '../components/WebHeader';
import FavoritesButton from '../components/FavoritesButton';
import HomeButton from '../components/HomeButton';
import useScreenSize from '../utils/useScreenSize';

const Favorites = () => {
  const screenWidth = useScreenSize();

  return (
    <div className="flex flex-col items-center mt-10 pb-12">
      {screenWidth >= 512 ? <WebHeader page="favorites" /> : <h1 className="text-[#0B6F10]">Recipe Roulette</h1>}
      <HeaderMsg page="favorites" />
      <div className="py-3 fixed bottom-0 bg-white w-full flex justify-center">
        {screenWidth < 512 && location.pathname === "/favorites" &&  <HomeButton />}
        {screenWidth < 512 && <div ><FavoritesButton /></div>}
      </div>
    </div>
  )
};

export default Favorites;
