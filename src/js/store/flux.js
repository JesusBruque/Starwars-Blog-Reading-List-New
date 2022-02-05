const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Characters: [],
			Planets: [],
		},
		actions: {
			setCharacters: (characterList) => {
				setStore({Character: characterList});
			},

			setPlanets: (planetsList) => {
				setStore({Planets: planetsList});
			}
		}
	};
};

export default getState;
