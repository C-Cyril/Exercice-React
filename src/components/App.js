import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../style/Layout.css'
import logo from '../assets/logoLeaf.png'

function App() {
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison de la jungle' className='lmj-logo' />
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart />
                <ShoppingList />
            </div>
            <Footer />
        </div>
    )
}

export default App