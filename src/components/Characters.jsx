import React, {useState, useReducer, useMemo, useRef, useCallback} from 'react'
import Search from './Search';
import useCharacters from '../hooks/useCharacters'

const initialState = {
    favorites: []
}

const API = 'https://rickandmortyapi.com/api/character/'

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
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
    const [search, setSearch] = useState('')
    const searchInput = useRef(null)

    const characters = useCharacters(API)

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    /*const handleSearch = () => {
        setSearch(searchInput.current.value)
    }*/

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value)
    }, [])
    
    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    )

    return (
        <div className="container mx-auto py-4">
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            <p className="font-semibold px-4 pt-4">Mis favoritos:</p>
            <ul className=" list-reset flex flex-row p-4">
                {favorites.favorites.map(favorite => (
                    <li className="relative -mb-px block border p-4 border-gray-400" key={favorite.id}>{favorite.name}</li>
                ))}
            </ul>
            <div className="grid grid-cols-12 gap-4 mx-4">
                {filteredUsers.map(character => (
                    <div className="col-span-12 sm:col-span-6 md:col-span-3" key={character.id}>
                        <div className="flex flex-row flex-wrap bg-white shadow-sm rounded p-4">
                            <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                <img className="rounded" src={character.image} alt={character.name} />
                            </div>
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500"><h2>{character.name}</h2></div>
                                <div className="font-bold text-lg">
                                    <p>{character.species}</p>
                                </div>
                            </div>
                            <div className="w-full">
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
