import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Notes.css";


const Notes = ({addNote}) => {

  const [note , setNote] = useState({
    title : "",
    note : ""
  })

  const changeHandler = event => {

    setNote({
      ...note,
      [event.target.name] : event.target.value
    })
  }

  const history = useHistory()
  const clickHandler = e => {
    e.preventDefault()
    if(note.title.trim() && note.note.trim()){
        
      addNote({...note, date : new Date().toLocaleTimeString()})
      setNote({title : "", note : ""})
      history.push('/')
    }else{
      alert('Fields are required ...')
    }

  }




  return (
    <>
      <div className="notes">
       
        <form>
          <input type="text" placeholder="Title" name="title" autoComplete="off" onChange={changeHandler} value={note.title}/>
          <textarea
            type="text"
            placeholder="Note ..."
            name="note"
            autoComplete="off"
            onChange={changeHandler}
            value={note.note}
          />
          <button onClick={clickHandler}>Add</button>
        </form>
      </div>
    </>
  );
};

export default Notes;