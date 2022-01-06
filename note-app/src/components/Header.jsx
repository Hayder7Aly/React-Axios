import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="header">
                <h3 className="logo">Take Notes</h3>
                <div  className="add">
                    <NavLink style={{textDecoration : 'none', color : '#fff'}} exact to="/add">Add a Note</NavLink>
                </div>
            </header>        
        </>
    )
}

export default Header
