const processedList = (list) => {
	for (const key in list) {
		if (typeof list[key] === "string") {
			list[key] = list[key].toUpperCase();
		}
	}
};

module.exports = { 
	processedList 
};
