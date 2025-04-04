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
      {screenWidth < 512 && (
        <div className="w-3/4 py-3 fixed bottom-0 bg-white flex justify-between">
          <HomeButton />
          <div ><FavoritesButton /></div>
          <div className="w-[24px]"></div>
        </div>
      )}
    </div>
  )
};

export default Favorites;
