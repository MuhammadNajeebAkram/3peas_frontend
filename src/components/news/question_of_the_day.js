import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"
import Grid   from "@mui/material/Grid2"

export const QuestionOfTheDay = (props) => {
    return(
        <>
        <div>
            <Typography sx={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
                Question of the Day
            </Typography>
        </div>
        <Typography sx = {{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
        <div style={{marginTop: 10}}>
            The _____ element is a container for metadata:
        </div>
        </Typography>
        
        <Typography sx = {{fontSize: 12, color: '#fff'}}>

        
        <RadioGroup>
        <div>
            <Grid container item sm = {12} md = {6}>
                <Grid size = {{sm: 12, md: 6}}>
                  <FormControlLabel value={'A'} control={<Radio />} label = '<html>' /> 
                </Grid>
                <Grid size = {{sm: 12, md: 6}}>
                <FormControlLabel value={'B'} control={<Radio />} label = '<Title>' /> 
               
                </Grid>
                <Grid size = {{sm: 12, md: 6}}>
                <FormControlLabel value={'C'} control={<Radio />} label = '<head>' /> 
                
                </Grid>
                <Grid size = {{sm: 12, md: 6}}>
                <FormControlLabel value={'D'} control={<Radio />} label = '<body>' />
                
                </Grid>

            </Grid>
        </div>

        </RadioGroup>
        </Typography>
        </>
    )
}