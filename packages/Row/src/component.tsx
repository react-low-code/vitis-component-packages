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

export default React.forwardRef(function (props: Props, ref: React.ForwardedRef<HTMLDivElement>) {
    return <div className={styles.row} style={props.style} ref={ref}>{props.children}</div>
})
