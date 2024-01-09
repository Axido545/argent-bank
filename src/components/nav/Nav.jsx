import "./nav.css"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../../redux/authSlice";
import { useGetUserProfileQuery } from "../../redux/authApiSlice";
import { useEffect } from "react";
import { setProfile, setNoProfil } from "../../redux/userSlice";

export default function Nav() {
    const token = useSelector(selectCurrentToken)
    const dispatch = useDispatch()
    useEffect(() => {
        if (token) {
            fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("erreur lors de la récupération du profil");
                    }
                    return response.json();
                })
                .then((userData) => {
                    // console.log("userProfileData du fetchUserProfile:", userData);
                    dispatch(setProfile({ firstName: userData.body.firstName }));
                    console.log(setProfile({ firstName: userData.body.firstName }))
                })
                .catch((error) => {
                    //console.error("Erreur dans fetch user profile:", error);
                    dispatch(setNoProfil());
                    console.log(setNoProfil())
                });
        }
    }, [token, dispatch]);
    const userProfile = useSelector((state) => state.user);
    console.log(userProfile)
    const userName = userProfile && userProfile.firstName ? userProfile.firstName + "  " : "";
    console.log(userName + " nom de l'utilisateur");
    const icon = <i className="fa fa-right-from-bracket"></i>;
    return (<Link to={token ? "/" : "/login"}
        className="header-nav">
        <i className="fa fa-user-circle"></i>{userName ? userName : ""}
        {token ? (<span>{icon} Sign out </span>) : " Sign in "}
    </Link>)
}