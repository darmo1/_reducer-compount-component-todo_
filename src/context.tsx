import React, { createContext, useState } from "react";

type ContextProps = {
    isOpen: boolean | undefined;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    checked: boolean | undefined;
    setChecked: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const Ctx = createContext<ContextProps>({
    isOpen: false,
    setIsOpen: () => { },
    checked: undefined,
    setChecked: () => { }

});

export const useCardContext = () => {
    if (!React.useContext(Ctx)) {
        throw new Error('useCardContext must be used within a CardContextProvider')
    }
    return React.useContext(Ctx)
};


export const CardContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>()
    const [checked, setChecked] = useState<boolean | undefined>(false);

    const values = {
        isOpen,
        setIsOpen,
        checked,
        setChecked,

    }

    return (
        <Ctx.Provider value={values} >
            {children}
        </Ctx.Provider>)
}






