/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
const currentEnv = {
    production: {
        REACT_APP_API_URL: `https://some_test.com`
    },
}

export default currentEnv[process.env.NODE_ENV];
