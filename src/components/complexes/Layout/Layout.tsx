import React, { FC } from 'react'
import styles from './Layout.module.scss'

type Props = {
    children: any
}

const Layout:FC<Props> = ({children}) => {
    return (
        <div className={styles.wrapper}>{children}</div>
    )
}

export default React.memo(Layout)