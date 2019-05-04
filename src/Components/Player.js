import React from "react";

import Button from "./Button";

import { Card, PlayerHand } from "../Styles/Styled";

const Player = ({ name , deletePlayer, editPlayer, edit, changeName, cards}) => (
	<article>
		<p>

			{edit ? <input type="text" value={name}  onChange={changeName} /> : name}
			<Button icon={edit?"✅": "✏️"} onClick={editPlayer}>Edit</Button>
			<Button icon="🔥" onClick={deletePlayer}>Remove</Button>
		</p>
		<PlayerHand>
            {
                cards.map(({suit, value}) => {
                    return (
                        <Card key={suit + value} suit={suit} value={value}>
                            {value}
                        </Card>
                    )
                })
            }
		</PlayerHand>
	</article>
);

export default Player;
