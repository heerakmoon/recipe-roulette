import { Star } from "lucide-react";

const FavoritesButton = () => {
    const classes = localStorage.length ? "text-left cursor-pointer text-[#FFF704]" : "text-left cursor-pointer text-[#858585]";

    return (
        <Star className={classes} />
    )
}

export default FavoritesButton;