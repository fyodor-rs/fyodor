export const state = () => {
    return {
        list: [],
        content:null
    }
}

export const mutations = {
    updateList(state, payload) {
        state.list = payload.data
    },
    updateContent(state, payload) {
        state.content = payload.data
    }
}

export const actions = {
    async getArticleList(store) {
        await this.$axios.$get('/post/list').then(res => {
            store.commit('updateList', res)
        })
    },
    async getArticleContent(store,payload) {
        await this.$axios.$get(`/post/${payload.id}`).then(res => {
            store.commit('updateContent', res)
        })
    }
}