import {useState} from 'react';
import { Stack, Typography, Card, CardContent, Button } from '@mui/material';
import Masonry from '@mui/lab/Masonry'

export default function ChoseCaseSelectionUI(props){

    const [selection, setSelection] = useState(null);

    function bgColor(obj){
        return selection?.caseNumber === obj.caseNumber ? 'gold' : 'black';
    }
    function textColor(obj){
        return selection?.caseNumber === obj.caseNumber ? 'black' : 'white';
    }

    return (
        <Stack spacing={1} sx={{width: '50vw'}}>
            <Typography variant="h5" sx={{color: 'white'}}>Select Your Main Case</Typography>
            <Masonry columns={6}>
                {props.cases?.map(caseObj => ((
                    <Card   
                        key={caseObj.caseNumber}
                        onClick={() => setSelection(caseObj)}
                        sx={{
                            backgroundColor: bgColor(caseObj), 
                            height: '5vh', 
                            '&:hover': {cursor: 'pointer'}
                        }}
                    >
                        <CardContent sx={{justifyContent: 'center'}}>
                            <Typography sx={{color: textColor(caseObj)}} align='center'>{caseObj.caseNumber}</Typography>
                        </CardContent>
                    </Card>
                )))} 
            </Masonry>
            <Button 
                variant='contained'
                sx={{backgroundColor: 'gold', color: 'black'}}
                onClick={() => props.onChosenCase(selection)}
            >
                Confirm
            </Button>
        </Stack>
    )
}
