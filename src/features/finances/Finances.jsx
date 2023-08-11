import { Layout } from '../../components'

import styles from './Finances.module.css'

export const Finances = () => {
    return (
        <>
            <Layout
                sidebarContent={null}
                sectionContent={(
                    <>
                        <div className={styles.docketHeader}>
                            <h1>Finances</h1>
                        </div>
                        <div>Finances content here</div>
                    </>
                )}
            />
        </>
    )
}