// // import React from 'react';
// // import './ThingsComponent.css';

// // const ThingsComponent = () => {
// //     return (
// //         <div className='colors'>
// //             <p>Color</p>
// //             <div className="balls">
// //                 <input className='first-ball1'></input>
// //                 <input className='first-ball2'></input>
// //                 <input className='first-ball3'></input>
// //             </div>

// //             <p>Seat Size</p>
// //             <div className="buttons">
// //                 <button className='btn'>16"</button>
// //                 <button className='btn' >18"</button>
// //                 <button className='btn'>20"</button>
// //             </div>

// //              <p>Arm Style</p>
// //             <div className="buttons2">
// //                 <button className='btn2'>Desk</button>
// //                 <button className='btn2'>Full</button>

                
                
// //             </div>


// //              <p>Front Rigging</p>
// //             <div className="buttons3">
// //                 <button className='btn3'>Footrests</button>
// //                 <button className='btn3'>Legrests</button>
                
// //             </div>

// //         </div>
// //     );
// // }

// // export default ThingsComponent;





// import React, { useState } from 'react';
// import './ThingsComponent.css';

// const ThingsComponent = () => {

//   // store which circle is active
//   const [activeBall, setActiveBall] = useState(1);

//   return (
//     <div className='colors'>

//       <p>Color</p>

//       <div className="balls">
//         <input
//           className={`first-ball1 ${activeBall === 1 ? "active" : ""}`}
//           onClick={() => setActiveBall(1)}
//         />

//         <input
//           className={`first-ball2 ${activeBall === 2 ? "active" : ""}`}
//           onClick={() => setActiveBall(2)}
//         />

//         <input
//           className={`first-ball3 ${activeBall === 3 ? "active" : ""}`}
//           onClick={() => setActiveBall(3)}
//         />
//       </div>

//       <p>Seat Size</p>
//       <div className="buttons">
//         <button className='btn'>16"</button>
//         <button className='btn'>18"</button>
//         <button className='btn'>20"</button>
//       </div>

//       <p>Arm Style</p>
//       <div className="buttons2">
//         <button className='btn2'>Desk</button>
//         <button className='btn2'>Full</button>
//       </div>

//       <p>Front Rigging</p>
//       <div className="buttons3">
//         <button className='btn3'>Footrests</button>
//         <button className='btn3'>Legrests</button>
//       </div>

//     </div>
//   );
// };

// export default ThingsComponent;



// import React, { useState } from "react";
// import "./ThingsComponent.css";

// const ThingsComponent = () => {
//   const [activeBall, setActiveBall] = useState(1);

//   const[activeSeatSize, setActiveSeatSize] = useState(4);

//   return (
//     <div className="colors">

//       <p>Color</p>
//       <div className="balls">
//         <input
//           type="button"
//           className={`first-ball1 ${activeBall === 1 ? "active" : ""}`}
//           onClick={() => setActiveBall(1)}
//         /> 

//         <input
//           type="button"
//           className={`first-ball2 ${activeBall === 2 ? "active" : ""}`}
//           onClick={() => setActiveBall(2)}
//         />

//         <input
//           type="button"
//           className={`first-ball3 ${activeBall === 3 ? "active" : ""}`}
//           onClick={() => setActiveBall(3)}
//         />
//       </div>

//       <p>Seat Size</p>
//       <div className="buttons">
//         <button  className="btn">16"</button>
//            {/* <button className={`btn ${activeSeatSize === 4 ? "active" : ""}`} onClick={()=>setActiveSeatSize(4)}>16"</button>
//               <button className={`btn ${activeSeatSize === 4 ? "active" : ""}`} onClick={()=>setActiveSeatSize(4)}>16"</button> */}
//         <button className="btn">18"</button>
//         <button className="btn">20"</button>
//       </div>

//       <p>Arm Style</p>
//       <div className="buttons2">
//         <button className="btn2">Desk</button>
//         <button className="btn2">Full</button>
//       </div>

//       <p>Front Rigging</p>
//       <div className="buttons3">
//         <button className="btn3">Footrests</button>
//         <button className="btn3">Legrests</button>
//       </div>

//     </div>
//   );
// };

// export default ThingsComponent;


// import React, { useState } from "react";
// import "./ThingsComponent.css";

// const ThingsComponent = () => {
//   const [activeColor, setActiveColor] = useState(1);
//   const [activeSeat, setActiveSeat] = useState(18);
//   const [activeArm, setActiveArm] = useState("Desk");
//   const [activeRig, setActiveRig] = useState("Legrests");

//   return (
//     <div className="colors">

//       {/* COLOR */}
//       <p>Color</p>
//       <div className="balls">
//         <div
//           className={`first-ball1 ${activeColor === 1 ? "active" : ""}`}
//           onClick={() => setActiveColor(1)}
//         ></div>

//         <div
//           className={`first-ball2 ${activeColor === 2 ? "active" : ""}`}
//           onClick={() => setActiveColor(2)}
//         ></div>

//         <div
//           className={`first-ball3 ${activeColor === 3 ? "active" : ""}`}
//           onClick={() => setActiveColor(3)}
//         ></div>
//       </div>

//       {/* SEAT SIZE */}
//       <p>Seat Size</p>
//       <div className="buttons">
//         <div
//           className={`btn ${activeSeat === 16 ? "active" : ""}`}
//           onClick={() => setActiveSeat(16)}
//         >
//           16"
//         </div>

//         <div
//           className={`btn ${activeSeat === 18 ? "active" : ""}`}
//           onClick={() => setActiveSeat(18)}
//         >
//           18"
//         </div>

//         <div
//           className={`btn ${activeSeat === 20 ? "active" : ""}`}
//           onClick={() => setActiveSeat(20)}
//         >
//           20"
//         </div>
//       </div>

//       {/* ARM STYLE */}
//       <p>Arm Style</p>
//       <div className="buttons2">
//         <div
//           className={`btn2 ${activeArm === "Desk" ? "active" : ""}`}
//           onClick={() => setActiveArm("Desk")}
//         >
//           Desk
//         </div>

//         <div
//           className={`btn2 ${activeArm === "Full" ? "active" : ""}`}
//           onClick={() => setActiveArm("Full")}
//         >
//           Full
//         </div>
//       </div>

//       {/* FRONT RIGGING */}
//       <p>Front Rigging</p>
//       <div className="buttons3">
//         <div
//           className={`btn3 ${activeRig === "Footrests" ? "active" : ""}`}
//           onClick={() => setActiveRig("Footrests")}
//         >
//           Footrests
//         </div>

//         <div
//           className={`btn3 ${activeRig === "Legrests" ? "active" : ""}`}
//           onClick={() => setActiveRig("Legrests")}
//         >
//           Legrests
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ThingsComponent;



import React, { useState } from "react";
import "./ThingsComponent.css";

const ThingsComponent = () => {
  const [activeColor, setActiveColor] = useState(1);
  const [activeSeat, setActiveSeat] = useState(18);
  const [activeArm, setActiveArm] = useState("Desk");
  const [activeRig, setActiveRig] = useState("Legrests");

  return (
    <div className="tc-colors-container">

      {/* COLOR */}
      <p className="tc-section-title">Color</p>
      <div className="tc-color-balls">
        <div
          className={`tc-ball-red ${activeColor === 1 ? "tc-ball-active" : ""}`}
          onClick={() => setActiveColor(1)}
        ></div>

        <div
          className={`tc-ball-blue ${activeColor === 2 ? "tc-ball-active" : ""}`}
          onClick={() => setActiveColor(2)}
        ></div>

        <div
          className={`tc-ball-black ${activeColor === 3 ? "tc-ball-active" : ""}`}
          onClick={() => setActiveColor(3)}
        ></div>
      </div>

      {/* SEAT SIZE */}
      <p className="tc-section-title">Seat Size</p>
      <div className="tc-buttons-seat">
        <div
          className={`tc-btn-seat ${activeSeat === 16 ? "tc-btn-active" : ""}`}
          onClick={() => setActiveSeat(16)}
        >
          16"
        </div>

        <div
          className={`tc-btn-seat ${activeSeat === 18 ? "tc-btn-active" : ""}`}
          onClick={() => setActiveSeat(18)}
        >
          18"
        </div>

        <div
          className={`tc-btn-seat ${activeSeat === 20 ? "tc-btn-active" : ""}`}
          onClick={() => setActiveSeat(20)}
        >
          20"
        </div>
      </div>

      {/* ARM STYLE */}
      <p className="tc-section-title">Arm Style</p>
      <div className="tc-buttons-arm">
        <div
          className={`tc-btn-arm ${activeArm === "Desk" ? "tc-btn-active" : ""}`}
          onClick={() => setActiveArm("Desk")}
        >
          Desk
        </div>

        <div
          className={`tc-btn-arm ${activeArm === "Full" ? "tc-btn-active" : ""}`}
          onClick={() => setActiveArm("Full")}
        >
          Full
        </div>
      </div>

      {/* FRONT RIGGING */}
      <p className="tc-section-title">Front Rigging</p>
      <div className="tc-buttons-rig">
        <div
          className={`tc-btn-rig ${activeRig === "Footrests" ? "tc-btn-active" : ""}`}
          onClick={() => setActiveRig("Footrests")}
        >
          Footrests
        </div>

        <div
          className={`tc-btn-rig ${activeRig === "Legrests" ? "tc-btn-active" : ""}`}
          onClick={() => setActiveRig("Legrests")}
        >
          Legrests
        </div>
      </div>

    </div>
  );
};

export default ThingsComponent;
