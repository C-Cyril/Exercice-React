import "../style/Cart.css"
import { useState } from "react"

function Cart() {
  const monsteraPrice = 8
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
  const [cart, updateCart] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  /*
  Lorsqu'un state est modifié, alors l'affichage du composant est rafraichit et la valeur 
  affichée est actualisée, on dit que le composant est re-render.
  */

  return isOpen ? (
      <div className='lmj-cart'>
        <button
          className='lmj-cart-toggle-button'
          onClick={() => setIsOpen(false)}
        >
          Fermer
        </button>
        <h2>Panier</h2>
        <button onClick={() => updateCart(0)}>Vider le Panier</button>
        <div>
            Monstera : {monsteraPrice}€
            <button onClick={() => updateCart(cart + 1)}>
                Ajouter
            </button>
        </div>
        <h3>Total : {monsteraPrice * cart}€</h3>
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

export default Cart