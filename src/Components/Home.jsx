import React from "react";
import { useState } from "react";
import Header from "./Header";
import Note from "./Note";

export default function Home({onAddNote,deleteNoteall }) {
  const [note ,setNote] =useState({
    title:'',
    content:'',
})


  function handleChange(event) {
    console.log(event.target  )
    const {name,value} = event.target;
    setNote( preNote =>{
      return{
        ...preNote,
        [name]:value
      };
      
    });
  }
function deletealldata(event){
  deleteNoteall();

}
  function SubmitNote(event){
    console.log("onsubmit");
   onAddNote(note);
    setNote({
      title:'',
      content:'',
    });
    event.preventDefault();

  }
  return (
    <>
      <Header />
      {/* <div>Home</div> */}
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-6   mt-5  px-5  align-items-center">
            <form >
              <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputValue"
                placeholder=""
                onChange={handleChange}
                value={note.title}
                name="title" 
                required
              />
              <label htmlFor="floatingInputValue">Heading</label>
              </div>

              <div className="row mt-2">
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                    type="text"
                    name="content"
                      className="form-control"
                      placeholder=""
                      required
                      
                      id="floatingTextarea"
                      value={note.content}
                      onChange={handleChange}
                    ></textarea>
                    

                    <label htmlFor="floatingTextarea">Comments</label>
                    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
                  </div>
                  <button type="button" className="btn btn-danger text-end px-5 mt-5 mx-5"  onClick={deletealldata}>Clear</button>
                  <button type="button" className="btn btn-primary text-end px-5 mt-5 mx-5"
                   onClick={SubmitNote}>Add</button>
              
                </div>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      {/* {note.map((nodeitems,index)=>{
        return (   <Note key={index}
        id={index}
        title={nodeitems.title}
        content={nodeitems.content}/>)

      })

      } */}
   {/* <Note items={note} /> */}

    
    </>
  );
}
