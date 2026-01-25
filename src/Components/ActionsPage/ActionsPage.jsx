import React, { useState } from 'react';
import "./ActionsPage.css"
import right from "../../assets/chevron_right.png"

const ActionsPage = () => {

    const[open,setOpen] = useState(false);
    return (
        <div className='actions'>
            <div className='options'>
                <p>Product Options</p>
                <img src={right} onClick={()=>setOpen(!open)}
                className={open ? "rotate" : ""}/>

            </div>
        <div className={`actionsButton ${open ? "active" : "hide"} `}>
            <div>
                <div>
                    <h1>SSP218DDA-ELR</h1>
                    <p>16” Seat</p>
                    <p>Detachable Desk Arms</p>
                    <p>Swing Away Footrests</p>
                </div>  

                <div className='right-arrow'>
                    <p>Show Details</p>
                    <img className='right' src={right} alt='r' />
                </div>

            </div>

            <div className='second-One'>
                <div>
                    <h1>SSP218DDA-ELR</h1>
                    <p>16” Seat</p>
                    <p>Detachable Desk Arms</p>
                    <p>Swing Away Footrests</p>
                </div>

                <div className='right-arrow'>
                    <p>Show Details</p>
                    <img src={right} alt='right' />
                </div>

            </div>


            <div className='third-one'>
                <div>
                    <h1>SSP218DDA-ELR</h1>
                    <p>16” Seat</p>
                    <p>Detachable Desk Arms</p>
                    <p>Swing Away Footrests</p>
                </div>

                <div className='right-arrow'>
                    <p>Show Details</p>
                    <img className='right' src={right} alt='r' />
                </div>

            </div>

              <div className='fourth-one'>
                <div>
                    <h1>SSP218DDA-ELR</h1>
                    <p>16” Seat</p>
                    <p>Detachable Desk Arms</p>
                    <p>Swing Away Footrests</p>
                </div>

                <div className='right-arrow'>
                    <p className='showing'>Show Details</p>
                    <img className='right' src={right} alt='r' />
                </div>

            </div>

            </div>







        </div>
    );
}

export default ActionsPage;
