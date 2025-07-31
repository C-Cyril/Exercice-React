import Sun from "../assets/sun.svg"
import Water from "../assets/water.svg"

// le paramètre de cette fonctiont est composé de ceux déclarés dans la balise CareScale
//exemple : <CareScale careType="light" scaleValue={plante.light} />
function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]
    const scaleType = careType === "light" ? 
        <img src={Sun} alt="icone Sun" /> : <img src={Water} alt="icone Water" />

    //retourne autant de ☀️ ou 💧 que la valeure de scaleValue
    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
export default CareScale