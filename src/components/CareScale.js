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
        <div onClick={() => handleClickCareScale(scaleValue, careType)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

// affiche une alert qui indique le besoin en eau/lumière de la plante
function handleClickCareScale (scaleValue, pCareType) {
    const rangeString = ["peu", "modérement", "beaucoup"]
    const careType = pCareType === "light" ?
        "de lumière" : "d'arrosage"
    
    alert(`Cette plante requiert ${rangeString[scaleValue -1]} ${careType} .`)
}

export default CareScale