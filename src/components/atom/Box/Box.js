import styled from 'styled-components';

const Box = styled.div`
    padding: ${props => props.padding || 5};
    border: 0.5px solid lightgray;
    background-color: white;
    border-radius: 1px;
    text-align: ${props => props.textAlign || "center" };
    width: ${props=> props.width || "auto"};
`;

export default Box;