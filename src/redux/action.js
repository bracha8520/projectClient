


export function saveUserInState(user) {
    return { type: 'LOGIN_USER', payLoad: user }
}

export function pictureView(pic) {
    return { type: 'PICTURE_VIEW', payLoad: pic }
}