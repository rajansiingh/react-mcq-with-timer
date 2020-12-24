/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import { pathOr, toPairs } from 'ramda'

const getQueryStringAsObj = (query = window.location.search.substring(1)) => {
    let queryObj = {}
    if (query) {
        let keyValPair = query.split('&')
        for (let i = 0; i < keyValPair.length; i++) {
            let pair = keyValPair[i].split('=')
            queryObj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
        }
    }

    return queryObj
}

const getQueryParameter = (key, search = pathOr('', ['location', 'search'], window)) => {
    return decodeURIComponent(
        search.replace(new RegExp('^(?:.*[&\\?]' + encodeURIComponent(key).replace(/[.+*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1')
    )
}

const stringifyQueryParams = (obj) => {
    return (
        '?' +
        toPairs(obj)
            .map(([key, value]) => [key, typeof value === 'object' ? JSON.stringify(value) : value])
            .map(([key, value]) => key + '=' + encodeURIComponent(value))
            .join('&')
    )
}

const addParamsToUrl = (relativeUrl = '', queryParam) => {
    const kvp = relativeUrl.split('?')
    let existing = {}
    if (kvp.length > 1) {
        existing = getQueryStringAsObj(kvp[1])
    }
    existing = { ...existing, ...queryParam }
    return `${kvp[0]}${stringifyQueryParams(existing)}`
}

export default {
    addParamsToUrl,
    stringifyQueryParams,
    getQueryParameter,
    getQueryStringAsObj,
}
