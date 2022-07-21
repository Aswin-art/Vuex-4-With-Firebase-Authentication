import { createStore } from "vuex";

// firebase imports
import {auth} from '../firebase/config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'


const store = createStore({
    // store / data
    state: {
        // points: 0
        user: null,
        authIsReady: false
    },

    // Update
    mutations: {
        // state: state value
        // payload: determine the new value
        // updatePoints(state, payload){
        //     state.points += payload
        // }

        setUser(state, payload){
            state.user = payload
            console.log('user state changed: ', state.user)
        },

        setAuthIsReady(state, payload){
            state.authIsReady = payload
        }
    },

    // for asynchronous request
    actions: {
        // signup(context, {email, password}){
        //     // async code
        //     setTimeout(() => {
        //         context.commit('setUser', {email, password})
        //     }, 2000)
        // }
        async signup(context, {email, password}){
            // async code
            const res = await createUserWithEmailAndPassword(auth, email, password)

            if(res){
                context.commit('setUser', res.user)
            }else{
                throw new Error('could not complete signup')
            }
        },

        async signin(context, {email, password}){
            const res = await signInWithEmailAndPassword(auth, email, password)

            if(res){
                context.commit('setUser', res.user)
            }else{
                throw new Error('could not complete login')
            }
        },

        async logout(context){
            signOut(auth)
            context.commit('setUser', null)
        }
    },
})

const unsub = onAuthStateChanged(auth, (user) => {
    store.commit('setAuthIsReady', true)
    store.commit('setUser', user)
    unsub()
})

// Export store
export default store