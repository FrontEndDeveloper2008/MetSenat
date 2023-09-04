import {createSlice} from "@reduxjs/toolkit";
import {SponsorsData} from "../../../data/sponsors/index";

const sponsors = createSlice({
    name: "sponsors", initialState: {
        sponsors: SponsorsData, filter: {
            date: "", status: "", sponsorSum: 0,
        },
    }, reducers: {
        editSponsor: (state, action) => {
            // This action is used to edit a sponsor in the state.
            state.sponsors[action.payload.index] = action.payload.data;
        }, onChangeFilterDate: (state, action) => {
            // This action is used to update the date filter in the state.
            state.filter.date = action.payload;
        }, onChangeFilterStatus: (state, action) => {
            // This action is used to update the status filter in the state.
            state.filter.status = action.payload;
        },
    },
});

export const {editSponsor, onChangeFilterDate, onChangeFilterStatus} = sponsors.actions;

export default sponsors.reducer;
