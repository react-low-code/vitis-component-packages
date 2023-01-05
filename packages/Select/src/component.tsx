import React, { useEffect, useState } from 'react';
import styles from './index.scss'

interface DataSource {
    url: string;
    params?: object;
    method: string;
    requestHandler: () => any
    responseHandler: () => any
    errorHandler?: () =>void
}

interface Props {
    /**
     * 值
     */
     value?: string;
     /**
      * 修改值
      */
     onChange?: (val: string) => void;
     /**
      * label
      */
     label?: React.ReactNode
     /**
      * size
      */
     size?: 's' | 'm' | 'l'
     /**
      * 选项
      */
     options: {value: string; label: string}[] | DataSource
}

export default React.forwardRef(function Select(props: Props, ref: React.ForwardedRef<HTMLDivElement>) {
    const [options, setOptions] = useState<{value: string; label: string}[]>([])

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (props.onChange) {
            props.onChange(event.target.value)
        }
    }

    useEffect(() => {
        if (Array.isArray(props.options)) {
            setOptions(props.options)
        }
    },[])

    return <div className={styles.vitisSelect} ref={ref}>
        {props.label && <span className={styles.label}>{props.label}</span>}
        <select value={props.value} onChange={onChange}>
            {options.map(item => <option value={item.value} label={item.label}/>)}
        </select>
    </div>
})
