const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starWars: [],
		},
		actions: {
			setStarWars: (starWarsList) => {
				setStore({starWars: starWarsList});
			}
		}
	};
};

export default getState;
