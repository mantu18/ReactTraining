import './Container.css'
export default function Props4({body,heading="default heading" }){
    //const dynamicContent="You can display dynamic data using {}";
    return(
        <>
            {/* <h3>First Component</h3>
            You have to import this in app.js  */}

            <div className="Container" >
                <h3>{heading}</h3>
                <p>{body}</p>
            </div>
            
        </>
    );
}