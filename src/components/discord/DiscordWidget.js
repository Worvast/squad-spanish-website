import React, { useState } from 'react';
import './discordInvite.css';
import { fetchDetail } from "./discordInvite";

class DiscordWidget extends React.Component {

    constructor(props) {
        super(props);
        const {inviteId} = this.props;
        this.state = {
          invitationId: inviteId,
        }
    }

    componentDidMount() {
        this.getInfo()
      }

    getInfo() {
        fetchDetail(this.state.invitationId)
          .then(data => {
            this.setState({
              data: data,
            })
          })
    }

    render() {
        if (this.state.data) {
            const imgUrl = "https://cdn.discordapp.com/icons/" + this.state.data.guild.id + "/" + this.state.data.guild.icon + ".jpg"
            const inviteUrl = "https://discord.gg/" + this.state.invitationId;
            return (
                <div className="discordInvite">
                    <div className="discordData">
                        <div className="serverImg discordLink">
                            <img className="serverImg"
                                src={imgUrl}/>
                        </div>
                        <div className="discordInfo">
                            <div className="serverNameBox discordLink">
                                <span className="noselect serverName">{this.state.data.guild.name}</span>
                            </div>
                            <div className="status">
                                <div className="statusIndicators noselect">
                                    <i className="onlineInd"></i><span className="numOnline">{this.state.data.approximate_presence_count} Online</span>
                                    <i className="offlineInd"></i><span className="numTotal">{this.state.data.approximate_member_count} Members</span>
                                </div>
                            </div>
                        </div>
                        <a className="discordButtonLink" href={inviteUrl} target="_blank">
                            <button type="button" className="discordLink callToAction">
                            <div className="buttonText noselect">Entrar a su discord</div>
                        </button></a>
                    </div>
                </div>
            );
        } else return (<div></div>);
    }
}

export default DiscordWidget;
