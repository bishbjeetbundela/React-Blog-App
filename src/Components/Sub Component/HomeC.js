import React from "react";
import "../Styles/home.css";
import { Link } from "react-router-dom";

function HomeC(props) {
    return (
        <>
            <div className="arti_1 art_sub">
                <Link to="/readingPage">
                    <div className="img-1">
                        <img
                            src={props.imgsrc}
                            alt={props.imgsrc}
                        />
                    </div>
                    <div className="arti_1_temple">
                        <h1>{props.title}</h1>
                        <p>
                            {props.para}
                        </p>
                    </div>
                    <div className="arti_1_para">
                        <p>
                            <strong>Travel</strong> / August 21 2017
                        </p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default HomeC;
