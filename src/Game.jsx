import {useState} from 'react'
import {
    useTheme,
    Card, CardContent, Grid, Stack, styled,
    Container as _Container, Paper, Typography, Button
} from '@mui/material'
import Masonry from '@mui/lab/Masonry';

//#region ------------------ Game Components ------------------
import PrizeCase from './components/PrizeCase'
import SuitCase from './components/SuitCase'
import SelectedCase from './components/SelectedCase'
import Popup from './components/Popup';
import ChosenCaseSelectionUI from './components/ChosenCaseSelectionUI';
import MultiSelect from './components/MultiSelect'
//#endregion --------------- Game Components ------------------

//#region ------------------ Game Constants -------------------
const caseValues = [
    .01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500,
    750, 1000, 5000, 10000, 25000, 50000,75000, 100000, 
    200000, 300000, 400000, 500000, 750000, 1000000
]

function initCases(){
    return Array(caseValues.length).fill(0).map((_, i) => {
        return {
            caseNumber: i + 1,
            lockedIn: false,
            selected: false,
            active: true
        }
    })
}
function initPrizes(){
    return Array(caseValues.length).fill(0).map((_, i) => {
        return {
            value: caseValues[i],
            active: true
        }
    })
}
//#endregion ------------------ Game Constants ------------------

//#region ------------ Styles  ------------------------------
const Div = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.backgroundDark,
    paddingTop: theme.spacing(1),
    height: '100vh',
    maxHeight: '100vh',
    maxWidth: '100vw',
    width: '100vw',
    display: 'block'
}))

const Container = styled(_Container)(({theme}) => ({
    borderRadius: 10,
    backgroundColor: theme.palette.container
}))
// #endRegion

export default function Game() {
    const theme = useTheme();
    const [gameStarted, setGameStarted ] = useState(false)
    const [cases, setCases] = useState(initCases())
    const [prizes, setPrizes] = useState(initPrizes())
    const [chosenCase, setChosenCase] = useState(null);
    const [popup, setPopup] = useState(false);
    const [round, setRound] = useState(null)

    const onCaseSelection = (caseNumber) => {
        // const selected = cases.find(c => c.caseNumber === caseNumber);
        // if(chosenCase === null) {
        //     selected.lockedIn = true;
        //     setCases(cases.map(c => c.caseNumber === caseNumber ? selected : c)) 
        //     setChosenCase(selected)
        // } else {
        //     selected.selected = true;
        //     setCases(cases.map(c => c.caseNumber === caseNumber ? c.selected = true : c))
        // }
    }

    const onChosenCase = (selection) => {
        setChosenCase(selection)
        //setPopup(false)
        setRound("Round 1");
        // setInterval(() => {
        //     setPopup(true)
        // }, 3000)
    }

    const onGameStart = () => {
        setGameStarted(true);
        setPopup(true);
        setRound("Case Selection")
    }

    const handleGameRound = () => {
        switch(round) {
            case "Case Selection":
                return <ChosenCaseSelectionUI 
                    cases={cases} 
                    onChosenCase={onChosenCase}
                />  
            case "Round 1": 
                return <MultiSelect 
                    cases={cases} 
                    max={6}
                />  
            default:
                return null
        }
    }

    return (
        <Div>
            <Container component={Paper} maxWidth="md" sx={{borderRadius: 10}} >
                <Grid container spacing={2} sx={{my: 'auto'}}>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="h6"> Deal or No Deal </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <Stack spacing={2}>
                            {chosenCase 
                                ?   <SelectedCase chosenCase={chosenCase} gameStarted={gameStarted}/>
                                : null
                            }

                            <Masonry columns={5}>
                                {cases?.map((caseObj, i) => ((
                                    <SuitCase 
                                        gameStarted={gameStarted} key={i} 
                                        case={caseObj} chosenCase={chosenCase}
                                        onCaseSelection={onCaseSelection}/>
                                )))} 
                            </Masonry>

                            {!gameStarted 
                                ?  <Button 
                                        variant='contained' 
                                        onClick={onGameStart}
                                        sx={{height: '20vh', backgroundColor:'gold'}}>
                                            Start Game
                                    </Button>
                                : null
                            }
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <Masonry columns={2}>
                            {prizes?.map((caseObj, i) => ((
                                <PrizeCase 
                                    case={caseObj} key={i} gameStarted={gameStarted} />
                            )))} 
                        </Masonry>
                    </Grid>
                </Grid>
                <Popup open={popup}>
                    {handleGameRound()}
                </Popup>
            </Container>
        </Div>
    )
}
