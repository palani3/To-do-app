import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom"
import Footer from './Components/Footer';
import Home from './Components/Home';
import Note from './Components/Note';
import Login from './Components/Login';

function App() {
  const [Notes, setNotes] = useState([]);

  const deleteNote=(id)=>{
    setNotes(preNotes=>{
      return preNotes.filter((nodeitem, index)=>{
        return index !==id;
      })
    });
  }
  const deleteNoteall=(id)=>{
    setNotes(preNotes=>{
      return preNotes.filter((nodeitem, index)=>{
        return id;
      })
    });
    console.log("hello")
  }
   const addNote=(newNote)=>{
    setNotes(preNotes=>{
      return [...preNotes,newNote]
    });

console.log("hi palani",Notes)

  }

  return (
    <div className="App">
      
 
    
    <Routes>
      <Route path="/" element={ <Home onAddNote={addNote} deleteNoteall={deleteNoteall}/> } />
      <Route path="footer" element={ <Footer/> } />
      {/* <Route path="Note" element={ <Note items={Notes}/> } /> */}
    </Routes>

    {Notes.map((items,index)=>{
        return (
          <Note key={index}
          id={index}
          title={items.title}
          content={items.content}
          onDelete={deleteNote}/>
          
        )
      })

      }


<Footer/>
  </div>

  )
}

export default App
