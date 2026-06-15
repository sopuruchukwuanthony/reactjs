import { useState } from "react"


function Count(){
const [score, setScore]= useState(0)

    return(
      <>
     
        <h4 className="score-value">Score: {score}</h4>
       <div className='score-btn'>
      <div>
        <button 
        className="btn btn-success btn-sm gap2"
         onClick={()=>(setScore(prevscore =>prevscore + 1))}
         >Increase Score
         </button>
      </div>
      <div>
        <button 
        className={`btn ${score ===0 ?
        'btn-secondary btn-sm gap2' : 
        'btn-warning btn-sm gap-2'}`} 
        onClick={()=>(setScore(prevscore=>prevscore - 1))}
        disabled={score == 0}>
        Decrease Score</button>
      </div>
      <div>
        <button 
        className={`btn ${score === 0 ?
           'btn-secondary btn-sm gap-2'
         : 'btn-danger btn-sm gap-2'}`} 
         onClick={()=>(setScore(0))} 
         disabled={score == 0}
         >Reset Score</button>
      </div>
    </div>
   </>
    )

   
}


export default Count