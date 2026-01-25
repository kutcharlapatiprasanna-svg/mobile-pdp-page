import React, { useState } from 'react'
import "./Resources.css"
import right from "../../assets/chevron_right.png"
import book from "../../assets/book.png"
import settings from "../../assets/settings_3.jpg"
import pdf from "../../assets/pdf___.png"
const Resources = () => {

    const [open, setOpen] = useState(false);

    return (

        <div className='main-resource'>
            <div className="resources-img">
                <p>Resources/Downloads</p>
                <img src={right} alt='p' onClick={() => setOpen(!open)}
                    className={open ? "rotate" : ""} />
            </div>

            <div className={`resourcesHiding ${open ? "active" : "hide"}`}>
                <div className='things-images'>
                    <img src={book} alt=''></img>
                    <p className='sub-words'>User Manual</p>
                    <button className='newbtn'>Download</button>
                    <img src={settings} alt='d' />
                    <p className='sub-words'>Parts Diagram</p>
                    <button className='newbtn'>Download</button>
                    <img src={pdf} alt='h' />
                    <p className='sub-words'>Catalog Page</p>
                    <button className='newbtn'>Download</button>
                </div>
            </div>


        </div>

    )
}

export default Resources
