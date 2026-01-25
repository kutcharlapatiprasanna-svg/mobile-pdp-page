import React, { useState } from 'react'
import "./Specifications.css"
import right from "../../assets/chevron_right.png"

const Specifications = () => {

    const [openArrow, setOpenArrow] = useState(false);
    return (
        <div className='spicfications'>
            <div className="spicfications-arrow">
                <p>Specifications</p>
                <img src={right} alt='g' 
                onClick={()=>setOpenArrow(!openArrow)}
                className={openArrow ? "rotate" : ""}/>
            </div>

            <div className="specifications">
                <div className={`tableSystems ${openArrow ? "active" : "hide"}`}>
                    <table className="specs-table">
                        <tbody>
                            <tr>
                                <td className="specs-label">Primary Product Color</td>
                                <td className="specs-value">Black</td>
                            </tr>
                            <tr>
                                <td className="specs-label">Primary Product Material</td>
                                <td className="specs-value">Steel</td>
                            </tr>
                            <tr>
                                <td className="specs-label">Overall Product Height</td>
                                <td className="specs-value">36"</td>
                            </tr>
                            <tr>
                                <td className="specs-label">Overall Product Length</td>
                                <td className="specs-value">42"</td>
                            </tr>
                            <tr>
                                <td className="specs-label">Overall Product Width</td>
                                <td className="specs-value">26"</td>
                            </tr>
                            <tr>
                                <td className="specs-label">Folded Dimensions</td>
                                <td className="specs-value">42" × 12.5" × 36"</td>
                            </tr>
                            <tr>
                                <td className="specs-label">Base Shipping Height</td>
                                <td className="specs-value">36.6</td>
                            </tr>
                            <tr>
                                <td className="specs-label">Base Shipping Length</td>
                                <td className="specs-value">32.48</td>
                            </tr>
                            <tr>
                                <td className="specs-label">Base Shipping Width</td>
                                <td className="specs-value">11.42</td>
                            </tr>
                            <tr>
                                <td className="specs-label">Base Shipping Weight</td>
                                <td className="specs-value">47.69</td>
                            </tr>
                            <tr>
                                <td className="specs-label">Actual Product Weight</td>
                                <td className="specs-value">44 lbs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default Specifications;
