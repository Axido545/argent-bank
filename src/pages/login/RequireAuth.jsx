import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../../redux/authSlice"

export default function RequireAuth() {
    const token = useSelector(selectCurrentToken)
    const location = useLocation()
    return (
        token
            ? < Outlet />
            : <Navigate to="/dashboard" state={{ from: location }} replace />
    )
}