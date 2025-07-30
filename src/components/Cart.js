function Cart() {
  const prixMonstera = 8
  const prixLierre = 10
  const prixBouquet = 15
  return (
  <div>
    <h2>Panier</h2>
    <ul>
      <li>Monstera : {prixMonstera}€</li>
      <li>Lierre : {prixLierre}€</li>
      <li>Fleurs : {prixBouquet}€</li>
    </ul>
    Total : {prixMonstera + prixLierre + prixBouquet}€
  </div>)
}

export default Cart