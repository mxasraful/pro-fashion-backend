import { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";
import { Redirect, Route } from "react-router-dom";

firebase.initializeApp(firebaseConfig)

// Menage context
const AuthContext = createContext()
export const AuthContextProvider = (props) => {
    const auth = Auth()
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

// Privet route create and export
export const PrivateRoute = ({ children, ...rest }) => {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth?.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

const Auth = () => {

    const [user, setUser] = useState(null)
    const [error, setError] = useState(false)

    // Filter user data
    const filterUser = usr => {
        const { displayName, email, photoURL } = usr;
        return { name: displayName, email, photo: photoURL }
    }

    // Email create account auth method
    const emailSignUp = (name, email, pass) => {

    }

    // Email Sign in auth method
    const emailSignIn = () => {

    }

    // Google sign in auth method
    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(data => {
                setUser(filterUser(data))
                setError(false)
            })
            .catch(err => {
                setError(true)
                console.log(err.message)
            })
    }

    // LogOut
    const logOut = () => {
        firebase.auth().signOut()
            .then(res => {
                setUser(null)
                setError(false)
            })
            .catch(err => {
                setError(true)
            });
    }

    // Menage Users Account Data
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (usr) {
            if (usr) {
                const currentUser = filterUser(usr)
                setUser(currentUser)
            } else {

            }
        });
    }, [])


    return {
        user,
        error,
        emailSignUp,
        emailSignIn,
        googleSignIn,
        logOut
    }
}