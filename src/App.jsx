
import './App.css'
import StudentCard from './StudentCard'
import Count from './counter'
import Badge from './skillBadge'

function App() {
 const students =[
{
id: 1,
name:'Anthony',
age: 40,
course: 'Front end development',
location: 'Ojo alaba int lagos state',
bio: 'i am learning front end development',
skills: ['Html', 'CSS', 'javascript', 'React', 'C#', 'PHP']
},
{
id: 2,
name:'Andrew',
age: 35,
course: 'Front end development',
location: 'dankuwo igbogbo ikorodu lagos state',
bio: 'i am learning front end development',
skills: ['Html', 'CSS', 'javascript', 'React', ]
},
{
id: 3,
name:'Elena',
age: 1,
course: 'Front end development',
location: 'Ojo alaba int lagos state',
bio: 'i am still small joor i dey suck breast',
skills: ['Html', 'CSS',]
}, 
{
id: 4,
name:'Kosi',
age: 18,
course: 'Front end development',
location: 'Otukpo benue state',
bio: 'i am still a young man learning new skills',
skills: ['Html', 'CSS', 'python', 'networking']
}, 
{
id: 5,
name:'Ifechukwu',
age: 14,
course: 'Front end development',
location: 'Benue state',
bio: 'i am still in secondary school',
skills: ['Html', 'CSS',]
}, 
{
  id: 6,
  name:'Julieth',
  age: 27,
  course: 'Front end development',
  location: 'Ogun state',
  bio: 'i am a fashion designer and a front end developer',
  skills: ['Html', 'CSS', 'fashion designing']
}, 
]

  return (
    <main className='main-body'>
      
      <h1 className='head-title'>Student dashboard</h1>
     

     
      <div className='main-card'>
       {students.map((student) => (
        <StudentCard 
          key={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
          location={student.location}
          bio={student.bio}
          skills={student.skills}
        />
      ))}
    </div>
   </main>
  
  )
}

export default App
