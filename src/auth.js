import axios from 'axios';

const login = async(login, password) => { 
    const {data} = await axios.post('https://rrr-back-5615f255bc1e.herokuapp.com/login', {
        user: login, password
    });
    console.log('data:', data);
    if(data) {
        const { access_token } = data;
        localStorage.setItem('access_token', access_token);
    }
    return data;
}

const isAuth = () => {
    const access_token = localStorage.getItem('access_token');
    return !!access_token;
}

const logout = () => {
    localStorage.removeItem('access_token');
    return true;
}

const get_access_token = () => {
    const result = localStorage.getItem('access_token');
    return result;
}

export { login, isAuth, logout, get_access_token }
