import {createSlice} from "@reduxjs/toolkit";
import {StudentsData} from "../../../data/students/index";

const students = createSlice({
    name: "sponsors", initialState: {
        sponsors: StudentsData, filter: {
            date: "", status: "", sponsorSum: 0,
        },
    }, reducers: {
        editStudent: (state, action) => {
            state.students[action.payload.index] = action.payload.data;
        }, onChangeFilterDate: (state, action) => {
            state.filter.date = action.payload;
        }, onChangeFilterStatus: (state, action) => {
            state.filter.status = action.payload;
        },
    },
});

export const {editStudent, onChangeFilterDate, onChangeFilterStatus} = students.actions;

export default students.reducer;
