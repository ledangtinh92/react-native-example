import React, { createContext, useState } from 'react';

interface SearchContextType {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}
export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({children}) => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <SearchContext.Provider value={ {searchQuery, setSearchQuery} }>
            { children }
        </SearchContext.Provider>
    );
};
