import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

export default function SelectedCase(props) {

    return (
        <Card sx={{ 
            height: '10vh', width: '15vw',
            backgroundColor: 'gold'
        }}>
            <CardContent>
                <Typography variant="body2" color="black">
                    Selected Case
                </Typography>
                <Typography variant="h4" color="black">
                    {props.chosenCase.caseNumber}
                </Typography>
            </CardContent>
        </Card>
    );
}
