interface pageState {
    homeLayoutMounted: boolean
}
export const state = (): pageState => ({
    homeLayoutMounted: false
})

export const mutations = {
    setHomeLayoutMounted(state: any) {
        state.homeLayoutMounted = true
    }
}