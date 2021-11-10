import React from 'react'
import { Link } from "react-router-dom";

function Cate(props) {
    return (
        <>
            <div className="inside_col_1">
                <div className="col_2">
                    <img
                        src={props.imgsrc}
                        alt={props.imgsrc}
                    />
                </div>
                <div className="col_2_t">
                    <Link to="/readingPage">
                        <h1>{props.title}</h1>
                        <p>
                            {props.para}
                        </p>
                        <p className="title_t1">
                            <strong>Travel</strong> / August 21 2017
                        </p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Cate;