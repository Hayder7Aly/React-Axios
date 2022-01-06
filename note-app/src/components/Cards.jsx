import React from 'react'
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

const Cards = ({title,note,deleted,edited,date,id}) => {
    return (
        <>
            <div className="card">
                <div className="operations">
                <button onClick={()  => edited({title,note,id})}><MdEdit /></button>
                <button onClick={() => deleted(id)}><MdDelete /></button>
  
                </div>
                <div className="date">
                    <h3>Date</h3>
                    <p>{date}</p>
                </div>
                <div className="note">
                    <h3 className="title">{title}</h3>
                    <p className="content">{note}</p>
                </div>

            </div>
        </>
    )
}

export default Cards
