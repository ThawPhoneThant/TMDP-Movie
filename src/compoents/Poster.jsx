
import { Link } from 'react-router-dom'

const Poster = ({movies})=>{
    return(
        <Link className="relative" to={`/detail/${movies.id}`}>

             {/* <div className="bg-slate-900 w-full h-full absolute top-0 opacity-65 z-5"></div> */}
            <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt="" className="card-img cursor-pointer" />
            
            
        </Link>
    )
}

export default Poster