// import React, { useState } from 'react'
// import "./Resources.css"
// import right from "../../assets/chevron_right.png"
// import book from "../../assets/book.png"
// import settings from "../../assets/settings_3.jpg"
// import pdf from "../../assets/pdf___.png"
// const Resources = () => {

//     const [open, setOpen] = useState(false);

//     const[download,setDownload] = useState();

//     return (

//         <div className='main-resource'>
//             <div className="resources-img">
//                 <p>Resources/Downloads</p>
//                 <img src={right} alt='p' onClick={() => setOpen(!open)}
//                     className={open ? "rotate" : ""} />
//             </div>

//             <div className={`resourcesHiding ${open ? "active" : "hide"}`}>
//                 <div className='things-images'>
//                     <img src={book} alt=''></img>
//                     <p className='sub-words'>User Manual</p>
//                     <button className='newbtn'>Download</button>
//                     <img src={settings} alt='d' />
//                     <p className='sub-words'>Parts Diagram</p>
//                     <button className='newbtn'>Download</button>
//                     <img src={pdf} alt='h' />
//                     <p className='sub-words'>Catalog Page</p>
//                     <button className='newbtn'>Download</button>
//                 </div>
//             </div>


//         </div>

//     )
// }

// export default Resources





import React, { useState } from 'react'
import "./Resources.css"
import right from "../../assets/chevron_right.png"
import book from "../../assets/book.png"
import settings from "../../assets/settings_3.jpg"
import pdf from "../../assets/pdf___.png"

const Resources = () => {

  const [open, setOpen] = useState(false);
  const [download, setDownload] = useState(null);

  const handleDownload = (type) => {
    setDownload(type);

    setTimeout(() => {
      alert(`${type} download has been started`);
      setDownload(null);
    }, 1500);
  };

  return (
    <div className='main-resource'>
      <div className="resources-img">
        <p>Resources/Downloads</p>  
        <img
          src={right}
          alt='p'
          onClick={() => setOpen(!open)}
          className={open ? "rotate" : ""}
        />
      </div>

      <div className={`resourcesHiding ${open ? "active" : "hide"}`}>
        <div className='things-images'>
          <img className='book' src={book} alt='' />
          <p className='sub-words'>User Manual</p>
          <button
            className='newbtn'
            onClick={() => handleDownload("User Manual")}
            disabled={download === "User Manual"}
          >
            {download === "User Manual" ? "Downloading..." : "Download"}
          </button>

          <img src={settings} alt='d' />
          <p className='sub-words'>Parts Diagram</p>
          <button
            className='newbtn'
            onClick={() => handleDownload("Parts Diagram")}
            disabled={download === "Parts Diagram"}
          >
            {download === "Parts Diagram" ? "Downloading..." : "Download"}
          </button>

          <img src={pdf} alt='h' />
          <p className='sub-words'>Catalog Page</p>
          <button
            className='newbtn'
            onClick={() => handleDownload("Catalog Page")}
            disabled={download === "Catalog Page"}
          >
            {download === "Catalog Page" ? "Downloading..." : "Download"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Resources




// This function controls which button is active, shows feedback, simulates async work, and resets UI safely.


//🤔 Why do we even have Downloads?

// In a mobile PDP (Product Detail Page), users don’t just want to buy.
// They also want information before deciding.

// Downloads solve that.

// 🧠 Real User Thinking (Very Important)

// A real user asks:

// “How do I install this?”

// “Is it compatible?”

// “What parts does it contain?”

// “Can I check specs offline?”

// 👉 That’s why downloads exist.




// alert() is a built-in browser function that shows a popup message to the user.

// A popup is a small window or box that suddenly appears on top of the current screen to show a message or ask something from the user.