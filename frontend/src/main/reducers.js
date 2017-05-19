import { combineReducers } from 'redux'

import dashReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billyngCycleReducer'

const rootReducer = combineReducers({
    dashboard: dashReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer
})

export default rootReducer