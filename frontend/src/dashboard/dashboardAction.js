import axios from 'axios'
import { URL } from '../main/config'

const _URL = `${URL}/billingCycles/summary`

export const loadSummary = () => {
    const request = axios.get(_URL)

    return {
        type: 'LOAD_SUMMARY',
        payload: request
    }
}