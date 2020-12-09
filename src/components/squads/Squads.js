import React from 'react';
import { squadsInfo } from "../../data/squads";
import DiscordWidget from "./../discord/DiscordWidget";
import './Squads.scss';

class Squads extends React.Component {
  render() {
    return (
      <>
        <div className="squads__container">
          <h1>Squads</h1>
        </div>
        <div className="squad-container section">
          {squadsInfo.map((data, key) => {
            return (
              <>
                <div key={key}>
                  <h4>{data.name}</h4>
                  {data.twitter ? <div> (Twitter icon) Twitter: <span>{data.twitter}</span></div> : ""}
                  {data.instagram ? <div> (Instagram icon) Instagram: <span>{data.instagram}</span></div> : ""}
                  {data.youtube ? <div> (Youtube icon) Youtube: <span>{data.youtube}</span></div> : ""}
                  {data.twitch ? <div> (Twitch icon) Twitch: <span>{data.twitch}</span></div> : ""}
                  <DiscordWidget inviteId={data.discord}/>
                  {data.desc ? <div> {data.desc} </div> : ""}
                </div>

              </>
            );
          })}
        </div>
      </>
    );
  };
};

export default Squads;
