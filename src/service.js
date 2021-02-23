import axios from 'axios';

export async function loginUser(user) {
    debugger;
    await axios.post('http://localhost:4000/login', user).then(
        res => {
            console.log('login work ' + JSON.stringify(res));
            return res.data
        },
        err => {
            console.log('error login: ' + err);
        }
    )

}