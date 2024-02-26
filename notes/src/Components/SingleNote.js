import React from 'react'
import "./SingleNote.css"

function SingleNote(props) {

  function delete1(){
    props.onDelete();
  };

  let dec=false;

// props.notes2.forEach(element => {
//     {if(element===props.note){
//       dec= true;
//     }
//     else{
//       dec=false;
//     }
//   }
//   });

//cant do that as dec gets reiterated to last value of array

dec = props.notes2.some(element => element === props.note);
  
  
  return (
    <div className={dec ? 'singleNote22' : 'singleNote'}>
        <p className='notetext'>{props.note}</p>
        <button id="btn" onClick={delete1}>delete</button>
    </div>
  )
}

  

export default SingleNote;