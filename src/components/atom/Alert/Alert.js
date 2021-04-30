import styled, {css} from 'styled-components';

const Alert = styled.div`
	padding: 20px;
	${props=> {
		switch(props.variant){
			case 'danger':
				return css`
					color: #721c24;
					background-color: #f8d7da;
					border-color: #f5c6cb;
				`
			case 'success':
				return css`
					color: #155724;
					background-color: #d4edda;
					border-color: #c3e6cb;
				`
			case 'info':
				return css`
					color: #004085;
					background-color: #cce5ff;
					border-color: #b8daff;
				`
			default :
				return css`
					color: #383d41;
					background-color: #e2e3e5;
					border-color: #d6d8db;
				`
		}
	}}
`

export default Alert;