import React from 'react'
import { Link } from "react-router-dom";

function Subcommon() {
    return (
        <>
            <div className="img_post">
                <img
                    src="https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg"
                    alt=""
                />
            </div>
            <div className="post_title_p">
                <Link to="#">
                    <h1>
                        Catch waves with an adventrue guide <span>1</span>
                    </h1>
                    <p>
                        <strong>Travel</strong> / August 21 2017
                    </p>
                </Link>
            </div>
            <div className="post_title_p1">
                <div className="title_img">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/10/07/12/05/stockholm-1721388_960_720.jpg"
                        alt=""
                    />
                </div>
                <div className="title_post1">
                    <Link to="#">
                        <h1>Catch waves with adventrue guide</h1>
                        <p>
                            <strong>Travel</strong> / August 21 2017
                        </p>
                    </Link>
                </div>
                <div className="post_num">
                    <p>2</p>
                </div>
            </div>
            <div className="post_title_p1">
                <div className="title_img">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/10/07/12/05/stockholm-1721388_960_720.jpg"
                        alt=""
                    />
                </div>
                <div className="title_post1">
                    <Link to="#">
                        <h1>Catch waves with adventrue guide</h1>
                        <p>
                            <strong>Travel</strong> / August 21 2017
                        </p>
                    </Link>
                </div>
                <div className="post_num">
                    <p>3</p>
                </div>
            </div>
            <div className="post_title_p1">
                <div className="title_img">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/10/07/12/05/stockholm-1721388_960_720.jpg"
                        alt=""
                    />
                </div>
                <div className="title_post1">
                    <Link to="#">
                        <h1>Catch waves with adventrue guide</h1>
                        <p>
                            <strong>Travel</strong> / August 21 2017
                        </p>
                    </Link>
                </div>
                <div className="post_num">
                    <p>4</p>
                </div>
            </div>

        </>
    )
}

export default Subcommon;