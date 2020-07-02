import React from 'react';
import user from './images/user.png';
import insights from './images/insights.png';
import achievements from './images/achievements.png';
import tracks from './images/tracks.png';
import active from './images/active.png';
import contests from './images/contests.png';
import '../Components/CSS/user.css';

class User extends React.Component {
    render() {
        return (
          <div className="flex-container">
               <div className="box profile-card">
                 <img src={user} />
                <h1>Mahesh Adhikari</h1>
                <p>Student</p>
                <p>Gangtok, Sikkim</p>
                <button type="button" className="btn">Edit Profile</button>
                 </div>
                 <div className="box navbar">
                  <h1>Navigation</h1>
                  <a href="#"><img src={insights} alt="Insights" /> Insights</a><br />     
                  <a href="#"><img src={achievements} alt="Achievements" /> Achievements</a> <br />
                  <a href="#"><img src={tracks} alt="Your Tracks" /> Your Tracks</a> <br />  
                  <a href="#"><img src={active} alt="Your Active Contests" /> Your Active Contests</a> <br />
                  <a href="#"><img src={contests} alt="Participated Contests" /> Participated Contests</a>
                 </div>
                  <div className="box leaderboard">
                  <h1 className="leaderboard">Leaderboard</h1>
                  </div>
          </div>
            // <div className="user">
            //   <div className="profile-card">
            //   <img src={user} />
            //   <h1>Mahesh Adhikari</h1>
            //   <p>Student</p>
            //   <p>Gangtok, Sikkim</p>
            //   <button type="button" className="btn">Edit Profile</button>
            //     </div>
            //   <br />
            //   <div className="navbar">
            //   <h1>Navigation</h1>
            //   <a href="#"><img src={insights} alt="Insights" /> Insights</a><br />     
            //   <a href="#"><img src={achievements} alt="Achievements" /> Achievements</a> <br />
            //   <a href="#"><img src={tracks} alt="Your Tracks" /> Your Tracks</a> <br />  
            //   <a href="#"><img src={active} alt="Your Active Contests" /> Your Active Contests</a> <br />
            //   <a href="#"><img src={contests} alt="Participated Contests" /> Participated Contests</a>
                  

            //   </div>
            //   <br />
            //   <br />
            //   <br />
            //   <br />
            //   <br />
            //   <h1 className="leaderboard">Leaderboard</h1>
              
                    
            </div>
        )
    }
}

export default User;