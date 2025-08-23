import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../style/ShoppingList.css"
import { useState } from "react";

function ShoppingList({cart, updateCart}) {
    const [categorieChoisie, setCategorieChoisie] = useState('')
    
    //ajoute chaque catégorie différente de listePlantes dans listeCategories
    let listeCategories = []
    plantList.forEach((plant) => {if(listeCategories.includes(plant.category) === false) {
        listeCategories.push(plant.category);
    }})
    
    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        //si la plante est déjà dans le panier
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            //... est un spread operator
            // ça permet d'étendre un itérable (par exemple une expression de tableau ou 
            // une chaîne de caractères) en lieu et place de plusieurs arguments (fonctions)
            //  ou éléments (tableaux)
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantAdded.amount + 1}
            ])
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
    }

    //pour chaque entrée de listePlantes ont retourne un <li>
    // affiche seulement les plantes qui correspondent à la catégorie choisie dans la liste Categories
    return (
        <div className='lmj-shopping-list'>
            <Categories 
                pListeDesCategories={listeCategories}
                setCategorieChoisie={setCategorieChoisie}
                categorieChoisie={categorieChoisie}
            />
            
            <ul className="lmj-plant-list">
                {plantList.map(({name, cover, id, light, water, price, category}) =>
                    !categorieChoisie || categorieChoisie === category ? (
                        <div key={id}>
                            <PlantItem
                                name={name}
                                cover={cover}
                                id={id}
                                light={light}
                                water={water}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>

                ) : null
            )}
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