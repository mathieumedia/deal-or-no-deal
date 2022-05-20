import {
    Card, CardContent, Typography
} from '@mui/material'


export default function SuitCase (props){
    const {value, caseNumber, lockedIn, selected} = props.case;

    const color = () => {
        if (selected) {
            return 'gold'
        } else if(lockedIn === true){
            return 'blue'
        } else {
            return 'black'
        }
    }
    return (
        <Card   
            onClick={() => props.onCaseSelection(caseNumber)}
            sx={{
                backgroundColor: color(), 
                height: '5vh', 
                '&:hover': {cursor: 'pointer'}
            }}
        >
            {props.gameStarted 
                ?   <CardContent>
                        <Typography sx={{color: 'blacks'}}>{(selected && !lockedIn) ? value : caseNumber}</Typography>
                    </CardContent>
                : null
            }
        </Card>
    )
}
