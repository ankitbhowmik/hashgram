import People from "./People";

export default {
    component: People,
    title: "molecule/People"
}

export const DefPeople = ()=> <People/>

export const ImagePeople = ()=> <People button={{name:"follow"}} name="ankit" username="ankit.bhowmik" image={"/DSC_0011.JPG"}/>

export const LoadingPeople = ()=> <People loading={true}/>