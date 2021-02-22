import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props=> props.col || "1fr 1fr"}
`

export default Grid;