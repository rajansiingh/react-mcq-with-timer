/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import { identity, ifElse, is, toString} from 'ramda'

const safeStringify = ifElse(is(Object), toString, identity)

const safeParse = (stringObj) => {
    try {
        return JSON.parse(stringObj)
    } catch (e) {
        return {}
    }
}
const parseRes = (response) => {
    try{
        return response.json();
    }catch (e){
        return {};
    }
};

export default {
    safeStringify,
    safeParse,
    parseRes,
}
