import TextInput from "./TextInput";

export default {
    component:TextInput,
    title: "atom/form/TextInput",
}

const Template = (args) => <TextInput {...args}/>

export const SimpleInput = Template.bind({});
SimpleInput.args = {
    placeholder: "this is simple input"
}
