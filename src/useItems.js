/* use this hook for both drinks and snacks*/
import { useState, useEffect } from "react";
import SnackOrBoozeApi from "./Api";

const useItems = (setIsLoading, name) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function getItems() {
			let items =
				name === "booze"
					? await SnackOrBoozeApi.getDrinks()
					: await SnackOrBoozeApi.getSnacks();
			setItems(items);
			setIsLoading(false);
		}
		getItems();
	}, [name, setIsLoading]);
	return items;
};

export default useItems;
