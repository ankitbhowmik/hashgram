import InlineBox from "./InlineBox";
import { DefultBox } from "./Box.stories";

export default{
    component: InlineBox,
    title: "atom/Box/InlineBox"
}

const Template = args => <InlineBox {...args}/>

export const DefaultInline = Template.bind({});
DefaultInline.args = {
    children:"this is inline box"
}