import Main from "./Main";

export default {
    component: Main,
    title: "pages/Main"
}

const people = [
    {image: "http://localhost:6006/DSC_0011.JPG", name:"Ankit", username: "ankit.bhowmik"},
    {image: null, name:"Rohan", username:"rohan.das"},
    {image: "http://localhost:6006/DSC_0011.JPG", name:"lens", username:"lenscart"}
];

const posts = [
    {image:"http://localhost:6006/post.png", name:"Ankit", username: "ankit.bhowmik", caption:"feeling owesome"},
    {image:"http://localhost:6006/DSC_0011.JPG", name:"Ankit", username: "ankit.bhowmik"}
]

export const DefMain = ()=> <Main people={people} posts={posts}/>