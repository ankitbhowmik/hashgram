import Suggestion from "./Suggestion";

export default {
    component: Suggestion,
    title: "organism/suggestion"
}

const people = [
    {image: "http://localhost:6006/DSC_0011.JPG", name:"Ankit", username: "ankit.bhowmik"},
    {image: null, name:"Rohan", username:"rohan.das"},
    {image: "http://localhost:6006/DSC_0011.JPG", name:"lens", username:"lenscart"}
]

const Template = args => <Suggestion {...args}/>

export const DefSuggestion = Template.bind({});
DefSuggestion.args = {
    people: people
}