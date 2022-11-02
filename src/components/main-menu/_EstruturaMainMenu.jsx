import React, { Component } from 'react';
import _TopMenu from './_TopMenu';

class EstruturaMainMenu extends Component {

    render() {

        return (
            <>
                <div id='header'>
                    <_TopMenu></_TopMenu>
                </div>
                {this.props.children}
            </>
        )
    }
}

export default EstruturaMainMenu;