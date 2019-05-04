import React, { Component } from 'react';
import { generateId, newDeck } from "../utils";
import { shuffle }from 'lodash';

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
					cards: [],
                    edit: false
				},
				{
					name: 'player 2',
					id: generateId(),
					cards: [],
                    edit: false
				}
			],
            deck: newDeck()
		};
	}

	componentDidMount() {
	    this.dealCards()
    }

    addPlayer = () => {
		const { players, deck } = this.state;

		const id = generateId();

        const newDeck = [...deck];

        this.setState({
			...this.state,
            deck: newDeck,
			players: [ ...players, { name: id, cards: newDeck.splice(0,5), id, edit: false } ]
		});
	};

    deletePlayer = (id) => {
        const { players } = this.state;

        this.setState({
            ...this.state,
            players: players.filter((player) => player.id !== id)
        });
    };

    editPlayer = (id) => {
        const { players } = this.state;

        this.setState({
            ...this.state,
            players: players.map((player) => {

                if(player.id === id){
                    return {
                        ...player,
                        edit: !player.edit
                    }
                }
                return player;

            })
        });
    };

    changeName = (e, id) => {
        const { players } = this.state;

        this.setState({
            ...this.state,
            players: players.map((player) => {
                if(player.id === id){
                    return {
                        ...player,
                        name: e.target.value
                    }
                }
                return player;

            })
        });
    };

    dealCards = () => {
        const {deck, players } = this.state;

        const newDeck = shuffle(deck);

        const playerWithCards = players.map(player => {
            return {...player, cards: newDeck.splice(0,5)}
        });

        this.setState({
            ...this.state,
            deck: newDeck,
            players: playerWithCards
        });
    };

	render() {
		const { players , deck} = this.state;

		return (
			<Layout>
				<section>
					<h1>Cards deck</h1>
					<Deck deck={deck} />
				</section>
				<section>
					<header>
						<h1>Players</h1>
					</header>
					<section>
                        {players.map((player) => (
					    <Player
                            deletePlayer={() => this.deletePlayer(player.id)}
                            editPlayer={() => this.editPlayer(player.id)}
                            key={player.id}
                            cards={player.cards}
                            edit={player.edit}
                            changeName={(e) => this.changeName(e, player.id)}
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
