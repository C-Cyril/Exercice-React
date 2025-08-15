import CareScale from "./CareScale";
import "../style/PlantItem.css"

//A VOIR : l'attribut key n'est pas dans le html final
function PlantItem ({name, cover, id, light, water}) {
    return (
        <li key={`${id}`} className="lmj-plant-item" /*onClick={() => handleClick(name) }*/>
            <img className="lmj-plant-item-cover" src={cover} alt={`Image de ${name}`}/>
            {name}

            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    )}

function handleClick (pPlantName) {
    alert(`Vous voulez acheter 1 ${pPlantName} ? Très bon choix`)
    //console.log('Ceci est mon event : ', pPlantName)
}

export default PlantItem;