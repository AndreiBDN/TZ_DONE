import React, { FC, useMemo } from 'react'
import styles from './Table.module.scss'


type Props = {
    isOk: boolean
    count: number
}

/**
 * 
 * @param isOk 
 * @param count 
 * @returns 
 */

const Cell:FC<Props> = ({isOk, count}) => {
    const currentCount: number = useMemo(() => {
        const c: number = isOk ? count - 1 : count
        return c
    },[count, isOk])

    return (
        <td className={isOk ? styles.okCell : styles.wrongCell}>{isOk ? '+' : '-'}{!!currentCount ? currentCount : ''}</td>
    )
}

export default React.memo(Cell)