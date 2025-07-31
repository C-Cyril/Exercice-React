import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../style/ShoppingList.css"

function ShoppingList() {
    let listeCategories = [];
    
    //ajoute chaque catégorie différente de listePlantes dans listeCategories
    plantList.forEach((plante) => {if(listeCategories.includes(plante.category) === false) {
        listeCategories.push(plante.category);
    }})
    
    //pour chaque entrée de listePlantes ont retourne un <li>
    return (
        <div>
            <ul>
                {listeCategories.map((categorie) => (
                    <li key={`${categorie}`} >{categorie}</li>
                ))}
            </ul>
            <ul className="lmj-plant-list">
                {plantList.map(({name, cover, id, light, water}) => (
                    <PlantItem
                        name={name}
                        cover={cover}
                        id={id}
                        light={light}
                        water={water}
                    />

                ))}
            </ul>
        </div>
    )
}
/*
Pour les conditions ternaire vu dans l'exercice :

CONDITION ? SI true : SI false
{plante.isSpecialOffer ? <div className="lmj-sales">Soldes</div> : null}

CONDITION1 && SI true  (plusieurs conditions possibles)
{plante.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
*/
export default ShoppingList;