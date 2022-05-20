import {useState} from 'react';
import { Stack, Typography, Card, CardContent, Button } from '@mui/material';
import Masonry from '@mui/lab/Masonry'

export default function MultiSelect(props){
    const [cases, setCases] = useState(props.cases)
    const [selections, setSelections] = useState([]);

    function getColor(obj, attribute){
        const select = cases.find(c => c.caseNumber === obj.caseNumber)

        if(attribute === 'text' && select){
            return 'black'
        }else if(attribute === 'text' && !select) {
            return 'white'
        }

        if(attribute === 'bg'){
            return 'black'
        }
    }

    function handleSelection(obj){
        const select = selections.find(c => c.caseNumber === obj.caseNumber)

        if(!select){
            const _selections = selections;
            _selections.push(obj)
            // setSelections(_selections)
        }
    }

    return (
        <Stack spacing={1} sx={{width: '50vw'}}>
            <Typography variant="h5" sx={{color: 'white'}}>{`Select ${props.max} Cases`}</Typography>
            <Masonry columns={6}>
                {props.cases?.map(caseObj => ((
                    <Card   
                        key={caseObj.caseNumber}
                        onClick={handleSelection(caseObj)}
                        sx={{
                            backgroundColor: getColor(caseObj, "bg"), 
                            height: '5vh', 
                            '&:hover': {cursor: 'pointer'}
                        }}
                    >
                        <CardContent sx={{justifyContent: 'center'}}>
                            <Typography sx={{color: getColor(caseObj, "text")}} align='center'>{caseObj.caseNumber}</Typography>
                        </CardContent>
                    </Card>
                )))} 
            </Masonry>
            <Button 
                variant='contained'
                sx={{backgroundColor: 'gold', color: 'black'}}
                //onClick={() => props.onChosenCase(selection)}
            >
                Confirm
            </Button>
        </Stack>
    )
}
