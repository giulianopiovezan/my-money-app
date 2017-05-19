import React, { Component } from 'react'

import { connect } from 'react-redux'

import { selectTab } from './tabActions'

import If from '../operator/if'

class TabContent extends Component{

    render(){
        const selected = this.props.id === this.props.tab.selected
        const visible = this.props.tab.visible[this.props.id];
        return(
            <If visible={visible}>
                <div className={`tab-pane ${selected ? 'active' : ''}`} id={this.props.id}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}

export const mapStateToProps = state => ({tab: state.tab})

export default connect(mapStateToProps, { selectTab })(TabContent)