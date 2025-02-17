import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.contents}>
                <h1>deep blue cinematics</h1>
                <div className={styles.buttons}>
                    <button>our work</button>
                    <button>our story</button>
                </div>
            </div>
            <video
                src={require("../../public/video.mp4")}
                autoPlay
                muted
                loop
                className={styles.video}
            />
            {/* <div> */}
            <div>
                <div className={styles.embed}>
                <iframe src="https://www.youtube.com/embed/19g66ezsKAg" width='200' height='100' />
                    <aside className={styles.asideLeft}>
                        <p>Business paragraph 1 here</p>
                    </aside>
                </div>
                <div className={styles.embed}>
                <iframe src="https://www.youtube.com/embed/19g66ezsKAg" width='200' height='100' />
                    <aside className={styles.asideRight}>
                        <p>Business paragraph 2 here</p>
                    </aside>
                </div>
            </div>
        </main>
    );
}
