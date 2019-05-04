import React, { Component } from 'react';
import { generateId, newDeck } from "../utils";
import { shuffle }from 'lodash';
import * as poker from 'poker-hands'
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
            deck: [],
            usedCards: []
		};
	}

	componentDidMount() {
	    this.dealCards()
    }

    addPlayer = () => {
		const { players } = this.state;
        const deck = shuffle(newDeck());

		const id = generateId();
        const newPlayers = [ ...players, { name: id, cards: [], id, edit: false } ];

        const {drawableDeck, usedCards, playersWithCards} = this.dealCardsToPlayers(newPlayers, deck);


        this.setState({
			...this.state,
            deck: drawableDeck,
            usedCards,
			players: playersWithCards
		});
	};

    deletePlayer = (id) => {
        const { players } = this.state;
        const deck = shuffle(newDeck());

        const newPlayers = players.filter((player) => player.id !== id);

        const {drawableDeck, usedCards, playersWithCards} = this.dealCardsToPlayers(newPlayers, deck);


        this.setState({
            ...this.state,
            deck: drawableDeck,
            usedCards,
            players: playersWithCards
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

    dealCardsToPlayers(players, deck) {
        let usedCards = [];

        const drawableDeck = [...deck];

        const playersWithCards = players.map(player => {
            const cards = drawableDeck.splice(0,5);
            usedCards = usedCards.concat(cards);
            return {...player, cards}
        });

        return{
            drawableDeck,
            usedCards,
            playersWithCards
        }
    }

    dealCards = () => {
        const { players } = this.state;

        const deck = shuffle(newDeck());

        const {drawableDeck, usedCards, playersWithCards} = this.dealCardsToPlayers(players, deck);

        this.setState({
            ...this.state,
            deck:drawableDeck,
            usedCards,
            players: playersWithCards
        });
    };

    findWinner = () => {
        const { players } = this.state;
        const hands = players.map((player) => {
            return player.cards.map((card) => card.pair).join(' ');
        });

        const winnerIndex = poker.judgeWinner(hands);
        alert(`${players[winnerIndex].name} Won`)
    };

	render() {
		const { players , deck, usedCards} = this.state;

		const canDelete = players.length > 2;
		return (
			<Layout>
				<section>
					<h1>Cards deck</h1>
					<Deck usedCards={usedCards} deck={deck} />
				</section>
				<section>
					<header>
						<h1>Players</h1>
					</header>
					<section>
                        {players.map((player) => (
					    <Player
                            canDelete={canDelete }
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
                        {
                            players.length < 6 ?
                                <Button onClick={this.addPlayer} id="addPlayer" icon="🙋‍♀️">
							        Add new player
						        </Button> : null
                        }
						<Button onClick={this.findWinner} icon="🏆">Find the winner</Button>
						<Button onClick={this.dealCards} icon="🔀">Deal cards</Button>
					</Footer>
				</section>
			</Layout>
		);
	}
}

export default App;
