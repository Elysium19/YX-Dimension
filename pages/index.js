import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {

    return (
        <>
            <Head>
                <title>XY-Dimension</title>
                <meta name="description" content="XY-Dimension est un metavers de basket"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.background}>

                <div className={styles.nav}>
                    <div>
                        <img style={{width:'40px', height:'40px', borderRadius:'50%'}} src="https://cdn.discordapp.com/attachments/215603277214121984/1067433991487094844/DALLE_2023-01-24_14.21.17_-_background_purple.png"/>
                    </div>
                    <div>
                        <h1>XY-Dimension</h1>
                        <p>Metavers</p>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.warp}>
                        <img className={styles.imgScale} src="./img1.png"/>
                        <img className={styles.imgScale} src="./img1.png"/>
                        <img className={styles.imgScale} src="./img1.png"/>
                        <img className={styles.imgScale} src="./img1.png"/>
                        <img className={styles.imgScale} src="./img1.png"/>
                        <img className={styles.imgScale} src="./img1.png"/>
                        <img className={styles.imgScale} src="./img1.png"/>
                        <img className={styles.imgScale} src="./img1.png"/>
                    </div>
                </div>

            </main>

        </>
    )
}
