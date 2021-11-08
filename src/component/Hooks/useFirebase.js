import { getAuth, signOut, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useState, useEffect } from 'react';
import InitializeFirebase from '../Firebase/Firebase.Init'


// Initialize Firebase app
InitializeFirebase()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    // Auth call
    const auth = getAuth();

    // Google sing In 
    const googleProvider = new GoogleAuthProvider();
    const GoogleSinInUser = (location, history) => {
        // set is loading
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // location state
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = result.user;
                //  set user
                setUser(user);
            }).catch((error) => {
                // set Error
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    // Sin Out User
    const LogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
            setError(error.message)
        }).finally(() => setIsLoading(false));
    }


    return {
        user,
        error,
        isLoading,
        GoogleSinInUser,
        LogOut
    }
};

export default useFirebase;