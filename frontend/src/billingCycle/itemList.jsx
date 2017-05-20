import React, { Component } from 'react'

import { Field, arrayInsert, arrayRemove } from 'redux-form'

import { connect } from 'react-redux'

import Grid from '../common/layout/grid'

import Input from '../common/form/input'

import If from '../common/operator/if'

class ItemList extends Component{

    add(index, item = {}){
        if(!this.props.readOnly)
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
    }

    remove(index){
        if(!this.props.readOnly)
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
    }

    renderRows(){
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].name`} component={Input} readOnly={this.props.readOnly} placeholder='Informe o nome' /></td>
                <td><Field name={`${this.props.field}[${index}].value`} component={Input} readOnly={this.props.readOnly} placeholder='Informe o valor' /></td>
                <If visible={this.props.showStatus}>
                    <td>
                        <Field name={`${this.props.field}[${index}].status`} component={Input} readOnly={this.props.readOnly} placeholder='Informe o status' />
                    </td>
                </If>
                <td>
                    <button type='button' className="btn btn-success" onClick={() => this.add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type='button' className="btn btn-warning" onClick={() => this.add(index + 1, item)}>
                        <i className="fa fa-copy"></i>
                    </button>
                    <button type='button' className="btn btn-danger" onClick={() => this.remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If visible={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default connect(null, { arrayInsert, arrayRemove })(ItemList)