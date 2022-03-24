import { Link } from 'wouter'
import './Gifs.css'

export default function Gifs({title, id, url}){
   return(
      <div className="gif">
       <Link to={`/gif/${id}`} >
       <h4>{title}</h4>
       <img src={url}/>
       </Link>
      </div>
   )
}