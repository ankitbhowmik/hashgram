import Post from "./Post";

export default {
    component: Post,
    title: "molecule/Home/Post"
}

const Template = args => <Post {...args}/>

export const LoadingPost = Template.bind({});
LoadingPost.args = {
    loading: true,
}

export const SomePost = Template.bind({});
SomePost.args = {
    loading: false,
    image: "http://localhost:6006/post.png"
}
