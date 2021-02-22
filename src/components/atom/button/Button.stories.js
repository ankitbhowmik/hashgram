import Button from "./Button";
import theme from "../../../theme/theme";

export default {
    component: Button,
    title: "atom/Form/Button"
}

const Template = (args)=> <Button { ...args }/>

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    children : "default button",
    onClick : ()=>alert("done"),
    color : "primary"
}

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    children: "secondayr button",
    onClick:()=> alert("secondary button clicked"),
    color:"secondary"
}

export const LargeButton = Template.bind({});
LargeButton.args = {
    children: "largeButton",
    width: "100%"
}