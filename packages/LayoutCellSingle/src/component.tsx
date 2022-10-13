import React from 'react';

interface Props {
    /**
     * 组件样式
     */
    style?: React.CSSProperties;
    /**
     * children
     */
    children: React.ReactNode
}

export default function (props: Props) {
    return <div style={props.style}>{props.children}</div>
}
