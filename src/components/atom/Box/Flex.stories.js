import FlexBox from "./Flex";
import { DefultBox } from "./Box.stories";

export default {
    component: FlexBox,
    title: "atom/Box/FlexBox",
}

export const DefaultFlexBox = () => <FlexBox style={{justifyContent:"space-around"}}>
    <div>first </div>
    <div>second</div>
</FlexBox>

