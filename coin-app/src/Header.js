import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header-div'>
            <div className='penny-backs'>
                <img className='penny-pic' src="https://i.ibb.co/8YWnKZC/c-cn-1859-42487-lg.png" alt="indian-back" border="0"/>
                <img className='penny-pic'  src="https://i.ibb.co/s3WQ54k/44401-penny-lg.png" alt="44401-penny-lg" border="0"/>
                <img className='penny-pic' src="https://i.ibb.co/CnDbH0c/d0ed91a6ddd47e4cbe2066bd0a0eed45.png" alt="d0ed91a6ddd47e4cbe2066bd0a0eed45" border="0"/>
            </div>
                <h1 className='app-title'>LUCKY PENNY!</h1>
            <div className='penny-fronts'>
                <img className='penny-pic' src="https://i.ibb.co/4tfbRFQ/985d3.png" alt="985d3" border="0"/>
                <img className='penny-pic' src="https://i.ibb.co/PDN6j1s/985333.png" alt="985333" border="0"/>
            </div>

            
            

            
        </div>
    )
}

export default Header
