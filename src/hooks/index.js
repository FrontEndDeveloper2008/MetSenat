import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
export const useSponsor = () => {
    const { id } = useParams();
    const sponsors = useSelector((state) => state.sponsors.sponsors);
    const sponsorIndex = useMemo(() => sponsors.findIndex((item) => item.id.toString() === id.toString()), [sponsors, id]);
    const sponsor = useMemo(() => (sponsorIndex > -1 ? sponsors[sponsorIndex] : {}), [sponsorIndex]);
    return { sponsor, sponsorIndex };
};
