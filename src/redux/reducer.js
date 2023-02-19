
import {
    GET_ALL_CHARACTERS,
    GET_CHARACTERS_DETAIL,
    ADD_FAVORITE,
    DELETE_CHARACTER
} from "./actions"


const initialState = {
    characters: [],
    charactersDetail: {},
    favorites: {}
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_CHARACTERS:

            return { ...state, characters: payload }

        case GET_CHARACTERS_DETAIL:

            return { ...state, charactersDetail: payload }
        case ADD_FAVORITE:

            return { ...state, favorites: payload }

        case DELETE_CHARACTER:
            const newCharacters = state.characters.filter((el) => {
                return el.id !== payload
            })
            return { ...state, characters: newCharacters }


        default:
            return { ...state }
    }
}

export default reducer 