import usePage from "./usePage";
import PageContext from "./PageContext";
import { useContext } from "react";
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { ThemeProvider } from "@mui/material";
import Theme from './theme';
import { useTheme } from '@mui/material/styles';

export function PageWrapper({ children }) {
    const messageState = useContext(PageContext)
    const {
        text,
        kind,
        loading,
        setMessage,
    } = messageState;
    const theme = useTheme();
    return (
        <ThemeProvider theme={Theme}>
        <PageContext.Provider value={messageState}>
            {loading && <CircularProgress />}
            <Snackbar 
                autoHideDuration={5000} 
                onClose={() => setMessage(null)}
                open={text !== '' && text !== null}
            >
                <Alert
                    severity={kind}
                    sx={{ width: '100%' }}
                    onClose={() => setMessage(null)}
                    open={text !== '' && text !== null}
                    >
                    {text}
                </Alert>
            </Snackbar>
            {!loading && children}
        </PageContext.Provider>
        </ThemeProvider>

    )
}

// export PageWrapper;