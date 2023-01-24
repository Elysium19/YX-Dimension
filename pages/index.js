import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {AvatarGroup, Button, ButtonIcon, Card, ZoomableImage} from "react-rainbow-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faHeart, faShareAlt, faTasks} from "@fortawesome/free-solid-svg-icons";

export default function Home() {

    const avatars = [
        {
            src: "images/user/user1.jpg",
            assistiveText: "William Parois",
            title: "William Parois",
        },
        {
            src: "images/user/user2.jpg",
            assistiveText: "Hugo Le gal",
            title: "Hugo Le gal",
        },
        {
            src: "images/user/user3.jpg",
            assistiveText: "Florian Perocheau",
            title: "Florian Perocheau",
        },
        {
            src: "images/user/user4.jpg",
            assistiveText: "Brian",
            title: "Brian",
        },
    ];

    const iconContainerStyles = {
        width: '2.5rem',
        height: '2.5rem',
    };

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
                    <div className="rainbow-flex_column rainbow-m-around_large">
                        <AvatarGroup
                            avatars={avatars}
                            maxAvatars={4}
                            size="small"
                        />
                    </div>
                    <h1>XY-Dimension</h1>
                    <p>Metavers</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.warp}>
                        <ZoomableImage className={styles.imgScale} src="./img1.png" width="300"/>
                        <ZoomableImage className={styles.imgScale} src="./img1.png" width="300"/>
                        <ZoomableImage className={styles.imgScale} src="./img1.png" width="300"/>
                        <ZoomableImage className={styles.imgScale} src="./img1.png" width="300"/>
                        <ZoomableImage className={styles.imgScale} src="./img1.png" width="300"/>
                        <ZoomableImage className={styles.imgScale} src="./img1.png" width="300"/>
                        <ZoomableImage className={styles.imgScale} src="./img1.png" width="300"/>
                    </div>
                </div>
            </main>
        </>
    )
}
