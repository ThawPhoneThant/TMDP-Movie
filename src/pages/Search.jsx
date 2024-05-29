import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Poster from "../compoents/Poster";

const Search = ()=>{

    const {title} = useParams();

    const[getSearchMovies , setGetSearchMovies] = useState([])

    useEffect(()=>{
        getSearch();
        // eslint-disable-next-line 
    },[title])

    const getSearch = async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ad8558800e6a3dddc029f98cc9ffd645&language=en-US&query=${title}&page=1&include_adult=false`);
        const data = await response.json();
        setGetSearchMovies(data.results)
    };
    return(
        <div className="px-8 mt-5 h-screen">
            {/* <h1 className="text-white text-4xl mb-5">{title}</h1> */}
            <div className="grid grid-cols-10 gap-2">
                { getSearchMovies.map( sm =>(
                    <Poster movies={sm} key={sm.id}/>
                ))};
            </div>
            
        </div>
    )
}

export default Search