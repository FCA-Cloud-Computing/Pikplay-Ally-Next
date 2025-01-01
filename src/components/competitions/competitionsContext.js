import { createContext } from 'react';

const CompetitionsContext = createContext();

export default CompetitionsContext;

export const CompetitionsProvider = CompetitionsContext.Provider;

const StateComponent = () => {
    return (
        <CompetitionsProvider value={ }>
            {children}
        </CompetitionsProvider>
    );
}