import React from "react";
import "../Styles/home.css";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import HomeC from "./HomeC";

function Home() {
  return (
    <>
      <div className="home">
        <div className="sub_home">
          <div className="inside_s_home">
            <Link to="/readingPage">
              <div className="H_title">
                <h1>Title of vertical gallery</h1>
                <p>Travel /August 21 2017</p>
              </div>
              <img
                src="https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="inside_s_home1">
            <div className="inside_h1">
              <Link to="/readingPage">
                <div className="H_title">
                  <h1>The Sound cloud You loved is doomed</h1>
                  <p>Travel /August 21 2017</p>
                </div>
                <img
                  src="https://cdn.pixabay.com/photo/2020/12/23/08/00/bow-lake-5854210_960_720.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="inside_h2">
              <Link to="/readingPage">
                <div className="H_title">
                  <h1>The Sound cloud You loved is doomed</h1>
                  <p>Travel /August 21 2017</p>
                </div>
                <img
                  src="https://cdn.pixabay.com/photo/2020/12/23/08/00/bow-lake-5854210_960_720.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="latest_arti">
          <div className="latest_title">
            <h1>The Latest</h1>
            <div className="bottom_line"></div>
          </div>
          <div className="latest_One">
            <HomeC imgsrc="https://cdn.pixabay.com/photo/2020/02/05/19/50/summer-palace-4822213_960_720.jpg" title="Joshua Tree Overnight Adventure" para="Gujarat is vastly underrated and it's a mystery to us why
                            the region isn't more well-known as a tourist destination.
                            It has a plethora of temple and places"/>
            <HomeC imgsrc="https://cdn.pixabay.com/photo/2020/02/05/19/50/summer-palace-4822213_960_720.jpg" title="Joshua Tree Overnight Adventure" para="Gujarat is vastly underrated and it's a mystery to us why
                            the region isn't more well-known as a tourist destination.
                            It has a plethora of temple and places"/>
            <HomeC imgsrc="https://cdn.pixabay.com/photo/2020/02/05/19/50/summer-palace-4822213_960_720.jpg" title="Joshua Tree Overnight Adventure" para="Gujarat is vastly underrated and it's a mystery to us why
                            the region isn't more well-known as a tourist destination.
                            It has a plethora of temple and places"/>
          </div>
        </div>
        <div className="latest_arti latest_articles">
          <div className="latest_title">
            <h1>Latest Articles</h1>
            <div className="bottom_line"></div>
          </div>
          <div className="under_latest_article">
            <div className="column_arti">
              <div className="inside_col">
                <div className="col_1">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/10/07/12/05/stockholm-1721388_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="col_1_t">
                  <Link to="/readingPage">
                    <h1>Catch waves with an adventrue guide</h1>
                    <p>
                      Gujarat is vastly underrated and it's a mystery to us why
                      the region isn't more well-
                    </p>
                    <p className="title_t">
                      <strong>Travel</strong> / August 21 2017
                    </p>
                  </Link>
                </div>
              </div>
              <div className="inside_col_1">
                <div className="col_2">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/10/07/12/05/stockholm-1721388_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="col_2_t">
                  <Link to="/readingPage">
                    <h1>Catch waves with an adventrue guide</h1>
                    <p>
                      Gujarat is vastly underrated and it's a mystery to us why
                      the region isn't more well-
                    </p>
                    <p className="title_t1">
                      <strong>Travel</strong> / August 21 2017
                    </p>
                  </Link>
                </div>
              </div>
              <div className="inside_col_1">
                <div className="col_2">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/10/07/12/05/stockholm-1721388_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="col_2_t">
                  <Link to="/readingPage">
                    <h1>Catch waves with an adventrue guide</h1>
                    <p>
                      Gujarat is vastly underrated and it's a mystery to us why
                      the region isn't more well-
                    </p>
                    <p className="title_t1">
                      <strong>Travel</strong> / August 21 2017
                    </p>
                  </Link>
                </div>
              </div>
              <div className="inside_col_1">
                <div className="col_2">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/10/07/12/05/stockholm-1721388_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="col_2_t">
                  <Link to="/readingPage">
                    <h1>Catch waves with an adventrue guide</h1>
                    <p>
                      Gujarat is vastly underrated and it's a mystery to us why
                      the region isn't more well-
                    </p>
                    <p className="title_t1">
                      <strong>Travel</strong> / August 21 2017
                    </p>
                  </Link>
                </div>
              </div>
              <Link to="/readingPage">
                <div className="more_content">
                  <IoIosArrowRoundDown />
                  <div className="more_load">
                    <p>LOAD MORE</p>
                  </div>
                </div>
              </Link>
              <div className="after_more">
                <Link to="/readingPage">
                  <div className="after_m_title">
                    <h1>Title of vertical gallery</h1>
                    <p>Travel / August 21 2017</p>
                  </div>
                  <div className="img_title">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/10/07/12/05/stockholm-1721388_960_720.jpg"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="Add_arti">
              <div className="addvertise">
                <h1>Advertisement</h1>
              </div>
              <div className="top_post">
                <div className="top_post_title latest_title">
                  <h1>Top Posts</h1>
                  <div className="bottom_line_post bottom_line"></div>
                </div>
                <div className="main_top_post">
                  <div className="img_post">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg"
                      alt=""
                    />
                  </div>
                  <div className="post_title_p">
                    <Link to="/readingPage">
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
                      <Link to="/readingPage">
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
                      <Link to="/readingPage">
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
                      <Link to="/readingPage">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="latest_arti latest_stories">
          <div className="latest_title">
            <h1>Latest Stories</h1>
            <div className="bottom_line"></div>
          </div>
          <div className="latest_One">
            <Link to="/readingPage">
              <div className="arti_1 art_sub">
                <div className="arti_1_temple arti_1_temple_2">
                  <h1>Catch waves with an adventrue guide</h1>
                  <p>
                    Gujarat is vastly underrated and it's a mystery to us why
                    the region isn't more well-known as a tourist destination.
                    It has a plethora of temple and places Gujarat is vastly
                    underrated and it's a mystery to us why the region isn't
                    more well-known as a tourist destination. It has a plethora
                    of temple and places
                  </p>
                </div>
                <div className="arti_1_para">
                  <p>
                    <strong>TECH</strong> / TODAY AT 11:54
                  </p>
                </div>
              </div>
            </Link>
            <div className="arti_2 art_sub">
              <Link to="/readingPage">
                <div className="arti_1_temple arti_1_temple_2">
                  <h1>Catch waves with an adventrue guide</h1>
                  <p>
                    Gujarat is vastly underrated and it's a mystery to us why
                    the region isn't more well-known as a tourist destination.
                    It has a plethora of temple and places Gujarat is vastly
                    underrated and it's a mystery to us why the region isn't
                    more well-known as a tourist destination. It has a plethora
                    of temple and places
                  </p>
                </div>
                <div className="arti_1_para">
                  <p>
                    <strong>STYLE</strong> / AUGUST 21 2017
                  </p>
                </div>
              </Link>
            </div>
            <div className="arti_3 art_sub">
              <Link to="/readingPage">
                <div className="arti_1_temple arti_1_temple_2">
                  <h1>Catch waves with an adventrue guide</h1>
                  <p>
                    Gujarat is vastly underrated and it's a mystery to us why
                    the region isn't more well-known as a tourist destination.
                    It has a plethora of temple and places Gujarat is vastly
                    underrated and it's a mystery to us why the region isn't
                    more well-known as a tourist destination. It has a plethora
                    of temple and places
                  </p>
                </div>
                <div className="arti_1_para">
                  <p>
                    <strong>TECH</strong> / AUGUST 21 2017
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/readingPage">
            <div className="more_content">
              <div className="more_load">
                <p>VIEW MORE</p>
              </div>
              <IoIosArrowRoundForward />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
