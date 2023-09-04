import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
export const useStudent = () => {
    const { id } = useParams();
    const student = useSelector((state) => state.students.students);
    const studentsIndex = useMemo(() => student.findIndex((item) => item.id.toString() === id.toString()), [students, id]);
    const students = useMemo(() => (studentsIndex > -1 ? students[studentsIndex] : {}), [studentsIndex]);
    return { student, studentsIndex };
};
