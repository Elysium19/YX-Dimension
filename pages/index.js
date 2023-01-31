import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {useState} from "react";

export default function Home() {

    const [state, setState] = useState(0)

    return (
        <>
            <Head>
                <title>XY-Dimension</title>
                <meta name="description" content="XY-Dimension est un metavers de basket"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.background} onClick={() => state !== 0 && setState(0)}>

                <div className={styles.nav}>
                    <div>
                        <img className={styles.imgGlobal}
                             src="https://cdn.discordapp.com/attachments/215603277214121984/1067433991487094844/DALLE_2023-01-24_14.21.17_-_background_purple.png"/>
                    </div>
                    <div>
                        <h1>XY-Dimension</h1>
                        <p>Metavers</p>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.warp}>
                        <img className={styles.imgScale}
                             onClick={() => setState(1)} src="./img1.png"/>
                        {state === 1 &&
                            <img className={state === 1 && styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(2)} src="./img1.png"/>
                        {state === 2 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(3)} src="./img1.png"/>
                        {state === 3 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(4)} src="./img1.png"/>
                        {state === 4 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(5)} src="./img1.png"/>
                        {state === 5 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(6)} src="./img1.png"/>
                        {state === 6 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(7)} src="./img1.png"/>
                        {state === 7 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(8)} src="./img1.png"/>
                        {state === 8 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(9)} src="./img1.png"/>
                        {state === 9 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(10)} src="./img1.png"/>
                        {state === 10 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(11)} src="./img1.png"/>
                        {state === 11 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(12)} src="./img1.png"/>
                        {state === 12 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(13)} src="./img1.png"/>
                        {state === 13 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(14)} src="./img1.png"/>
                        {state === 14 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(15)} src="./img1.png"/>
                        {state === 15 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(16)} src="./img1.png"/>
                        {state === 16 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(17)} src="./img1.png"/>
                        {state === 17 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(18)} src="./img1.png"/>
                        {state === 18 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(19)} src="./img1.png"/>
                        {state === 19 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(20)} src="./img1.png"/>
                        {state === 20 &&
                            <img className={styles.imgScaleSelected}
                                 src="./img1.png"/>
                        }

                    </div>
                </div>

            </main>

        </>
    )
}
