
import { useEffect, useState } from 'react'

import Poster from './Poster'


const Movies = ({title , url})=>{

    const[movies ,setMoves] = useState([])

    useEffect(()=>{
        getMoves()
        // eslint-disable-next-line 
    },[])

    const getMoves = async()=>{
       const responsce = await fetch(url)
        const data = await responsce.json()
        setMoves(data.results)
        console.log(data.results)
    }

    return(
        <div className="px-8 mt-5">
            <h1 className="text-white text-4xl mb-5">{title}</h1>
            <div className="grid grid-cols-10 gap-2">
            { movies.map( m =>(
                <Poster movies={m} key={m.id}/>
            ))}
            
            </div>
            
        </div>
    )
}



export default Movies