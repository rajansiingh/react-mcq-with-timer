/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import { compose, find, prop, propEq, values } from 'ramda'
import routes from './routeConfig'

export const getPathByKey = (key) => routes[key].path
export const getPathByName = (name) => {
    const findPathByName = compose(prop('path'), find(propEq('name', name)), values)
    return findPathByName(routes)
}
export const getRouteObjByName = (name) => {
    const findPathByName = compose(find(propEq('name', name)), values)
    return findPathByName(routes)
}
