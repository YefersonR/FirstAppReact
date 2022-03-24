import Gifs from "../Gifs"
import "./listOfGifts.css"

export default function ListOfGifts({gifs}){
    return <>
    <div className="ListOfGifts">
    {
    gifs.map(({id,title, url}) =>            
        <Gifs 
            key={id}
            id={id} 
            title={title} 
            url={url}/>
        )
    }
    </div>
    </>
}