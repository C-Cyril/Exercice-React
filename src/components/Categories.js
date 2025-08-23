import "../style/Categories.css"

function Categories ({pListeDesCategories, setCategorieChoisie, CategorieChoisie}) {
    return (
        <div className='lmj-categories'>
            <select
                value={CategorieChoisie}
                onChange={(e) => setCategorieChoisie(e.target.value)}
                className='lmjCategorie-select'
            >
                <option value=''>---</option>
                {pListeDesCategories.map((categorie) => (
                    <option key={`${categorie}`} value={categorie} >{categorie}</option>
                ))}
            </select>
            <button onClick={() => setCategorieChoisie('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories