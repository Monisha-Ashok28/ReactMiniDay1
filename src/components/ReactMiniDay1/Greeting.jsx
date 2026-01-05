import "./Greeting.css";

function Greeting({name}){
    return(
        <h2 className="greeting">
            Hello, Welcome {name}!
        </h2>
    );
}

export default Greeting;
