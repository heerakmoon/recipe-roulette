import { Star } from "lucide-react";

const WebHeader = () => {
    return (
        <div className="w-3/4 flex items-center justify-between">
            <div className="w-[24px]"></div>
            <h1 className="text-[#0B6F10] w-2xs text-center">Recipe Roulette</h1>
            <Star className="text-left cursor-pointer text-[#858585]" />
        </div>
    )
}

export default WebHeader;
