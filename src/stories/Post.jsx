import Avatar from './Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Post({post, poster, loading}) {
    return (
        <Card>
        <CardHeader
            avatar={
                <Avatar 
                    src={poster.src} 
                    alt={poster.name} 
                    loading={loading} 
                />
            }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={loading ? <Skeleton/> : poster.name}
        subheader={loading ? <Skeleton/> : post.date}
      />
        {loading ? 
             <Skeleton variant="rectangular"  height={194} /> : 
        <CardMedia
            component="img"
            maxHeight="500"
            image={post.src}
            alt={post.src}
        />}
        <CardContent>
        {loading ? 
        <>
            <Skeleton/> 
            <Skeleton/> 
            <Skeleton/> 
        </> :
        <Typography variant="body2" color="text.secondary">
            {post.content}
            </Typography>
            }
        </CardContent>
                {loading ? 
                <></> :
                // <Skeleton variant="rectangular"/> : 
        <CardActions disableSpacing>
            <IconButton>
                <FavoriteIcon sx={{color: post.likedByCurrUser ? 'red' : 'none'}}/>
            </IconButton>
        </CardActions>}
        </Card>
    );
}

export default Post;