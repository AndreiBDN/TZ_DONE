import React, { FC, useMemo } from 'react'
import styles from './Button.module.scss'

type Props = {
    label: string
    color?: string
    onClick: () => void
    labelColor?: string
    disabled?: boolean
}

/**
 * 
 * @param label - buttons text
 * @param color - buttons color
 * @param color - label color
 * @param onClick - callback onClick
 * @param disabled - is disabled
 * @returns - JSX element Button
 */

const Button: FC<Props> = ({ label, color, onClick, labelColor, disabled = false }) => {

    const btnColor = useMemo(() => {
        if(!disabled && color) {
            return color
        }
        if(disabled) {
            return '#c2c2c2'
        }
        return 'green'
    },[disabled, color])
    return (
        <button
        disabled={disabled}
            className={styles.button}
            style={{ 
                backgroundColor: btnColor,
                color: labelColor || '#fff'
         }}
            onClick={onClick}
        >{label}</button>
    )
}

export default React.memo(Button)