import styled from 'styled-components';

const Box = styled.div`
    padding: 5px;
    border: 0.5px solid gray;
    background-color: white;
    border-radius: 1px;
    text-align: ${props => props.textAlign || "center" }
`;

export default Box;