import React from 'react';
import {observer} from "mobx-react";

@observer
class Owner extends React.Component {
    render() {
        return (
            <div>
                <input name='owner'
                    value={this.props.store.name}
                    onChange={e => this.props.store.name = e.target.value}/>
                    <small>(Change owner)</small>
            </div>
        );
    }
};

export default Owner;