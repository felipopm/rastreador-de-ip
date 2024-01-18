import styles from "./Home.module.css"
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css'; // Importe o CSS do Leaflet

function Home() {

    // var map = L.map('map').setView([51.505, -0.09], 13);

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 19,
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(map);

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
                        <hr className={styles.linhavertical} />
                        <p>Location</p>
                        <hr className={styles.linhavertical} />
                        <div>
                            <p>Timezone</p>
                            <h2>UTC</h2> {/* add offset value dynamically using the API  */}
                        </div>
                        <hr className={styles.linhavertical} />
                        <p>ISP</p>
                    </div>
                </div>
                <div id="map" className={styles.mapa}></div>
            </div>
        </>
    )
}
export default Home