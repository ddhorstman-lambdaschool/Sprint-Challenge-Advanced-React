import React from "react";
import Player from "./Player";
import { Row } from "reactstrap";
class WorldCupContainer extends React.Component {
    state = {
        players: []
    };
    componentDidMount() {
        fetch("http://localhost:5000/api/players")
            .then(res => res.json())
            .then(res => this.setState({ players: res }));
    }

    render() {
        return (<>
            <h1>Women's World Cup Players</h1>
            <Row xs="3">
                {this.state.players.map(x =>
                    <Player key={x.id} {...x} />
                )}
            </Row>
        </>);
    }
}

export default WorldCupContainer;