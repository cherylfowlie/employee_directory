import axios from "axios";

//API filter results for AUS, 100 people
const BASEURL = "https://randomuser.me/api/?results=100&nat=AU";

export default {
    search: function () {
        return axios.get(BASEURL);
    }
};