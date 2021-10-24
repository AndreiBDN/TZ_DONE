import React, { FC } from 'react'
import { useAppSelector } from '../../../hooks/useStore';
import { selectHandles } from '../../../store/slices/app';
import { Layout } from '../../complexes/Layout';
import { Table } from '../../simple/Table';
import Header from './Header';


const HandlePage: FC = () => {
    const state = useAppSelector(selectHandles)

    return (
        <Layout>
            <Header />
            <Table data={state} />
        </Layout>

    )
}

export default HandlePage