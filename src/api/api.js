import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs, setDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove, deleteDoc, query, where, onSnapshot } from "firebase/firestore";
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
            messages: []
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
        // ///////////////
        // deleteDoc(doc(db, "users", 'login')) //!!!!! удаление

        // /////////////
        return updateDoc(frankDocRef, {
            //"favorites.color": "Red"  !!!!! обращение ко вложеным полям
            userInfo: data
        });
        
    },
    // changeUserData(data) {
    //     return setDoc(doc(db, "users", "qwerty"), data);
    // },
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
                if(doc.data().userInfo.name.includes(searchUser)) {
                    searchResult.push({...doc.data(), id: doc.id})
                }
                });
                return searchResult
    }
}

export const messageAPI = {

    // sendMessage(message, addressee, sender) {
    //     const messagesRef = doc(db, "users", addressee)  
    //     return updateDoc(messagesRef, {
    //         'messages.test': arrayUnion({message: message.message, name: message.fullName})
    //     });
    // }
    sendMessage(message, addressee, sender) {
        const userRef1 = doc(db, `${addressee}Messages`, sender)
        setDoc(userRef1, { messages: arrayUnion({message: message.message, fullName: message.fullName, time: message.time, login: sender}) }, { merge: true })
        // crap code
        const userRef2 = doc(db, `${sender}Messages`, addressee)
        setDoc(userRef2, { messages: arrayUnion({message: message.message, fullName: message.fullName, time: message.time, login: sender}) }, { merge: true })

    },
    test() {
        //const cityRef = doc(db, 'cities', 'user2')
        //setDoc(cityRef, { messages: arrayUnion({mes: 555}) }, { merge: true })
        //deleteDoc(doc(db, "test3Messages", 'slava'))
    }
}