import React, {PureComponent} from "react";

import { StyledButton } from "../Styles/Styled";

class Button extends PureComponent {

    onClick = () => {
        const { onClick, id }= this.props;
        onClick(id)
    };

    render() {
        const { icon, children}= this.props;
        return (
            <StyledButton onClick={this.onClick}>
                {icon && (
                    <span role="img" alt="woman raising hand" aria-label="woman raising hand">
				        {icon}
			        </span>
                )}
                {children}
            </StyledButton>
        )
    }
}

export default Button;
