import Skeleton from '@mui/material/Skeleton';
import {default as MUIAvatar} from '@mui/material/Avatar';

function Avatar({alt, src, loading}) {
    const avatar = <MUIAvatar width={40} height={40} variant="circular" alt={alt} src={src} />;
    return (
        <>
            {(loading) ? 
                <Skeleton width={40} height={40} variant="circular"/> :
                avatar
            }
        </>
    )
}

export default Avatar;