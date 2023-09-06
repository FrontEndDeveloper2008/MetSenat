import {createSlice} from "@reduxjs/toolkit";
import {StudentsData} from "../../../data/students/index";

const studentsSlice = createSlice({
    name: "students", initialState: {
        students: StudentsData, filter: {
            fullName: "", statusStudents: "", univerType: "", sponsorSum: 0, kontraktSum: 0,
        },
    }, reducers: {
        editStudent: (state, action) => {
            const {index, fullName} = action.payload;
            state.students[index].fullName = fullName;
        },
    },
});
export const {editStudent} = studentsSlice.actions;
export default studentsSlice.reducer;
