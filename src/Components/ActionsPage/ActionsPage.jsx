import React, { useState } from 'react';
import "./ActionsPage.css"
import right from "../../assets/chevron_right.png"

const ActionsPage = () => {

    const [open, setOpen] = useState(false);

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDetails = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className='actions'>
            <div className='options'>
                <p>Product Options</p>
                <img src={right} onClick={() => setOpen(!open)}
                    className={open ? "rotate" : ""} />

            </div>
            <div className={`actionsButton ${open ? "active" : "hide"} `}>
                <div>
                    <div>
                        <h1>SSP218DDA-ELR</h1>
                        <p>16” Seat</p>
                        <p>Detachable Desk Arms</p>
                        <p>Swing Away Footrests</p>
                    </div>

                    {/* <div className='right-arrow'>
                        <p>Show Details</p>
                        <img className='right' src={right} alt='r' />
                    </div> */}

                    <div className='right-arrow' onClick={() => toggleDetails(0)}>
                        <p>Show Details</p>
                        <img className='right' src={right} alt='r' />
                    </div>

                    <div className={`details ${activeIndex === 0 ? "active" : "hide"}`}>
                        <p>More details about this product option.</p>
                    </div>


                </div>

                <div className='second-One'>
                    <div>
                        <h1>SSP218DDA-ELR</h1>
                        <p>16” Seat</p>
                        <p>Detachable Desk Arms</p>
                        <p>Swing Away Footrests</p>
                    </div>

                    {/* <div className='right-arrow'>
                    <p>Show Details</p>
                    <img src={right} alt='right' />
                </div> */}

                    <div className='right-arrow' onClick={() => toggleDetails(1)}>
                        <p>Show Details</p>
                        <img className='right' src={right} alt='r' />
                    </div>

                    <div className={`details ${activeIndex === 1 ? "active" : "hide"}`}>
                        <p className='show-deatails'>More details about this product option.</p>
                    </div>


                </div>


                <div className='third-one'>
                    <div>
                        <h1>SSP218DDA-ELR</h1>
                        <p>16” Seat</p>
                        <p>Detachable Desk Arms</p>
                        <p>Swing Away Footrests</p>
                    </div>

                    {/* <div className='right-arrow'>
                        <p>Show Details</p>
                        <img className='right' src={right} alt='r' />
                    </div> */}

                    <div className='right-arrow' onClick={() => toggleDetails(2)}>
                        <p>Show Details</p>
                        <img className='right' src={right} alt='r' />
                    </div>

                    <div className={`details ${activeIndex === 2 ? "active" : "hide"}`}>
                        <p  className='show-deatails'>More details about this product option.</p>
                    </div>


                </div>

                <div className='fourth-one'>
                    <div>
                        <h1>SSP218DDA-ELR</h1>
                        <p>16” Seat</p>
                        <p>Detachable Desk Arms</p>
                        <p>Swing Away Footrests</p>
                    </div>

                    {/* <div className='right-arrow'>
                        <p className='showing'>Show Details</p>
                        <img className='right' src={right} alt='r' />
                    </div> */}

                    <div className='right-arrow' onClick={() => toggleDetails(3)}>
                        <p className='last-paragraph'>Show Details</p>
                        <img className='right1' src={right} alt='r' />
                    </div>

                    <div className={`details ${activeIndex === 3 ? "active" : "hide"}`}>
                        <p  className='show-deatails2'>More details about this product option.</p>
                    </div>


                </div>

            </div>







        </div>
    );
}

export default ActionsPage;





// import React, { useState } from 'react';
// import "./ActionsPage.css";
// import right from "../../assets/chevron_right.png";

// const ActionsPage = () => {

//   const [open, setOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleDetails = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className='actions'>

//       <div className='options'>
//         <p>Product Options</p>
//         <img
//           src={right}
//           onClick={() => setOpen(!open)}
//           className={open ? "rotate" : ""}
//           alt="toggle"
//         />
//       </div>

//       <div className={`actionsButton ${open ? "active" : "hide"}`}>

//         {/* ITEM 1 */}
//         <div>
//           <div>
//             <h1>SSP218DDA-ELR</h1>
//             <p>16” Seat</p>
//             <p>Detachable Desk Arms</p>
//             <p>Swing Away Footrests</p>
//           </div>

//   <div className='right-arrow' onClick={() => toggleDetails(0)}>
//     <p>Show Details</p>
//     <img className='right' src={right} alt='r' />
//   </div>

//   <div className={`details ${activeIndex === 0 ? "active" : "hide"}`}>
//     <p>More details about this product option.</p>
//   </div>
// </div>

//         {/* ITEM 2 */}
//         <div className='second-One'>
//           <div>
//             <h1>SSP218DDA-ELR</h1>
//             <p>16” Seat</p>
//             <p>Detachable Desk Arms</p>
//             <p>Swing Away Footrests</p>
//           </div>

//           <div className='right-arrow' onClick={() => toggleDetails(1)}>
//             <p>Show Details</p>
//             <img src={right} alt='right' />
//           </div>

//           <div className={`details ${activeIndex === 1 ? "active" : "hide"}`}>
//             <p>Extra specifications and usage details.</p>
//           </div>
//         </div>

//         {/* ITEM 3 */}
//         <div className='third-one'>
//           <div>
//             <h1>SSP218DDA-ELR</h1>
//             <p>16” Seat</p>
//             <p>Detachable Desk Arms</p>
//             <p>Swing Away Footrests</p>
//           </div>

//           <div className='right-arrow' onClick={() => toggleDetails(2)}>
//             <p>Show Details</p>
//             <img className='right' src={right} alt='r' />
//           </div>

//           <div className={`details ${activeIndex === 2 ? "active" : "hide"}`}>
//             <p>Warranty and maintenance information.</p>
//           </div>
//         </div>

//         {/* ITEM 4 */}
//         <div className='fourth-one'>
//           <div>
//             <h1>SSP218DDA-ELR</h1>
//             <p>16” Seat</p>
//             <p>Detachable Desk Arms</p>
//             <p>Swing Away Footrests</p>
//           </div>

//           <div className='right-arrow' onClick={() => toggleDetails(3)}>
//             <p className='showing'>Show Details</p>
//             <img className='right' src={right} alt='r' />
//           </div>

//           <div className={`details ${activeIndex === 3 ? "active" : "hide"}`}>
//             <p>Download manuals and product documents.</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ActionsPage;
