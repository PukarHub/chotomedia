import React from 'react'
import News from './News'
import Followers from './Followers'


const Home = () => {
    return (
       <div className="columns">
           <div className="column">
             <div className="card" id="c1">
                 <header className="card-header">
                 <p className="card-header-title">
                   <span>POSTS</span>
                 </p>
                      {/* eslint-disable-next-line */}
                 <a href="#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                     <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                 </a>
                 </header>
                 <div className="card-content">
                     <div className="content">
                       <ul id="first-list">
                         <li><a href="/top"><i className="far fa-newspaper"></i> Top</a></li>
                         <li><a href="/top"><i className="fas fa-marker"></i> Follwing</a></li>
                         <li><a href="/allnew"><i className="far fa-bookmark"></i> All New</a></li>
                       </ul>
                     </div>
                 </div>
             </div>
           </div>
           <div className="column">
               <News />
              </div>
           <div className="column">
             <Followers />
           </div>
       </div>
    )
}

export default Home
