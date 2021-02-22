import styled from 'styled-components';

const Button = styled.button`
    padding: 5px 20px;
    background-color: ${props=> props.color ? props.theme.color[props.color] : props.theme.color.primary};
    outline: none;
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 0.9em;
    width: ${props=> props.width || "auto"};
    opacity: ${props=> props.disabled ? "0.3" : 1};
    &:hover{
        cursor:pointer;
    }
`;

export default Button;
