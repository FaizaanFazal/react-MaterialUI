import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    CardMedia,
    Grid
} from '@mui/material'

export const MuiCard = () => {
    return (
        <Grid rowSpacing={2} columnSpacing={2}  container my={4} justifyContent="center">
            <Grid item  >
                <Box width='300px' mx="auto">
                    <Card>
                        <CardMedia
                            component='img'
                            height='140'
                            image='https://source.unsplash.com/random'
                            alt='unsplash image'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                React
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                React is a JavaScript library for building user interfaces. React
                                can be used as a base in the development of single-page or mobile
                                applications.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size='small'>Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Grid item>
                <Box width='300px' mx="auto">
                    <Card>
                        <CardMedia
                            component='img'
                            height='140'
                            image='https://source.unsplash.com/random'
                            alt='unsplash image'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                React
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                React is a JavaScript library for building user interfaces. React
                                can be used as a base in the development of single-page or mobile
                                applications.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size='small'>Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Grid item >
                <Box width='300px' mx="auto">
                    <Card>
                        <CardMedia
                            component='img'
                            height='140'
                            image='https://source.unsplash.com/random'
                            alt='unsplash image'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                React
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                React is a JavaScript library for building user interfaces. React
                                can be used as a base in the development of single-page or mobile
                                applications.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size='small'>Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Grid item >
                <Box width='500px' mx="auto">
                    <Card>
                        <CardMedia
                            component='img'
                            height='240'
                            image='https://source.unsplash.com/random'
                            alt='unsplash image'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                React
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                React is a JavaScript library for building user interfaces. React
                                can be used as a base in the development of single-page or mobile
                                applications.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size='small'>Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    )
}