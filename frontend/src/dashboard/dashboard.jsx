import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadSummary } from './dashboardAction'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

class Dashboard extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.loadSummary()
    }

    render(){
        const { credit, debit } = this.props.summary
        return(
            <div>
                <ContentHeader title="Dashboard" small="versão 1.0"/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' value={`R$ ${credit}`}
                            text='Total de Créditos' icon='bank' />
                        <ValueBox cols='12 4' color='red' value={`R$ ${debit}`} 
                            text='Total de Débitos' icon='credit-card' />
                        <ValueBox cols='12 4' color='blue' value={`R$ ${credit - debit}`} 
                            text='Valor Consolidado' icon='money' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})

export default connect(mapStateToProps, { loadSummary })(Dashboard)