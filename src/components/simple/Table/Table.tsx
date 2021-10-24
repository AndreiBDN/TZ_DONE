import React, { FC, useMemo } from 'react'
import { HandleType, VerdictType, } from '../../../types/types'
import Cell from './Cell'
import styles from './Table.module.scss'

type Props = {
    data: Array<Array<HandleType>>
}

const Table: FC<Props> = ({ data }) => {
    const contexts = useMemo(() => {
        let c: any = {}
        data.map((h: Array<HandleType>) => {
            // let c: any = {handle: h[0].author.members[0].handle}
            for (let i: any = 0; i < h.length; i++) {
                c[h[i].contestId] = {}
            }
            for (let i = 0; i < h.length; i++) {
                c[h[i].contestId][h[i].problem.index] = { count: 0, verdict: '' }
            }

        })

        return c
    }, [data])
    const handleData = useMemo(() => {
        const prepare = data.map((h: Array<HandleType>) => {
            let c: any = { handle: h[0].author.members[0].handle }
            for (let i: any = 0; i < h.length; i++) {
                c[h[i].contestId] = {}
            }
            for (let i = 0; i < h.length; i++) {
                c[h[i].contestId][h[i].problem.index] = { count: 0, verdict: '', key: [h[i].problem.index] }
            }

            for (let i = 0; i < h.length; i++) {
                c[h[i].contestId][h[i].problem.index].count = c[h[i].contestId][h[i].problem.index].count + 1
                if (h[i].verdict === VerdictType.OK) {
                    c[h[i].contestId][h[i].problem.index].verdict = h[i].verdict
                }

            }

            return c

        })

        return prepare
    }, [data])

    console.log(handleData);
    

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th rowSpan={2}></th>
                    {Object.keys(contexts).map((c) => <th className={styles.head} key={c} colSpan={Object.keys(contexts[c]).length}>Контест {c}</th>)}
                </tr>
                <tr>
                    {Object.keys(contexts).map((c) => Object.keys(contexts[c]).map((i) => <td className={styles.headCell} key={i} >{i}</td>))}
                </tr>


            </thead>

            <tbody>
                {handleData.map((handle, index) =>
                    <tr key={index}>
                        <td className={styles.nameCell}>{handle.handle}</td>
                        {Object.keys(contexts).map((c) => {
                            if (handle[c]) {
                                return Object.keys(contexts[c]).map((i) => <Cell
                                    isOk={handle[c][i].verdict === VerdictType.OK}
                                    key={handle[c][i].key}
                                    count={handle[c][i].count}
                                />)
                            } else {
                                return Object.keys(contexts[c]).map((i, index) => <td className={styles.cell} key={index}></td>)
                            }
                        })}
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default React.memo(Table)