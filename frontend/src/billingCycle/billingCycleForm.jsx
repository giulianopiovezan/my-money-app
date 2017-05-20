import React, { Component } from 'react'

import { connect } from 'react-redux'

import { reduxForm, Field, formValueSelector } from 'redux-form'

import labelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

import { init } from './billingCycleActions'

class BillingCycleForm extends Component{

    calculateSummary(){
        const sum = (t, v) => t + v

        return{
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebits: this.props.debits.map(d => +d.value || 0).reduce(sum)
        }
    }

    render(){

        const { handleSubmit, readOnly, submitClass, submitLabel, credits, debits } = this.props
        const { sumOfCredits, sumOfDebits } = this.calculateSummary()

        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={labelAndInput} readOnly={readOnly}
                        cols="12 4" label="Nome" placeholder="Informe o nome" />
                    <Field name="month" component={labelAndInput} readOnly={readOnly}
                        cols="12 4" label="Mês" placeholder="Informe o mês" />
                    <Field name="year" component={labelAndInput} readOnly={readOnly}
                        cols="12 4" label="Ano" placeholder="Informe o ano" />

                        <Summary credit={sumOfCredits} debit={sumOfDebits} />

                        <ItemList cols="12 6" readOnly={readOnly} list={credits} legend="Créditos" field="credits" />
                        <ItemList cols="12 6" readOnly={readOnly} list={debits} legend="Débitos" field="debits" showStatus="true" />
                </div>

                <div className="box-footer">
                    <button type="submit" className={`btn btn-${submitClass}`}>{submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init} >Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits'), debits: selector(state, 'debits')})
export default connect (mapStateToProps, { init })(BillingCycleForm)