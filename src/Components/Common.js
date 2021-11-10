import React from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Cate from './Cate';
import Cdata from './Cdata';
import Subcommon from "./Subcommon";

function Common(props) {
    return (
        <>
            <div className="bollywood">
                <div className="latest_arti latest_articles">
                    <div className="latest_title">
                        <h1>{props.title}</h1>
                        <div className="bottom_line"></div>
                    </div>
                    <div className="under_latest_article">
                        <div className="column_arti">
                            {Cdata.map((val,ind)=>{
                                return <Cate key={ind} imgsrc={val.imgsrc} title={val.title} para={val.para} datetime={val.datetime}/>
                            })}
                            <Link to="/readingPage">
                                <div className="more_content">
                                    <IoIosArrowRoundDown />
                                    <div className="more_load">
                                        <p>LOAD MORE</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="Add_arti">
                            <div className="top_post">
                                <div className="top_post_title latest_title">
                                    <h1>Top Posts</h1>
                                    <div className="bottom_line_post bottom_line"></div>
                                </div>
                                <div className="main_top_post">
                                    <Subcommon />
                                </div>
                            </div>
                            <div className="addvertise">
                                <h1>Advertisement</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Common;