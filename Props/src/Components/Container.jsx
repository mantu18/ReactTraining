import './Container.css'
export default function Container(){
    const dynamicContent="You can display dynamic data using {}";
    return(
        <>
            {/* <h3>First Component</h3>
            You have to import this in app.js  */}

            <div className="Container" >
                <h3>Using Curly Braces</h3>
                <p>{dynamicContent}</p>
            </div>
            
        </>
    );
}