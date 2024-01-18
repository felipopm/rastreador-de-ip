import styles from "./Home.module.css"

function Home() {
    return (
        <>
            <div className={styles.conteudo}>
                <h1 className={styles.titulo}>IP Address Tracker</h1>
                <div className={styles.pesquisa}>
                    <input type="text" placeholder='Search for any IP address or domain' />
                    <h3 className={styles.seta}>{'>'}</h3>
                </div>
                <div className={styles.predados}>
                    <div className={styles.dados}>
                        <p>IP Address</p>
                        <hr className={styles.linhavertical}/>
                        <p>Location</p>
                        <hr className={styles.linhavertical}/>
                        <div>
                            <p>Timezone</p>
                            <h2>UTC</h2> {/* add offset value dynamically using the API  */}
                        </div>
                        <hr className={styles.linhavertical}/>
                        <p>ISP</p>
                </div>
                </div>
                <div className={styles.mapa}>
                    mapa
                </div>
            </div>
        </>
    )
}
export default Home