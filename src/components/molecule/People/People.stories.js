import People from "./People";

export default {
    component: People,
    title: "molecule/People"
}

export const DefPeople = ()=> <People/>

export const ImagePeople = ()=> <People name="ankit" username="ankit.bhowmik" image={"http://localhost:6006/DSC_0011.JPG"}/>

export const LoadingPeople = ()=> <People loading={true}/>