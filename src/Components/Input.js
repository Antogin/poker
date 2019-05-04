import React, {PureComponent} from "react";

class Input extends PureComponent {

    onChange = (e) => {
        const { onChange, id }= this.props;
        console.log(e.target.value);
        onChange(e, id)
    };

    render() {
        const { value, type}= this.props;
        return (
            <input type={type} value={value} onChange={this.onChange} />
        )
    }
}

export default Input;
