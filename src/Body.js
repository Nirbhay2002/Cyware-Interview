import React from 'react'
import data from './data'

function Body() {

    const styles = {
        'color':'green'
    }

    const displayData = data.map(item =>{
        return <div className='item-container'>
            <img src='logo.png' className='logo'/>
            <div className='item-content'>
                <h3>{item.name}</h3>
                <p style={styles}>{item.status}</p>
            </div>
        </div>
    })
    
  return (
    <div>
        {displayData}
    </div>
  )
}

export default Body