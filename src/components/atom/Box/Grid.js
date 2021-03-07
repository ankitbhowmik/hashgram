import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    align-items:${props=> props.alignItems || "flex-start"};
    justify-content: ${props=> props.justifyContent || "flex-start"};
    grid-template-columns: ${props=> props.col || "1fr 1fr"};
    margin-top:${props=> props.mt || "0"}
`

export default Grid;