import { useState } from 'react';
import './Player.css'
 
export default function PlayerCard({initialName, sendActive}){

    function changeStatus(){
        setEditing((editing)=>!editing);    
    }
    function updateName(e){
        setPlayer(e.target.value)
    }

    const [editing, setEditing] = useState(false);
    const [player, setPlayer] = useState(initialName);
    const playerName=<span className='playerName'>{player}</span>;
    const playerInput = <input value={player} onChange={updateName}></input>
    return (
        <> 
        <div className={sendActive?'active':undefined}>
        <div className="card" >
            <div className="topRow">
                {!editing && playerName}
                {editing && playerInput}
                <div className="img"></div>
                 <button onClick={changeStatus} >{ editing ? 'save':'edit'}</button>
                
            </div>
        </div>
        </div>
        </>
    );
}