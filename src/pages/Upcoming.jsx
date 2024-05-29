import Header from "../compoents/Home"
import Movies from "../compoents/Movies"

const Upcoming = ()=>{
    return(
        <div>
            <Header/>
            <Movies title={"Upcoming Movies"} url={"https://api.themoviedb.org/3/movie/upcoming?api_key=ad8558800e6a3dddc029f98cc9ffd645&language=en-US"}/>
        </div>
    )
}

export default Upcoming