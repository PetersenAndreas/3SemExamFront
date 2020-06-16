
function URLS(){

    function backendURL() {
        const URL = "https://andreas-cph.com/Eksamen3SemBack";
        return URL;
    }

    function externalApi() {
        const URL = "https://andreas-cph.com/Eksamen3SemBack/api/info/external";
        return URL;
    }

    function yogaApi() {
        const URL = "https://andreas-cph.com/Eksamen3SemBack/api/course";
        return URL;
    }

    return {
        backendURL,
        externalApi,
        yogaApi
    }

}

const settingUrl = URLS();

export default settingUrl;