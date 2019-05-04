import React from "react";

import Button from "./Button";
import Input from "./Input";

import { Card, PlayerHand } from "../Styles/Styled";

const Player = ({ name , deletePlayer, editPlayer, edit, changeName, cards, canDelete, id }) => (
	<article>
		<p>

			{edit ? <Input type="text"  value={name} id={id} onChange={changeName} /> : name}
			<Button id={id} icon={edit?"✅": "✏️"} onClick={editPlayer}>Edit</Button>
            {canDelete ?<Button id={id} icon="🔥" onClick={deletePlayer}>Remove</Button>: null}
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
