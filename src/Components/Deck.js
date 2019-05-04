import React from "react";
import { Card, StyledDeck } from "../Styles/Styled";

const Deck = ({deck}) => (
	<StyledDeck>
        {
            deck.map(({suit, value}) => {
                return (
                    <Card key={suit+value} suit={suit} value={value}>
                        {value}
                    </Card>)
            })
        }
	</StyledDeck>
);

export default Deck;
