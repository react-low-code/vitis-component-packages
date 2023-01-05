import React from 'react';
import styles from './index.scss'

interface Props {
    /**
     * 组件样式
     */
     style?: React.CSSProperties;
     /**
      * 显示的文本
      */
     children: React.ReactNode
}

export default function (props: Props) {
    return <div className={styles.column} style={props.style}>{props.children}</div>
}
