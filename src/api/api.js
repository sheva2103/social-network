import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, setDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove, query, where } from "firebase/firestore";
import { db } from "../firebase";


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

export const profileAPI = {

    createUserDB (login, email) {
        const user = {
            userInfo: {
                email: email,
                name: '',
                city: '',
                DateOfBirth: '',
                linkUserPhoto: ''
            },
            posts: [],
            friends: [],
            music: [],
            photo: [],
            messages: [],
            dialogs: []
        }
        return setDoc(doc(db, "users", login), user);
    },
    async getUserData(login) {
        const docRef = doc(db, "users", login);
        const docSnap = await getDoc(docRef);
        //console.log("Document data:", docSnap.data());
        return docSnap.data()
    },
    changeUserInfo(login, data) {
        const frankDocRef = doc(db, "users", login)
        return updateDoc(frankDocRef, {
            //"favorites.color": "Red"  !!!!! обращение ко вложеным полям
            userInfo: data
        });
        
    },
    addNewPost(newPost, login) {
        const loginRef = doc(db, "users", login)
        return updateDoc(loginRef, {
            posts: arrayUnion(newPost)
        });
    },
    addFriend(friend, login) {
        const loginRef = doc(db, "users", login)
        return updateDoc(loginRef, {
            friends: arrayUnion(friend)
        });
    },
    deleteFriend(friend, login) {
        const loginRef = doc(db, "users", login)
        return updateDoc(loginRef, {
            friends: arrayRemove(friend)
        });
    }
}

export const searchAPI = {

    async searchUser(searchUser) {
        const querySnapshot = await getDocs(collection(db, "users"));
            let searchResult = []
                querySnapshot.forEach((doc) => {
                //console.log(doc.id, " => ", doc.data());
                if(doc.data().userInfo.name.toLowerCase().includes(searchUser.toLowerCase())) {
                    searchResult.push({...doc.data(), id: doc.id})
                }
                });
                return searchResult
    }
}

export const messageAPI = {

    sendMessage(message, addressee, sender, fullNameAddressee, fromProfile) {
        
        
            if(true) {
                const userRef1 = doc(db, `${addressee}Messages`, sender)
                setDoc(userRef1, { dialogs: arrayUnion({message: message.message, 
                    fullName: message.fullName, 
                    time: message.time, login: sender}),
                    fullName: message.fullName,
                    login: sender
                }, { merge: true })
            }
            if(fromProfile) {
                const profileRef1 = doc(db, 'users', addressee)
                updateDoc(profileRef1, {dialogs: arrayUnion({fullNameAddressee: message.fullName, login: sender})})
            }
            
            
        // crap code
        
            if(true) {
                const userRef2 = doc(db, `${sender}Messages`, addressee)
                setDoc(userRef2, { dialogs: arrayUnion({message: message.message, 
                    fullName: message.fullName, 
                    time: message.time, login: sender}), 
                    fullName: message.fullName,
                    login: addressee}, { merge: true })
            }
            if(fromProfile) {
                const profileRef2 = doc(db, 'users', sender)
                updateDoc(profileRef2, {dialogs: arrayUnion({fullNameAddressee, login: addressee})})
            }
            

    },
    test() {
        //deleteDoc(doc(db, "sanyaMessages", 'test3'))
    },
    async getMessage(currentUser, addressee) {
        const w = query(collection(db, `${currentUser}Messages`), where("login", "==", addressee));
            const querySnapshot = await getDocs(w);
                querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                });
    }
}

export const photoAPI = {

    addPhoto(photo, login) {
        const loginRef = doc(db, "users", login)
        updateDoc(loginRef, {
            photo: arrayUnion(photo)})
        
    }
}