import produce from 'immer';

const initialState = {
    url: '',
    date: ''
};


export default produce((state, action) => {
    switch (action.type) {
        case 'PICTURE_VIEW':
            {
                state.url = action.payLoad.pic.url;
                state.date = action.payLoad.pic.date
            }

    }
}, initialState)
