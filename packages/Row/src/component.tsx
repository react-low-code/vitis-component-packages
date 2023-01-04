import React from 'react';
import styles from './index.scss'

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
    return <div className={styles.row} style={props.style}>{props.children}</div>
}
