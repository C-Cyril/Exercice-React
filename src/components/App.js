import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../style/Layout.css'
import logo from '../assets/logoLeaf.png'
import { useState, useEffect } from 'react'

/*
faire remonter le state cart : 
    const [cart, updateCart] = useState([])
        je déclare le state dans le fichier parent
    <Cart cart={cart} updateCart={updateCart} />
        "j'envoie" le state au composant Cart enfant
*/
function App() {
    const cartLocal = localStorage.getItem("panierLocal")
    //SI cartLocal n'est pas null on le récupère dans cart, SINON cart est initialisé à []
    const [cart, updateCart] = useState(cartLocal ? JSON.parse(cartLocal) : [])

    useEffect(() => {
        localStorage.setItem("panierLocal", JSON.stringify(cart))
        console.log(JSON.stringify(cart))
    }, [cart])

    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison de la jungle' className='lmj-logo' />
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList 
                    cart={cart} 
                    updateCart={updateCart} 
                />
            </div>
            <Footer />
        </div>
    )
}

export default App