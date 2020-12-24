/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import u from "../utils";
import cm from "../config/configManager";
import * as R from "ramda";

/**
 *
 * @param headers {Object}
 * @param tokens
 */
const getHeaders = (headers = {}, tokens = []) => {
    if (!headers["Content-type"]) {
        headers["Content-type"] = "application/json";
    }

    if (tokens.length) {
        const {sso_token} = cm.get();
        headers = {
            ...headers,
            ...(tokens.includes("sso") && sso_token ? {sso_token} : {})
        };
    }
    return headers;
};
/**
 *
 * @param url {String}
 * @param opts {Object}
 * @returns {{opts: Object, url: String}}
 */
const validateRequest = (url, opts) => {
    let options = R.clone(opts);
    const headers = getHeaders(options.headers, options.tokens);
    options.body = u.str.safeStringify(options.body);
    options.timeout = 5000;
    options = {...options, headers};
    return {
        url: options.url,
        opts: options
    };
};
/**
 *
 * @param response {Object}
 * @param cb
 * @returns {Object | Error}
 */
const validateResponse = async (response, cb = undefined, p) => {
    if (response.status >= 200 && response.status < 305) {
        cb && cb(response.status);
        return response;
    }

    const error = new Error(response.statusText);
    error.response = {...response, status: response.status};
    throw error;
};
/**
 *
 * @param url {String}
 * @param opts {Object}
 * @param cb {Function}
 * @param errorCb {Function}
 * @returns {Promise<{}>}
 */
export const httpFetch = async (url, opts = {}, cb, errorCb) => {
    if (opts && opts.stub) {
        return Promise.resolve(opts.stubInfo);
    }

    let response = {},
        statusCode = undefined;
    const request = validateRequest(url, opts);
    try {
        response = await fetch(request.url, request.opts)
            .then((response) => validateResponse(response, (code) => {
                    statusCode = code;
                })
            )
            .then((r) => r.json());
        response = {...response, status: statusCode};
        cb && cb(response);
    } catch (e) {
        errorCb && errorCb(e);
        throw e;
    }
    return response;
};

export default {
    httpFetch
};
