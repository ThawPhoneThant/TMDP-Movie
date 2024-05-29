import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
// import Search from "../pages/Search";

const Nav = ()=>{
    const [searchKey , setSearchKey] = useState("");
    const navigate = useNavigate()

   
    const Search =( e )=>{
      e.preventDefault()
      navigate(`/search/${searchKey}`)
    } 
    

    return(
        <div className="bg-slate-900 flex justify-between p-5 outline-none border-none">
            <NavLink className="text-4xl text-white tracking-wider" to={'/'}>TMDP</NavLink>
            <div className="flex justify-between text-1xl text-white cursor-pointer w-50">
                <NavLink className={({isActive})=> isActive ? " mr-5 text-2xl text-violet-900" : "mr-5 text-2xl text-white"} to={'/'}>Movies</NavLink>
                <NavLink className={({isActive})=> isActive ? " mr-5 text-2xl text-violet-900" : "mr-5 text-2xl text-white"} to={"/upcoming"}>Upcoming</NavLink>
                <form action="" onSubmit={Search}>
                <input type="text" placeholder="Search" className="h-8 p-2 outline-0  border-0 border-b rounded bg-transparent text-white mr-3" onChange={(e)=> setSearchKey(e.target.value)}/>
                </form>
               
            </div>
            

        </div>
    )
}

export default Nav