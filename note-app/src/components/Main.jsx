import React  from 'react'
import Cards from './Cards'
import Header from "./Header"





const Main = ({notes,deleted,edited }) => {


    return (
        <>
        <div className="container">
            <Header />
        <div className="card_container">
            {
                notes.map((note)=> {
                  return <Cards key={note.id} {...note} deleted={deleted} edited={edited}/>
                })
            }
        </div>
      </div>
        </>
    )
}

export default Main
