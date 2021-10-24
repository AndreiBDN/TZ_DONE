import React, { FC} from 'react'
import styles from './TextInput.module.scss'

type Props = {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    label?: string
}

/**
 * 
 * @param value - входящее значение
 * @param onChange - колбэк при вводе текста
 * @param placeholder 
 * @param label 
 * @returns - компонент инпута
 */

const TextInput: FC<Props> = ({ value, onChange, placeholder, label }) => {

    return (
        <div className={styles.root}>
            {
                label &&
                <span className={styles.label}>{label}</span>
            }
            <div className={styles.wrapper}>
                <input
                    className={styles.input}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}


export default TextInput;