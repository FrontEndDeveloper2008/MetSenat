import {configureStore} from "@reduxjs/toolkit";
import sponsorsReducer from "../slices/sponsors";
import studentsReducer from "../slices/sponsors/index";
const localStorageMiddleware = ({getState}) => {
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem("applicationState", JSON.stringify(getState()));
        return result;
    };
};
const reHydrateStore = () => {
    if (localStorage.getItem("applicationState") !== null) {
        return JSON.parse(localStorage.getItem("applicationState"));
    }
};
export default configureStore({
    reducer: {
        sponsors: sponsorsReducer,
        students: studentsReducer,
    },
    preloadedState: reHydrateStore(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});
