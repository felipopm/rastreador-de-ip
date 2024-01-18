import { useEffect } from "react";
import styles from "./Home.module.css"
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importe o CSS do Leaflet

function Home() {
    useEffect(() => {
        var map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        return () => {
          map.remove();  
        };
    }, []);


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
                        <div className={styles.dado}>
                            <p>IP Address</p>
                            <h2>IP</h2>
                        </div>
                        <hr className={styles.linhavertical} />
                        <div  className={styles.dado}>
                            <p>Location</p>
                            <h2>location</h2>
                        </div>
                        <hr className={styles.linhavertical} />
                        <div  className={styles.dado}>
                            <p>Timezone</p>
                            <h2>UTC</h2> {/* add offset value dynamically using the API  */}
                        </div>
                        <hr className={styles.linhavertical} />
                        <div  className={styles.dado}>
                            <p>ISP</p>
                            <h2>isp</h2>
                        </div>
                    </div>
                </div>
                <div id="map" className={styles.mapa}></div>
            </div>
        </>
    )
}
export default Home