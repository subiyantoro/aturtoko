import * as React from 'react';
import { useOutlet } from "@/Hooks/useOutlet";
import { createContext } from "react";

export const CoreContext = createContext({
    selectedOutlet: null,
    listOutlet: [],
    setOutlet: () => { },
    addNotification: () => { },
});

export const CoreContextProvider = React.memo(({ children, auth }) => {
    const {
        selectedOutlet,
        setSelectedOutlet,
    } = useOutlet(auth.user.id);

    return (
        <CoreContext.Provider value={{
            selectedOutlet,
            setSelectedOutlet
        }}>
            {children}
        </CoreContext.Provider>
    )
});
