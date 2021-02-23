import produce from 'immer';

const initialState = {
    name: '',
    password: ''
};


export default produce((state, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            {
                state.name = action.payLoad.name;
                state.password = action.payLoad.password
            }

    }
}, initialState)
