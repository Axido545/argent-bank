import "./nav.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { profileAsync } from "../../redux/userSlice";

export default function Nav() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)
    const firstName = useSelector(state => state.user.firstName)

    useEffect(() => {
        if (token) {
            // dispatch(profileAsync({ token }))
        }
    }, [token])

    const handleLogout = () => {
    }
    const icon = <i className="fa fa-right-from-bracket"></i>;
    return icon
}