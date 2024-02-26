import React from 'react'
import { useState } from 'react';
import "./notes.css"
import SingleNote from './SingleNote';


function Notes() {
    let[notes,setNotes]=useState([]);
    let[input,setInput]=useState("");
    let[search,setSearch]=useState("");
    let[notes2,setNotes2]=useState([]);

    function updateInputText(event){
        setInput(event.target.value);
    }

    function updateNotes(){
        let newnote=[...notes,input];
        setNotes(newnote);
      }

      function onDelete(key){
        const filteredNotes = notes.filter((note,index) => index !== key );
        setNotes(filteredNotes);
    }

    function updateText(event){
        setSearch(event.target.value);
    }

    function findSearch(){
        setNotes2(notes.filter(note => note.toLowerCase().includes(search.toLowerCase())));
    }

  return (
      
      <div>
        <div>
        <input type="text" id="searchbar" onChange={updateText}/>
        <button onClick={findSearch}>search</button>
        </div>
        
          <input type="text" onChange={updateInputText}/>
          <button onClick={updateNotes}>submit</button>
         <ul className='ul'>
            {notes.map((note,index)=>
                (<li key={index}><SingleNote note={note} onDelete={()=>onDelete(index) } notes2={notes2}/></li>)
            )}
        </ul> 
        <div id="textspace">
        <ul>
            {notes2.map((note)=>
                (<li>{note}</li>)
            )} 
        </ul> 
        </div>

    </div>
  )
}

export default Notes;