import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Homecard from './Homecard';
import { useEffect, useState } from 'react';

const Home = ()=>{

    const [related , setRelated] = useState([])
    useEffect(()=>{
        getRelated()
    },[])

    const getRelated = async ()=>{
       const respo =  await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ad8558800e6a3dddc029f98cc9ffd645&language=en-US");
       const data =  await respo.json()
       setRelated(data.results)
       console.log(data.results)
    }
    return(
        <div>
            <Splide options={{
                 type: "loop", 
                 arrows : false, 
                 autoplay : true,
                 interval : 3000,
                 }}>

                {related.map(movie =>(
                    <SplideSlide>
                        <Homecard movie={movie} key={movie.id}/>
                    </SplideSlide>
                ))}
                
               
            </Splide>
           
        
        </div>
        
    )
}

export default Home