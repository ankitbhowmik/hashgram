import Box from "./Box";

export default {
    component: Box,
    title: "atom/Box/Box"
}

const Template = args => <Box {...args} />

export const DefultBox = Template.bind({});
DefultBox.args = {
    children: "this is default Box"
}