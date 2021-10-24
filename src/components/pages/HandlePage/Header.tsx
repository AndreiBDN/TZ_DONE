import React, { FC, useRef, useState } from 'react'
import { useAppDispatch } from '../../../hooks/useStore'
import { getHandles } from '../../../store/slices/app'
import { Button } from '../../simple/Button'
import { TextInput } from '../../simple/TextInput'
import styles from './HandlePage.module.scss'

/**
 * 
 * @returns компонент добавление хэндела
 */
const Header: FC = () => {

    const dispatch = useAppDispatch()

    const [handle, setHandle] = useState<string>('')
    const [count, setCount] = useState<number>(0)

    // функция добавления хэндела
    const onHandleAdd = () => {
        if (handle && count) {
            dispatch(getHandles({
                name: handle,
                count: count
            }))
            setHandle('')
        }

    }

    return (
        <div className={styles.header}>
            <div className={styles.holder}>
                <TextInput
                    value={`${!!count ? count : ''}`}
                    onChange={(e) => setCount(+e)}
                    placeholder={'Количество посылок'}
                />
            </div>
            <div className={styles.holder}>
                <TextInput
                    value={handle}
                    onChange={setHandle}
                    placeholder={'Хэндл пользователя'}
                />
            </div>

            <Button
                disabled={!!!(handle && count)}
                label={'Добавить'}
                onClick={onHandleAdd}
            />
        </div>
    )
}

export default Header