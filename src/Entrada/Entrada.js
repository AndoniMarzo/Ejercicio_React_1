import React from 'react';

class Entrada extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input className="Input" type="text" onChange={this.props.cambiando} />
            </div >
        )
    }
};

export default Entrada;