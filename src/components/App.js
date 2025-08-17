import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../style/Layout.css'
import logo from '../assets/logoLeaf.png'
import { useState } from 'react'

/*
faire remonter le state cart : 
    const [cart, updateCart] = useState(0)
        je déclare le state dans le fichier parent
    <Cart cart={cart} updateCart={updateCart} />
        "j'envoie" le state au composant Cart enfant
*/
function App() {
    const [cart, updateCart] = useState([])

    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison de la jungle' className='lmj-logo' />
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )
}

export default App