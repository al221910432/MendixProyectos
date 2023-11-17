import AsyncStorage from '@react-native-community/async-storage';

// This file was generated by Mendix Studio Pro.
/**
 * Retrieve a local stored string value identified by a unique key. This could be set via the SetStorageItemString JavaScript action.
 * @param {string} key - This field is required.
 * @returns {Promise.<string>}
 */
async function GetStorageItemString(key) {
    // BEGIN USER CODE
    if (!key) {
        return Promise.reject(new Error("Input parameter 'Key' is required"));
    }
    return getItem(key).then(result => {
        if (result === null) {
            return Promise.reject(new Error(`Storage item '${key}' does not exist`));
        }
        return result;
    });
    async function getItem(key) {
        if (navigator && navigator.product === "ReactNative") {
            return AsyncStorage.getItem(key);
        }
        if (window) {
            const value = window.localStorage.getItem(key);
            return Promise.resolve(value);
        }
        return Promise.reject(new Error("No storage API available"));
    }
    // END USER CODE
}

export { GetStorageItemString };