import Profile from "./Profile";

export default {
    component: Profile,
    title: "template/Profile"
}

const imgPosts = [
    {image: "http://localhost:6006/post.png", alt:"ankit"},
    {image: "http://localhost:6006/post.png", alt:"ankit"},
    {image: "http://localhost:6006/post.png", alt:"ankit"},
    {image: "http://localhost:6006/post.png", alt:"ankit"},
    {image: "http://localhost:6006/post.png", alt:"ankit"},
    {image: "http://localhost:6006/post.png", alt:"ankit"},
]

export const DefProfile = ()=> <Profile imgPosts={imgPosts}/>