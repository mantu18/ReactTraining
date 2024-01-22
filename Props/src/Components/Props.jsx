import './Container.css'
export default function Props(props){
    //const dynamicContent="You can display dynamic data using {}";
    return(
        <>
            {/* <h3>First Component</h3>
            You have to import this in app.js  */}

            <div className="Container" >
                <h3>{props.heading}</h3>
                <p>{props.body}</p>
            </div>
            
        </>
    );
}