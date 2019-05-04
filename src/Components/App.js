import React, { Component } from 'react';

import { suits, values, generateId } from "../utils";

import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import Button from "./Button";

import { Footer } from "../Styles/Styled";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: [
				{
					name: 'player 1',
					id: generateId(),
					cards: []
				},
				{
					name: 'player 2',
					id: generateId(),
					cards: []
				}
			]
		};
	}

	addPlayer = () => {
		const { players } = this.state;

		const id = generateId();
		this.setState({
			...this.state,
			players: [ ...players, { name: id, cards: [], id } ]
		});
	};

    deletePlayer = (id) => {
        const { players } = this.state;

        this.setState({
            ...this.state,
            players: players.filter((player) => player.id !== id)
        });
    };
	render() {
		const { players } = this.state;

		return (
			<Layout>
				<section>
					<h1>Cards deck</h1>
					<Deck suits={suits} values={values} />
				</section>
				<section>
					<header>
						<h1>Players</h1>
					</header>
					<section>
                        {players.map((player) => (
					    <Player
                            deletePlayer={() => this.deletePlayer(player.id)}
                            key={player.id}
                            name={player.name} />
					    ))}
					</section>
					<Footer>
						<Button onClick={this.addPlayer} icon="🙋‍♀️">
							Add new player
						</Button>
						<Button icon="🏆">Find the winner</Button>
					</Footer>
				</section>
			</Layout>
		);
	}
}

export default App;
