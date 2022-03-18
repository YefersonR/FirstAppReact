import './Gifs.css'

export default function Gifs({title, id, url}){
   return(
       <a href={`${id}`} 
          className="gif">
       <h4>{title}</h4>
       <img src={url}/>
       </a>
   )
}