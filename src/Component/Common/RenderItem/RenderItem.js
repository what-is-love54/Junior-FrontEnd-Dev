import React, { memo } from 'react'

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
	:first-child{
		border-radius:.25rem .25rem 0 0;
	}
	:last-child{
		border-radius:0 0 .25rem .25rem;
	}
  .name{
    color:white;
    font-weight:400;
    cursor: pointer;
  }
  :hover{
    background-color:#5A5A5A;
  }
`;

const Render = ({ items, onClick, ...props }) => {
    return (
        <Wrapper>
            <WrapperItems>
                {items.map((Item, index) => {
                    return <WrapperItem key={index} onClick={() => { onClick(Item.url) }}>
                        <div className="name">{Item.name}</div>
                    </WrapperItem>
                })}
            </WrapperItems>
        </Wrapper>
    )
}

export default memo(Render)