import { useState } from 'react'
import Badge from './skillBadge'
import Count from './counter'


function StudentCard({name, age,course, location, skills, bio}){

    const [showBio, setShowBio]= useState(false)

    const [favourite ,setFavourite]= useState(false)

function Myskill({skills}){
    return(
       <span className="skillbadge">{skills}</span>
    )
}

    let level = ''
    if (skills && skills.length < 3) {
        level = 'Beginner'
    } else if (skills && skills.length >= 3 && skills.length <= 5) {
        level = 'Intermediate'
    } else {
        level = 'Advanced'
    }

    return(
        
        <div className="student-cont">
           <h3 className='st-card'>Student Card</h3>
          
        <div className='card'>
            <h2 className='card-name'>Name: {name}</h2>
            <p>Age: {age}</p>
            <p className='card-subtitle mb-2 text-muted'>course: {course}</p>
            <p>Location: {location}</p>
            <p className='card-text'>
               <span>level: {level}</span>
            </p>
        <div> Skills:  
            {skills.map((skill, index)=>(
                <Myskill  
             key={`${skill}-${index}`} skills={skill}
                />
            ))}
         {showBio && <p>Bio: {bio}</p>}
        </div>
            <button className='favBtn' 
            onClick={()=>setFavourite(!favourite)}>
            {favourite ? 
            "Remove favourite" : 
            "Mark as favourite"} 
            </button>
            <span>
                {favourite && 
                <h3>⭐favourite student</h3>}
            </span>

           <button className='bioBtn' 
            onClick={()=>setShowBio(!showBio)}>
            {showBio ? "Hide bio" : "Show bio"}
           </button>
          
    
        <Count/>
        <Badge name="react"/>
        </div>
    
</div>
        
    )
   
}




export default StudentCard