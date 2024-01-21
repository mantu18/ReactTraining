export default function TabButton({children, onSelect}){
    return(
        <div onClick={onSelect}> 
            <button>{children}</button>
        </div>
    );
}