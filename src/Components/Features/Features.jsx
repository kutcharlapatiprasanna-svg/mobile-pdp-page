import React, { useState } from 'react';
import "./Features.css";
import right from "../../assets/chevron_right.png"

const Features = () => {


    const [openArrow, setOpenArrow] = useState(false);

    return (
        <div className='resources'>
            <div className='resources-process'>
                <p>Features</p>
                <img src={right} alt='res'
                    onClick={() => setOpenArrow(!openArrow)}
                    className={openArrow ? "rotate" : ""} />
            </div>

            <div className="paragraph">
                <div>
                    <ul className={ `paragraph-system ${openArrow ? "active" : "hide"}`}>
                        <li>Easy to clean powder coated
                            silver vein steel frame</li>
                        <li>Padded fixed armrests</li>
                        <li>Nylon upholstery is durable, lightweight, attractive and easy-to-clean</li>
                        <li>Polyurethane tires mounted on composite wheels provide durability and low maintenance</li>
                        <li>Comes with push-to-lock wheel locks</li>
                        <li>Carry pocket on backrest provides additional convenience</li>
                        <li>Comes with swing-away footrests</li>
                        <li>Folding back-canes for transport and storage</li>
                        <li>Weight Capacity: 250 lb</li>
                    </ul>
                </div>

            </div>


        </div>
    );
}

export default Features;
