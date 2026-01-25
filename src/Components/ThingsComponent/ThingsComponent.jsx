import React from 'react';
import './ThingsComponent.css';

const ThingsComponent = () => {
    return (
        <div className='colors'>
            <p>Color</p>
            <div className="balls">
                <input className='first-ball1'></input>
                <input className='first-ball2'></input>
                <input className='first-ball3'></input>
            </div>

            <p>Seat Size</p>
            <div className="buttons">
                <button className='btn'>16"</button>
                <button className='btn' >18"</button>
                <button className='btn'>20"</button>
            </div>

             <p>Arm Style</p>
            <div className="buttons2">
                <button className='btn2'>Desk</button>
                <button className='btn2'>Full</button>
                
            </div>


             <p>Front Rigging</p>
            <div className="buttons3">
                <button className='btn3'>Footrests</button>
                <button className='btn3'>Legrests</button>
                
            </div>

        </div>
    );
}

export default ThingsComponent;
