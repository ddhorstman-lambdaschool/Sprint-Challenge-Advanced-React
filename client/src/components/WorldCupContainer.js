import React from "react";
import Player from "./Player";
import { CardDeck } from "reactstrap";
class WorldCupContainer extends React.Component {
    state = {
        players: []
    };
    componentDidMount() {
        fetch("http://localhost:5000/api/players")
            .then(res => res.json())
            //.then(console.log);
            .then(res => this.setState({ players: res }));
    }

    render() {
        return (<div>
            {this.state.players.map(x =>
                <Player key={x.id} {...x} />
            )}
        </div>);
    }
}

export default WorldCupContainer;