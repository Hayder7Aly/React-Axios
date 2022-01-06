import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Notes.css";
const Edit = ({addEditNote,editValue}) => {



    const [note , setNote] = useState(editValue)
    
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
            
          addEditNote({...note, date : new Date().toLocaleTimeString()})
          setNote({title : "", note : ""})
        }else{
          alert('Fields are required ...')
        }
        history.push('/')
    
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
         <button onClick={clickHandler}>Edit</button>
       </form>
     </div>
        </>
    )
}

export default Edit
