import React, {useState, useEffect, useReducer} from 'react'

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(data => setCharacters(data.results))
    }, [])

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    return (
        <div className="container mx-auto py-4">
            <p className="font-semibold px-4 pt-4">Mis favoritos:</p>
            <ul class=" list-reset flex flex-col p-4">
                {favorites.favorites.map(favorite => (
                    <li className="relative -mb-px block border p-4 border-gray-400" key={favorite.id}>{favorite.name}</li>
                ))}
            </ul>
            <div class="grid grid-cols-12 gap-4 mx-4">
                {characters.map(character => (
                    <div class="col-span-12 sm:col-span-6 md:col-span-3" key={character.id}>
                        <div class="flex flex-row flex-wrap bg-white shadow-sm rounded p-4">
                            <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                <img className="rounded" src={character.image} alt={character.name} />
                            </div>
                            <div class="flex flex-col flex-grow ml-4">
                                <div class="text-sm text-gray-500"><h2>{character.name}</h2></div>
                                <div class="font-bold text-lg">
                                    <p>{character.species}</p>
                                </div>
                            </div>
                            <div class="w-full">
                                <button className="uppercase text-sm px-8 py-2 bg-blue-600 text-blue-50 w-full rounded mt-2 shadow-sm hover:shadow-lg focus:outline-none" type="button" onClick={() => handleClick(character)}>Agregar a favoritos</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characters
