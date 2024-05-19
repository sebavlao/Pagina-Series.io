import { Link } from "react-router-dom";

export const Card = ({ serieMap }) => {
    return (
        <Link className="w-[140px] sm:w-[218px] flex-none snap-center" to={"/" + serieMap.id}>
            <li className="hover:scale-110 h-[100%] hover:transition-all transition-all">
                <img className="max-h-[327px] h-[100%] rounded-lg" src={`https://image.tmdb.org/t/p/w500${serieMap.poster_path}/images`} alt="" />
                <strong className="font-secondary">{serieMap.name}</strong>
            </li>
        </Link>
    );
}