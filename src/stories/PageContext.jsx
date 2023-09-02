import { createContext } from 'react';
import usePage from './usePage';

// const messageState = usePage()
const PageContext = createContext();
PageContext.displayName = 'PageContext';

export default PageContext;