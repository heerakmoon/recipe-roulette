import FavoritesButton from "./FavoritesButton";
import HomeButton from "./HomeButton";

const WebHeader = ({ page }) => {
    return (
        <div className="w-3/4 flex items-center justify-between">
            {page === "favorites" ? <HomeButton /> : <div className="w-[24px]"></div>}
            <h1 className="text-[#0B6F10] w-2xs text-center">Recipe Roulette</h1>
            {page === "favorites" ? <div className="w-[24px]"></div> : <FavoritesButton />}
        </div>
    )
}

export default WebHeader;
