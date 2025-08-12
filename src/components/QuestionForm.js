import { useState } from "react";

/*
Créé une zone de text pré-remplie et un boutton, 
mémorise le texte sasi à chaque changement, 
affiche le contenu de cette zone  quand le boutton est cliqué
*/
function QuestionForm () {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (<div>
        <textarea 
            value={inputValue}
            onChange={(e) => checkValue(e.target.value)}
        />
        <button onClick={() => alert(inputValue)}>Alertez moi</button>
    </div>)
}

function checkValue(pValue) {
    if (!pValue.include('f')) {
        setInputValue(pValue)
    }
}

export default QuestionForm;