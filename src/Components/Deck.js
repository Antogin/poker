import React, {Fragment} from "react";
import { Card, StyledDeck } from "../Styles/Styled";

const Deck = ({deck, usedCards}) => (
	<StyledDeck>
        <Fragment>
        {
            deck.map(({suit, value}) => {
                return (
                    <Card key={suit+value} suit={suit} value={value}>
                        {value}
                    </Card>)
            })
        }
        </Fragment>
        <Fragment>
            {
                usedCards.map(({suit, value}) => {
                    return (
                        <Card selected key={suit+value} suit={suit} value={value}>
                            {value}
                        </Card>)
                })
            }
        </Fragment>
	</StyledDeck>
);

export default Deck;
