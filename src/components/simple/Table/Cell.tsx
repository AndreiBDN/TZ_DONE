import React, { FC, useMemo } from 'react'
import styles from './Table.module.scss'


type Props = {
    isOk: boolean
    count: number
}

/**
 * 
 * @param isOk - сдана ли задача
 * @param count - количество попыток
 * @returns компонент ячейки
 */

const Cell: FC<Props> = ({
    isOk,
    count
}) => {

    // получение актуального количества попыток в зависимости от того здана ли задача
    const currentCount: number = useMemo(() => {
        const c: number = isOk ? count - 1 : count
        return c
    }, [count, isOk])

    return (
        <td className={isOk ? styles.okCell : styles.wrongCell}>{isOk ? '+' : '-'}{!!currentCount ? currentCount : ''}</td>
    )
}

export default React.memo(Cell)