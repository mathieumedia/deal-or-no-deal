import {
    Card, CardContent,  Typography
} from '@mui/material'


export default function PrizeCase (props){
    const {value, active} = props.case;
    
    const bgColor = () => {
        switch(props.gameStarted){
            case true:
                return 'gold'
            case false:
                return 'black'
            default:
                return 'black'
        }
    }
    return (
        <Card   
            sx={{
                height: '5vh', backgroundColor: bgColor(),
            }}
        >
            {props.gameStarted 
                ?    <CardContent>
                        <Typography 
                            sx={{
                                color: 'black',
                                textDecoration: active ? 'none' : 'line-through'
                        }}>
                            $ {value}
                        </Typography>
                    </CardContent>
                : null
            }
        </Card>
    )
}
