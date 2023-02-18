import axios from 'axios'
import Cookie from 'js-cookie'

const API = axios.create({ baseURL: 'http://localhost:5000' })
API.interceptors.request.use((req) => {
    const profile = JSON.parse(Cookie.get('profile'))                           // profile cookie get saved in browser during login
    if (profile) {
        const { tokens } = profile

        const authToken = tokens.filter(token => token.name == 'auth_token')[0]  // --> {name:String, token:String, _id:String}
        req.headers.auth_token = authToken.token

    }
    return req;
})


export const getPosts = () => API.post('/posts/get')
export const createPost = (postData) => API.post('/post/create', { postData })
export const updatePost = (id, postData) => API.post(`/post/update/${id}`, postData)
export const deletePost = (id) => API.put(`/post/delete/${id}`)         