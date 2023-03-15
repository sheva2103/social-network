import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";


export const authAPI = {
    signUp(email, password) {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password)
            
    },

    signIn(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }
}