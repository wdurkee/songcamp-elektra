import "./Portal.css"
import Logo from "./ELEKTRA.png"

function ElektraSatellite() {
    return (
        <div>
            <img src={Logo} alt="Elektra" style={{ marginTop: "10px", marginBottom: "10px", maxWidth: "50px", height: "auto", marginRight: "92vw", marginLeft: "15px", zIndex: "999" }} />
        </div>
    )
}


export default ElektraSatellite;
