import React from 'react'
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const WithAuthRedirect = (Component) => {
    
    const redirectComponent = (props) => {
        console.log(props.isAuth)
        if(!props.isAuth) return <Navigate to='/friends'/>
        return <Component {...props}/>
    }
    return connect(mapStateToPropsForRedirect, null)(redirectComponent)
}
