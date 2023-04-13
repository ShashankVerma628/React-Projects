import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID boveaITL40H_eIEQIAFgpKUq0GDOqoLFriUo8xv6KKk'
    }
});