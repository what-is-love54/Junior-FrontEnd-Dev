const { default: styled } = require("styled-components");

export const Wrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction:column;
  flex-wrap: wrap;
  border-radius: 0.25rem;
`;

export const WrapperItems = styled.ul`
    width:100%;
    display:flex;
    justify-content: center;
    flex-direction:column;
		flex-wrap: wrap;
		box-sizing:border-box;
`;

export const WrapperItem = styled.li`
    width: 100%;
    text-align: start;
    list-style-type:none;
    cursor: pointer;
    background-color:#303030;
    display: block;
    padding: 3.5% 6.5%;
    background-color: #303030;
    border: 1px solid #444;
    transition:.2s;
    border-radius:.25rem;
    .name{
        color:white;
        font-weight:400;
        cursor: pointer;
    }
    :hover{
        background-color:#5A5A5A;
    }
`;