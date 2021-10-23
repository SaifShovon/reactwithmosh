import { useState, useEffect } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsigEmailAndPass = (email, password) => {
        setIsLoading(true);
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
            })
            .finally(() => setIsLoading(false));
    }
    const signUpUsigEmailAndPass = (email, password, name) => {
        setIsLoading(true);
        console.log('fuction call');
        console.log(email);
        console.log(password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                verifyEmail();
                setUserName(name);
                console.log(user)
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const signInUsigGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result);
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
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, []);
    return {
        user,
        error,
        signInUsigEmailAndPass,
        signUpUsigEmailAndPass,
        signInUsigGoogle,
        logout,
        handleResetPassword,
        isLoading,
        setUserName
    }
}

export default useFirebase;