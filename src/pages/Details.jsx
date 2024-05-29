
import "./Detail.css"
import {PlayCircleIcon} from'@heroicons/react/24/solid'
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

const Details = ()=>{

    const {id} = useParams()
    const [detail , setDetail] = useState({})

    useEffect(()=>{
        getMovie()
        // eslint-disable-next-line 
    },[id])

    const getMovie = async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ad8558800e6a3dddc029f98cc9ffd645&language=en-US`)
        const data =  await response.json()
        setDetail(data);
        console.log(data.genres);

    }
    return(
      <section className="w-full h-screen p-5 mt-5">
            
   
            <div className="flex w-full justify-between">
                <div className="w-1/2">
                    <img src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`} alt={detail.title} className="m-img" />
                </div>
                <div className="w-1/2">
                    <h1 className="text-5xl text-red-500 mb-5">{detail.title}</h1>
                    <h2 className="text-2xl text-white mt-3 mb-5">{detail.overview}</h2>
                    { detail.genres &&detail.genres.map((genres)=>(
                       <p className="text-white inline border p-2 rounded-lg mr-3 text-2xl mb-5">{genres.name}</p>
                    ))}
                    <h2 className="text-2xl text-red-500 mt-3 mb-5 ">Runtime:{detail.runtime} min</h2>
                   
                    <Link to={detail.homepage} className="text-white block mt-5 text-2xl "><PlayCircleIcon className='size-5 text-white inline mr-3'/>watch Now</Link>
                </div>
            </div>
      </section>
    )
}

export default Details