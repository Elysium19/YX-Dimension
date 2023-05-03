import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {useState} from "react";
import {useRouter} from "next/router";

export default function Home() {

    const router = useRouter()

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
                             src="https://cdn.discordapp.com/attachments/215603277214121984/1067433991487094844/DALLE_2023-01-24_14.21.17_-_background_purple.png"
                             alt={"img"}/>
                    </div>
                    <div>
                        <h1>XY-Dimension</h1>
                        <p>Metavers</p>
                    </div>

                    <div className={styles.liste}>
                        <h3>Design :</h3>
                        <div>Bryan</div>
                        <div>Titouan</div>
                        <div>Tommy</div>
                        <div>Florian</div>
                    </div>

                    <div className={styles.liste}>
                        <h3>Dev :</h3>
                        <div>William</div>
                        <div>Hugo</div>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.warp}>
                        <img className={styles.imgScale}
                             onClick={() => setState(1)}
                             src="https://cdn.discordapp.com/attachments/1091371450021204039/1103065168025493515/Pose_4_Lined_V2.png"
                             alt={"img"}/>
                        {state === 1 &&
                            <div className={styles.backgroundImg} >
                                <img className={state === 1 && styles.imgScaleSelected}
                                     src="https://cdn.discordapp.com/attachments/1091371450021204039/1103065168025493515/Pose_4_Lined_V2.png"
                                     alt={"img"}/>
                            </div>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(2)}
                             src="https://cdn.discordapp.com/attachments/1091371450021204039/1103066375989252166/Pose_3_Lined.png"
                             alt={"img"}/>
                        {state === 2 &&
                            <div className={styles.backgroundImg} >
                                <img className={styles.imgScaleSelected}
                                     src="https://cdn.discordapp.com/attachments/1091371450021204039/1103066375989252166/Pose_3_Lined.png"
                                     alt={"img"}/>
                            </div>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(3)}
                             src="https://cdn.discordapp.com/attachments/1091371450021204039/1103071970913955880/Pose_2_Lined.png"
                             alt={"img"}/>
                        {state === 3 &&
                            <div className={styles.backgroundImg} >
                                <img className={styles.imgScaleSelected}
                                     src="https://cdn.discordapp.com/attachments/1091371450021204039/1103071970913955880/Pose_2_Lined.png"
                                     alt={"img"}/>
                            </div>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(4)}
                             src="https://cdn.discordapp.com/attachments/1091371450021204039/1103076074096705546/Pose_1_Lined.png"
                             alt={"img"}/>
                        {state === 4 &&
                            <div className={styles.backgroundImg} >
                                <img className={styles.imgScaleSelected}
                                     src="https://cdn.discordapp.com/attachments/1091371450021204039/1103076074096705546/Pose_1_Lined.png"
                                     alt={"img"}/>
                            </div>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(5)}
                             src="https://cdn.discordapp.com/attachments/1091371450021204039/1103091400259670096/Pose_5_Lined.png"
                             alt={"img"}/>
                        {state === 5 &&
                            <div className={styles.backgroundImg} >
                                <img className={styles.imgScaleSelected}
                                     src="https://cdn.discordapp.com/attachments/1091371450021204039/1103091400259670096/Pose_5_Lined.png"
                                     alt={"img"}/>
                            </div>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(6)}
                             src="https://cdn.discordapp.com/attachments/1034737672176017504/1103218170711527434/Capture_decran_2023-05-03_091416.png"
                             alt={"img"}/>
                        {state === 6 &&
                            <div className={styles.backgroundImg} >
                                <img className={styles.imgScaleSelected}
                                     src="https://cdn.discordapp.com/attachments/1034737672176017504/1103218170711527434/Capture_decran_2023-05-03_091416.png"
                                     alt={"img"}/>
                            </div>
                        }

                        <img className={styles.imgScale}
                             onClick={() => setState(7)}
                             src="https://cdn.discordapp.com/attachments/1034737672176017504/1103218170975756328/BPR_Composite.jpg"
                             alt={"img"}/>
                        {state === 7 &&
                            <div className={styles.backgroundImg} >
                                <img className={styles.imgScaleSelected}
                                     src="https://cdn.discordapp.com/attachments/1034737672176017504/1103218170975756328/BPR_Composite.jpg"
                                     alt={"img"}/>
                            </div>
                        }

                    </div>
                </div>

            </main>

        </>
    );
}
