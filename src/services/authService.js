import axios from 'axios';
const url = process.env.INSTA_BACKEND
export async function loginUser(data) {
    try {
        const response = await axios.post(`${url}/user/login`, data);
        return response.data;
    } catch (error) {
       return error
    }
}

export const getimage = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/user/me");
        return response.data;
    } catch (error) {
        return error;
    }
};


export const getLoginStatus = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/user/loggedin");
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getUserProfile = async  () =>{
    try {
        const response = await axios.get("http://localhost:5000/api/user/getalluser");
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getItemWithExpiry = (key)=> {
    const itemString = localStorage.getItem(key);
    if (!itemString) {
        return null;
    }
    const item = JSON.parse(itemString);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}

export async function searchUser(userName) {
    try {
        const response = await axios.post("http://localhost:5000/api/user/searchuser", {userName:userName});
            return response.data;
    } catch (error) {
        return error
    }
}

