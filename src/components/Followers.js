import React from 'react'
import u1 from '../images/user1.JPG'

const Followers = () => {
    return (
        <>
           <h1 id="h1"> <span>Instagram Followers</span> </h1>
             <div className="card" id="c6">
               <figure id="img" className="media-left">
                    <p className="image is-64x64">
                      <img src={u1} alt="Loading...." />
                    </p>
                </figure>
               <div className="card-content">
                  <p id="follower">
                    <strong>Pukar Upreti</strong> <br/>
                    <small>@____pukar</small> <br/>
                    <button className="button is-dark">Follow</button>
                  </p>
              </div>
              <hr/>
               <figure id="img" className="media-left">
                    <p className="image is-64x64">
                      <img src={u1} alt="Loading...." />
                    </p>
                </figure>
               <div className="card-content">
                  <p id="follower">
                    <strong>Salman Khan</strong> <br/>
                    <small>@sallubhai</small> <br/>
                    <button className="button is-dark">Follow</button>
                  </p>
              </div>
              <hr/>
               <figure id="img" className="media-left">
                    <p className="image is-64x64">
                      <img src={u1} alt="Loading...." />
                    </p>
                </figure>
               <div className="card-content">
                  <p id="follower">
                    <strong>Rajesh Hamal</strong> <br/>
                    <small>@rajesh dai</small> <br/>
                    <button className="button is-dark">Follow</button>
                  </p>
              </div>
              <p id="p">See more followers</p>
             </div> 
        </>
    )
}

export default Followers
