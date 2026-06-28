import { useState, useEffect } from "react";

function RandonFacts() { 

    const [fact, setFact] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
 
    const HandleNextfact = () =>{
           setLoading(true)
        fetch ("https://catfact.ninja/fact")
        .then((reply) => reply.json())
        .then((data) =>{
             setFact(data)
             setLoading(false)
             
            })
            .catch ((err) => {
        setError("failed to load facts. Please try again later.");
        setLoading(false);
            });
            
        
    }

   useEffect  (() => {
  HandleNextfact();
}, [])
       

    return(
       <div>
      {loading && <p>Loading fact...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <p>{fact.fact}</p>}

      <button onClick={HandleNextfact} >New Fact</button>
    
        
       </div>
    )

}
export default  RandonFacts
