export const state = () => {
    return {
        list: []
    }
}

export const mutations = {
    updateList(state, payload) {
        state.list = payload.data
    }
}

export const actions = {
    async getArticleList(store) {
        await this.$axios.$get('/post/list').then(res => {
            store.commit('updateList', res)
        })
    }
}