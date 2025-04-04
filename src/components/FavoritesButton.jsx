import { Star } from "lucide-react";
import { Link } from "react-router";

const FavoritesButton = () => {
    const classes = localStorage.length ? "text-left cursor-pointer text-[#FFF704]" : "text-left cursor-pointer text-[#858585]";

    return (
        <Link to="/favorites">
            <Star className={classes} />
        </Link>
    )
}

export default FavoritesButton;