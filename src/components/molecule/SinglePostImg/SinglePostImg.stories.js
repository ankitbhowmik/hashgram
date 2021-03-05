import SinglePostImg from "./SinglePostImg";

export default {
    component: SinglePostImg,
    title: "molecule/SinglePostImg"
}

const Template = (args)=> <SinglePostImg {...args}/>

export const DefSinglePost = Template.bind({});
DefSinglePost.args = {
    image: "http://localhost:6006/post.png",
    alt: "ankit"
}