import React from 'react';
import medal from './images/medal.png';
import contests from './images/contests.png';
import clock from './images/clock.png';
import beginner from './images/beginner.png';
import learner from './images/learner.png';
import wonContest from './images/won_a_contest.png';
import enthusiastA from './images/enthusiast_a.png';
import dedicated from './images/dedicated.png';
import completedTracks from './images/completed_a_track.png';
import enthusiastR from './images/enthusiast_r.png';
import cpp from './images/cpp.png';
import python from './images/python.png';
import structures from './images/structure.png'
import '../Components/CSS/stats.css';


class Stats extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <div className="insights">
                    <h1>Insights</h1>
                    <div className="insight-cont">
                        <div className="time">
                            <p>Total Time Spent</p>
                            <img src={clock} alt="Total Time Spent" />
                            <p className="nums"><strong>26 hrs</strong></p>
                        </div>
                        <div className="contests">
                            <p>Participated Contests</p>
                            <img src={contests} alt="Participated Contests" />
                            <p className="nums"><strong>2</strong></p>
                        </div>
                        <div className="won">
                        <p>Won</p>
                            <img src={medal} alt="Won" />
                            <p className="nums"><strong>0</strong></p>
                        </div>
                    </div>
                </div>
                <div className="achievements">
                    <h1>Achievements</h1>
                    <div className="ach-cont">
                    <div className="beginner">
                        <img src={beginner} alt="Beginner" />
                        <p>Beginner</p>
                    </div>
                    <div className="learner">
                        <img src={learner} alt="Learner" />
                        <p>Learner</p>
                    </div>
                    <div className="won-contest">
                        <img src={wonContest} alt="Won a Contest" />
                        <p>Won a Contest</p>
                    </div>
                    <div className="enthusiast-a">
                        <img src={enthusiastA} alt="Enthusiast" />
                        <p>Enthusiast</p>
                    </div>
                    <div className="dedicated">
                        <img src={dedicated} alt="Dedicated" />
                        <p>Dedicated</p>
                    </div>
                    <div className="completed-tracks">
                        <img src={completedTracks} alt="Completed a track" />
                        <p>Completed a track</p>
                    </div>
                    </div>
                </div>
                    
                <div className="rank">
                    <h1>Rank</h1>
                    <p>#156</p>
                    <br />
                    <p>Points Earned</p>
                    <p>1350</p>
                    <br />
                    <img src={enthusiastR} alt="Enthusiast" />
                </div>
                <div className="tracks">
                    <h1>Go to Your Tracks</h1>
                    <div className="tracks-cont">
                        <div className="cpp">
                            <img src={cpp} alt="C++" />
                            <p>C++</p>
                        </div>
                        <div className="python">
                            <img src={python} alt="Python" />
                            <p>Python</p>
                        </div>
                        <div className="ds">
                            <img src={structures} alt="Data Structures" />
                            <p>Data Structures</p>
                        </div>
                        <div className="empty"></div>
                        <div className="submit">
                            <button type="button">Start a new track</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Stats;