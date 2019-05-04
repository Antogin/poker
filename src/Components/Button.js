import React from "react";

import { StyledButton } from "../Styles/Styled";

const Button = ({ icon, children, onClick, id }) => (
	<StyledButton onClick={onClick} id={id}>
		{icon && (
			<span role="img" alt="woman raising hand" aria-label="woman raising hand">
				{icon}
			</span>
		)}
		{children}
	</StyledButton>
);

export default Button;
