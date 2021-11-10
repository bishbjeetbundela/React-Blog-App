import React from "react";
import "../Styles/readingPage.css";
import { FaHandsWash } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import code from "../images/code.png";
import { Link } from "react-router-dom";

function readingPage() {
  return (
    <>
      <div className="reading_page">
        <div className="main_reading_page">
          <div className="reading_page_icons">
            <div className="social_media_R">
              <div className="media_icons">
                <FaHandsWash className="svg1" />
                <span>9.3k</span>
              </div>
              <div className="media_icons_1">
                <FaShareAlt className="svg2" />
                <span>Share this article</span>
              </div>
            </div>
          </div>
          <div className="reading_page_title">
            <h2>5 Ways to animate a React app.</h2>
            <div className="page_user">
              <div className="use_img">
                <img
                  src="https://image.freepik.com/free-vector/man-face-close-up_98292-4059.jpg"
                  alt=""
                />
              </div>
              <div className="use_name">
                <h4>Dmitry Nozhenko</h4>
                <p>jan 28,2019 10 min read</p>
              </div>
              <Link to="#">
                <div className="use_social_media">
                  <FaFacebookSquare />
                  <FaTwitterSquare />
                  <FaInstagramSquare />
                  <FaYoutubeSquare />
                </div>
              </Link>
            </div>
            <div className="img_animation">
              <img
                src="https://miro.medium.com/max/1400/1*1Z177dpTeAp7uEFc5Zx2xg.png"
                alt=""
              />
            </div>
            <div className="content_reading">
              <p>
                Animation in ReaetJs app is a popular topic and there are many
                ways to create different types of animations. Many developers
                create animation exclusively using ess and adding classes to
                HTML tags. This is a great ‘way and you should use it. If you
                want to create complex animations you can pay attention to
                GreenSock. GreenSock is the most powerful animation platform.
                There are also a lot of libraries, components for creating
                animation in React.
                <br />
                <br />
                Let's talk about them
              </p>
            </div>
            <div className="code_reading">
              <img src={code} alt="" />
            </div>
            <div className="specific_text">
              <p>
                React <span>Javascript</span>
                <span>Animation</span>
              </p>
            </div>
            <div className="media_icons1">
              <FaHandsWash className="svg1" />
              <span>9.3k claps</span>
            </div>
            <div className="page_user user_name1">
              <div className="use_img">
                <img
                  src="https://image.freepik.com/free-vector/man-face-close-up_98292-4059.jpg"
                  alt=""
                />
              </div>
              <div className="use_name">
                <p className="author_text">WRITTEN BY</p>
                <h4>Dmitry Nozhenko</h4>
                <p>jan 28,2019 10 min read</p>
              </div>
            </div>
          </div>
        </div>
        <div className="latest_arti">
          <div className="latest_title">
            <h1>More From The Siren</h1>
          </div>
          <div className="latest_One  main_reading_page">
            <Link to="#">
              <p className="litile_under_reading_page">Also tagged Reactjs</p>
              <div className="arti_1 art_sub reading_page_title">
                <div className="img-1">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/02/05/19/50/summer-palace-4822213_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="arti_1_temple">
                  <h1>Joshua Tree Overnight Adventure</h1>
                </div>
                <div className="page_user">
                  <div className="use_img">
                    <img
                      src="https://image.freepik.com/free-vector/man-face-close-up_98292-4059.jpg"
                      alt=""
                    />
                  </div>
                  <div className="use_name">
                    <h4>Dmitry Nozhenko</h4>
                    <p>Aug 10 4 min read</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="arti_2 art_sub reading_page_title">
              <Link to="#">
                <p className="litile_under_reading_page">Related reads</p>
                <div className="img-1">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/02/05/19/50/summer-palace-4822213_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="arti_1_temple">
                  <h1>Joshua Tree Overnight Adventure</h1>
                </div>
                <div className="page_user">
                  <div className="use_img">
                    <img
                      src="https://image.freepik.com/free-vector/man-face-close-up_98292-4059.jpg"
                      alt=""
                    />
                  </div>
                  <div className="use_name">
                    <h4>Dmitry Nozhenko</h4>
                    <p>Aug 10 4 min read</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="arti_3 art_sub reading_page_title">
              <Link to="#">
                <p className="litile_under_reading_page">Related reads</p>
                <div className="img-1">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/02/05/19/50/summer-palace-4822213_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="arti_1_temple">
                  <h1>Joshua Tree Overnight Adventure</h1>
                </div>
                <div className="page_user">
                  <div className="use_img">
                    <img
                      src="https://image.freepik.com/free-vector/man-face-close-up_98292-4059.jpg"
                      alt=""
                    />
                  </div>
                  <div className="use_name">
                    <h4>Dmitry Nozhenko</h4>
                    <p>Aug 10 4 min read</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default readingPage;
