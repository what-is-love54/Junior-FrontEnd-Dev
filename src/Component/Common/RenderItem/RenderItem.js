import React, { memo } from 'react'
import { Wrapper, WrapperItems, WrapperItem } from '../Styled/StyleForItem';

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