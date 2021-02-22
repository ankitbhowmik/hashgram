import Avatar from "./Avatar";

export default {
    component: Avatar,
    title: "atom/Avatar",
}

const Template = args => <Avatar {...args}/>

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
    size: "small",
    image: "http://localhost:6006/DSC_0011.JPG"
}

export const MediumAvatar = Template.bind({});
MediumAvatar.args = {
    size: "medium",
    image: "http://localhost:6006/DSC_0011.JPG"
}

export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
    size: "large",
    image: "http://localhost:6006/DSC_0011.JPG"
}
