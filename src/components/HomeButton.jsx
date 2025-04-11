import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router";

const HomeButton = () => {
    return (
        <Link to="/">
            <ArrowBigLeft className="text-[#40C146]" />
        </Link>
    )
}

export default HomeButton;
