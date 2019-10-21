import defaultPosts from '@/config/defaultPosts.js'
export const state = () => {
    return {
        list: {
            fetching:false,
            data:[]
        },
        content:{
            fetching:false,
            data:null
        },
        isExtendPost:false
    }
}

export const mutations = {
    changeExendPost(state, payload){
        state.isExtendPost=payload
    },
    updateList(state, payload) {
        state.list.data = payload.length?payload:defaultPosts
    },
    updateContent(state, payload) {
        state.content.data = payload
    },
    updateListFetch(state, payload) {
        state.list.fetching = payload
    },
    updateContentFetch(state, payload) {
        state.content.fetching = payload
    }
}

export const actions = {
     getArticleList(store,payload) {
        store.commit('updateListFetch',true)
        store.commit('updateList',[])
        const request=payload?this.$axios.$get('/post/list',{params:payload}):this.$axios.$get('/post/list')
       return request.then(res => {
            store.commit('updateList', res.data)
            store.commit('updateListFetch', false)
        })
    },
     getArticleContent(store,payload) {
        store.commit('updateContentFetch',true)
        return this.$axios.$get(`/post/${payload.id}`).then(res => {
            store.commit('updateContent', res.data)
            store.commit('updateContentFetch',false)
        })
    }
}