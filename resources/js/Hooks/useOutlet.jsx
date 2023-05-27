import { useCallback, useEffect, useState } from "react";
import { outletList } from "@/Data/Outlet";

export const useOutlet = (userId) => {
    const [selectedOutlet, setSelectedOutlet] = useState();
    const [listOutlet, setListOutlet] = useState([]);

    const fetchOutlet = () => {
        outletList({ user_id: userId })
    }

    useEffect(() => {
        fetchOutlet();
    }, []);

    return {
        selectedOutlet,
        setSelectedOutlet
    };
};
