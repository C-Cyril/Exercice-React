import "../style/Cart.css"
import { useState, useEffect } from "react"

//je récupère en prop le state depuis App.js
function Cart({cart, updateCart, categorieChoisie}) {
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price, 0
  )
  /*
  useState renvoie une paire de valeur dans un tableau :
    - la valeur actuelle (que je nomme cart)
    - une fonction pour modifier cette valeur (que je nomme updateCart)
        ici, (cart + 1) ajoute 1 fois la valeur de cart au state
  C'est comme si je faisais :
    const cartState = useState(0) //le 0 est l'état initial voulu pour la state (String, nombre, ...)
    const cart = cartState[0]
    const updateCart = cartState[1]
  */
  const [isOpen, setIsOpen] = useState(true)

  /*
  Lorsqu'un state est modifié, alors l'affichage du composant est rafraichit et la valeur 
  affichée est actualisée, on dit que le composant est re-render.
  */

  /*
  useEffect(fonctionAExecuter, [tableauDeDependances])
  "useEffect" déclanche la fonction passée en paramètre à chaque rendu (par défaut)
  OU à chaque fois que l'un des paramètre passé dans le tableau de dépendances change
  */
  //affiche le montaant du panier dans le titre de l'onglets
  useEffect(() => {
    //alert(`J'aurais ${total}€ à payer`)
    document.title = `LMJ : ${total}€ d'achats`
  }, [total])
  
  return isOpen ? (
      <div className='lmj-cart'>
        <button
          className='lmj-cart-toggle-button'
          onClick={() => setIsOpen(false)}
        >
          Fermer
        </button>
        {cart.length > 0 ? (
          <div>
            <h2>Panier</h2>
            <ul>
              {cart.map(({name, price, amount}, index) => (
                <div key={`${name}-${index}`}>
                  {name} {price}€ x {amount}
                </div>
              ))}
            </ul>
            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])}>Vider le Panier</button>
          </div>
        ) : (
        <div>Votre panier est vide</div>
        )}
      </div>
  )
  : 
  (
    <div className='lmj-cart-closed'>
      <button 
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  )
}

/*
        <button onClick={() => updateCart(0)}>Vider le Panier</button>
        <div>
            Monstera : {monsteraPrice}€
            <button onClick={() => updateCart(cart + 1)}>
                Ajouter
            </button>
        </div>
*/


export default Cart