import './Card.css'
export default function Card({onSelect}){
    return(
        <div className="card" onClick={onSelect}>
            <h4>You can listen for evrnts on Custom Components By passing event hndling function as a prompt</h4>
            <h4 id="highlightText" >Click anywhere on this card component{onselect}</h4>
            
        </div>
    );
}