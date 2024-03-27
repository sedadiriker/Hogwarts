import StudentsCard from "../Students/StudentsCard"
import "./Hogwarts.css"
import { useState,useEffect } from "react"

const Hogwarts = ({data}) => {
  const [veri,setVeri] = useState([])

  const filterStudents = () => data.filter(person => person.hogwartsStudent);
  const filterStaff = () => data.filter(person => person.hogwartsStaff);
  const filterGryffindor= () => data.filter(person => person.house === 'Gryffindor');
  const filterSlytherin = () => data.filter(person => person.house === "Slytherin");
  const filterHufflepuff = () => data.filter(person => person.house === "Hufflepuff");
  const filterRavenclaw= () => data.filter(person => person.house === "Ravenclaw");

  useEffect(() => {
    setVeri(data)
  },[])

  

  const handleStudents = () => {
    setVeri(filterStudents())
  }
  const handleStaff = () => {
    setVeri(filterStaff())
  }
  const handleSlytherin= () => {
    setVeri(filterSlytherin())
  }
  const handleGryffindor= () => {
    setVeri(filterGryffindor())
  }
  const handleHufflepuff= () => {
    setVeri(filterHufflepuff())
  }
  const handleRavenclaw= () => {
    setVeri(filterRavenclaw())
  }



  return (
    <>
    <div className="nav d-flex justify-content-center gap-3 p-4 flex-column align-items-center flex-wrap">
        <div className="d-flex gap-3 flex-wrap justify-content-center">
        <button className="btn" onClick={handleStudents}>Students</button>
        <button className="btn" onClick={handleStaff}>Staff</button>
        </div>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
        <button className="btn" onClick={handleGryffindor}>Gryffindor</button>
        <button className="btn" onClick={handleSlytherin}>Slytherin</button>
        <button className="btn" onClick={handleHufflepuff}>Hufflepuff</button>
        <button className="btn" onClick={handleRavenclaw}>Ravenclaw</button>
        </div>
      </div>
    <div className="container">
       {
        veri.map(student => (
          <StudentsCard key={student.id} {...student}/>
        ))
       }
    </div>
    </>
    
  )
}

export default Hogwarts
