/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
const configManager = () => {
    let mainData = {
        'auth-token': '19c4ff12-e027-4320-b844-2cda768714e8',
    };
    return {
        get() {
            return mainData
        },
        set(data) {
            mainData = {
                ...mainData,
                ...data,
            }
        },
    }
}
export default configManager();
