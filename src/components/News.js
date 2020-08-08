import React from 'react'
import p1 from '../images/imagekhabar.png'
import p2 from '../images/logoMainWht.png'
import p3 from '../images/myrepublica.jpg'
import p4 from '../images/setpati.jpg'

const News = () => {
    return (
        <>
           <article className="card" id="c2">
                          <figure id="img" className="media-left">
                            <p className="image is-64x64">
                              <img src={p1} alt="Loading...." />
                            </p>
                          </figure>
                          <div className="media-content">
                            <div className="content">
                              <p id="text">
                                <strong>Image Khabar</strong> <small>@imagekhabar</small> <small>31m ago</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                              </p>
                            </div>
                            <nav className="level is-mobile" id="icons">
                              <div className="level-left">
                              {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-reply"></i></span>
                                </a>
                                {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                                </a>
                                 {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-heart"></i></span>
                                </a>
                              </div>
                              <div className="level-right">
                                   {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-bookmark"></i></span>
                                </a>
                              </div>
                            </nav>
                          </div>
                </article>
                <article className="card" id="c3">
                          <figure id="img" className="media-left">
                            <p className="image is-64x64">
                              <img src={p2} alt="Loading...." />
                            </p>
                          </figure>
                          <div className="media-content">
                            <div className="content">
                              <p id="text">
                                <strong>Online Khabar</strong> <small>@onlinekhabar</small> <small>1hr ago</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                              </p>
                            </div>
                            <nav className="level is-mobile" id="icons">
                              <div className="level-left">
                                   {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-reply"></i></span>
                                </a>
                                     {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                                </a>
                                     {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-heart"></i></span>
                                </a>
                              </div>
                              <div className="level-right">
                                   {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-bookmark"></i></span>
                                </a>
                              </div>
                            </nav>
                          </div>
                </article>
                <article className="card" id="c4">
                          <figure id="img" className="media-left">
                            <p className="image is-64x64">
                              <img src={p3} alt="Loading...." />
                            </p>
                          </figure>
                          <div className="media-content">
                            <div className="content">
                              <p id="text">
                                <strong>MyRepublic</strong> <small>@myrepublica</small> <small>58m ago</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                              </p>
                            </div>
                            <nav className="level is-mobile" id="icons">
                              <div className="level-left">
                                   {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-reply"></i></span>
                                </a>
                                     {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                                </a>
                                     {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-heart"></i></span>
                                </a>
                              </div>
                              <div className="level-right">
                                   {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-bookmark"></i></span>
                                </a>
                              </div>
                            </nav>
                          </div>
                </article>
                <article className="card" id="c5">
                          <figure id="img" className="media-left">
                            <p className="image is-64x64">
                              <img src={p4} alt="Loading...." />
                            </p>
                          </figure>
                          <div className="media-content">
                            <div className="content">
                              <p id="text">
                                <strong>SetoPati</strong> <small>@setopati</small> <small>2m ago</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                              </p>
                            </div>
                            <nav className="level is-mobile" id="icons">
                              <div className="level-left">
                                   {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-reply"></i></span>
                                </a>
                                     {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                                </a>
                                     {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-heart"></i></span>
                                </a>
                              </div>
                              <div className="level-right">
                               {/* eslint-disable-next-line */}
                                <a className="level-item">
                                  <span className="icon is-small"><i className="fas fa-bookmark"></i></span>
                                </a>
                              </div>
                            </nav>
                          </div>
                </article>   
        </>
    )
}

export default News
