import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
export const useStudent = () => {
    const { id } = useParams();
    const students = useSelector((state) => state.students.students);
    const studentIndex = useMemo(() => students.findIndex((item) => item.id.toString() === id.toString()), [students, id]);
    const student = useMemo(() => (studentIndex > -1 ? students[studentIndex] : {}), [studentIndex]);
    return { student, studentIndex };
};
