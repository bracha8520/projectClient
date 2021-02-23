import React, { useRef } from 'react'
import { saveUserInState, pictureView } from './redux/action'
import { loginUser } from './service'
import { connect } from 'react-redux'
import './login.css'

function mapStateToProps(state) {
    return {
        user: state.userRducer.user
    }
}

export default connect(mapStateToProps)(function Login(props) {

    const { dispatch } = props
    const nameRef = useRef('');
    const passworsRef = useRef('');
    let picRef = useRef('');
    let user = { name: '', password: '' }


    function pic() {
        dispatch(pictureView(picRef))
    }

    function login() {
        ////////////***************//////////////////
        if (nameRef.current.value != '' && passworsRef.current.value != '') {
            user.name = nameRef.current.value;
            user.password = passworsRef.current.value;
            dispatch(saveUserInState(user));

            let pic = loginUser(user)
            picRef = pic;


        }
    }
    return (
        <>
            <div className='g'>
                <label className='name'>name:<br />
                    <input ref={nameRef} type='string'></input>
                </label>

                <label className='password'>password:<br />
                    <input ref={passworsRef} type='password'></input>
                </label>
                <button className='b ok' onClick={login}>ok</button>

            </div>
            <div className='circle c1'></div>
            <div className='circle c2'></div>
            <div className='circle c3'></div>
            <div className='circle c4'></div>
            <div className='circle c5'></div>
            <div className='circle c6'></div>

        </>
    )
})