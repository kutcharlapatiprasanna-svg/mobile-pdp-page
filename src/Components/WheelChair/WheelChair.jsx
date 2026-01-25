import React, { useState } from "react";
import "./WheelChair.css";
import wheelchair1 from "../../assets/wheelechair.jpg";
import wheelchair2 from "../../assets/wheelchair2.webp";
import wheelchair3 from "../../assets/wheelchair3.avif";
import like from "../../assets/like.png";
import share from "../../assets/share.png";

const wheelchaires = [wheelchair1, wheelchair2, wheelchair3];

const WheelChair = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="sports">

            <h1 className="w">Silver Sport 2</h1>
            <h1>Wheelchair</h1>

            {/* IMAGE */}
            <div className="wheelchair-image-container">
                <img
                    src={wheelchaires[activeIndex]}
                    alt="Wheelchair"
                    className="wheelchair-image"
                />
            </div>


            {/* DOTS */}
            <div className="dots">
                {wheelchaires.map((abc, index) => (
                    <p key={index}
                        className={`dot ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>

            <h1 className="price">$262.23</h1>

            {/* Item + Like/Share */}
            <div className="item-row">
                <p className="item-text">Item # SSP218DDA-ELR</p>

                <div className="item-actions">
                    <img src={like} alt="Like" />
                    <img src={share} alt="Share" />
                </div>
            </div>

            <div className="final-one">
                <p>UPC # 822383140414</p>
                <p>HCPCS # E4002</p>
            </div>
        </div>
    );
};

export default WheelChair;


