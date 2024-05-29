
import {PlayCircleIcon} from'@heroicons/react/24/solid'

const Homecard = ({movie})=>{
    return(
            <div className="relative ">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" className="w-screen h-screen"/>
                    <div className="bg-slate-900 w-full h-full absolute top-0 opacity-65"></div>
                    <div className="text-box absolute top-2/4 left-9 w-8/12 text-white">
                        <h1 className="text-5xl mb-3">{movie.title}</h1>
                        <p className="mb-3 text-1xl">{movie.overview}</p>
                        <button className="text-1xl text-black bg-white px-2 rounded"><PlayCircleIcon className='size-4 inline-block mr-2'/>Watch Now</button>
                        
                        
                    </div>
            </div>
        
    )
}

export default Homecard