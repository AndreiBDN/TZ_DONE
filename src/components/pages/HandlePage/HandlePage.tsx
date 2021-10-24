import React, { FC } from 'react'
import { useAppSelector } from '../../../hooks/useStore';
import { selectHandles } from '../../../store/slices/app';
import { Layout } from '../../complexes/Layout';
import { Table } from '../../complexes/Table';

import Header from './Header';

/**
 * 
 * @returns страница
 */
const HandlePage: FC = () => {
    // добавленые хэнделы
    const state = useAppSelector(selectHandles)

    return (
        <Layout>
            <Header />
            <Table data={state} />
        </Layout>

    )
}

export default HandlePage