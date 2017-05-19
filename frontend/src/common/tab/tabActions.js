export function selectTab(tabId){
    console.log(tabId)
    return{
        type: 'SELECTED_TAB',
        payload: tabId
    }
}

export function showTabs(...tabIds){
    const tabsToShow = {}

    tabIds.forEach(e => tabsToShow[e] = true)

    return{
        type: 'TABS_SHOWED',
        payload: tabsToShow
    }
}