import { createContext, useState } from 'react';
import mockUser from './MockData/MockUsers';
import mockRepos from './MockData/MockRepos';
import mockFollowers from './MockData/MockFollowers';


const AppContext = createContext();
const AppProvider = ({children}) =>{
    const [User,setUser] = useState(mockUser);
    const [Repos,setRepos] = useState(mockRepos);
    const [follower,setFollower] = useState(mockFollowers);

    return <AppContext.Provider value={{User,Repos,follower}}>{children}</AppContext.Provider>
}

export {AppProvider,AppContext}
