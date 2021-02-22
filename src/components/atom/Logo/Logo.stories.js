import Logo from "./Logo";

export default {
    component: Logo,
    title: "atom/Logo"
}

const Template = args => <Logo {...args}/>

export const MyLogo = Template.bind({});
MyLogo.args = {
    children: "sampleLogo"
}