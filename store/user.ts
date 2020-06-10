interface UserState {
    username: string
}
export const state = (): UserState => ({
    username:""
})

export const mutations = {
    setUsername(state: any, username: string) {
        state.username = username
    }
}