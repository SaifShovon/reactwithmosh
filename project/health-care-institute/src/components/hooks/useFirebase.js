import { useState, useEffect } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsigEmailAndPass = (email, password) => {
        console.log('fuction call');
        console.log(email);
        console.log(password);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const signUpUsigEmailAndPass = (email, password) => {
        console.log('fuction call');
        console.log(email);
        console.log(password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const signInUsigGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const signInUsigGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logout = () => {
        signOut(auth)
            .then(resut => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("Inside State Change", user);
                setUser(user);
            }
        })
    }, []);
    return {
        user,
        error,
        signInUsigEmailAndPass,
        signUpUsigEmailAndPass,
        signInUsigGoogle,
        logout,
        signInUsigGithub
    }
}

export default useFirebase;