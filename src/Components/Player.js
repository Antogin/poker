import React from "react";

import Button from "./Button";

import { Card, PlayerHand } from "../Styles/Styled";

const Player = ({ name , deletePlayer, editPlayer, edit, changeName}) => (
	<article>
		<p>

			{edit ? <input type="text" value={name}  onChange={changeName} /> : name}
			<Button icon={edit?"✅": "✏️"} onClick={editPlayer}>Edit</Button>
			<Button icon="🔥" onClick={deletePlayer}>Remove</Button>
		</p>
		<PlayerHand>
				<Card suit="D" value="A" selected={true}>
					A
				</Card>
				<Card suit="D" value="K">
					K
				</Card>
				<Card suit="D" value="Q">
					Q
				</Card>
				<Card suit="D" value="J">
					J
				</Card>
				<Card suit="D" value="T">
					T
				</Card>
		</PlayerHand>
	</article>
);

export default Player;
