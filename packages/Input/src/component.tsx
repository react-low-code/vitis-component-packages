import React from 'react';
import style from './index.module.scss'

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
}

export default function (props: Props) {
    const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) {
            props.onChange(event.target.value)
        }
    }

    return <div>
            {props.label && <span className={style.label}>{props.label}</span>}
            <input value={props.value} onInput={onInput}/>
    </div>
}
