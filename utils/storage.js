export const storeData = (episodes, data) => {
    try {
        localStorage.setItem(episodes, data);
    } catch (error) {
        console.error("Error storing data:", error);
    }
};

export const getData = (episodes) => {
    try {
        return localStorage.getItem(episodes);
    } catch (error) {
        console.error("Error getting data:", error);
        return null;
    }
};
