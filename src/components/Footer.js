import { useState } from 'react'
import "../style/Footer.css"

function Footer() {
	const [inputValue, setInputValue] = useState('')

	//handleInput dans la fonction Footer pour avoir accès aux variables
	function handleInput(e) {
		//ajoute le caractère saisi dans le String du input
		//les vérifications de saisi se font ici
		setInputValue(e.target.value)
	}

	//vérifie la présence d'un @ quand le input n'est plus séléctionné
	function checkValueBlur () {
	if (!inputValue.includes('@')) {
		alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide")
	}
}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail : 
				<input
					placeholder='Entrez votre adresse mail'
					onChange={handleInput}
					value={inputValue}
					onBlur={(e) => checkValueBlur()}
				/>
			</div>
		</footer>
	)
}

export default Footer
