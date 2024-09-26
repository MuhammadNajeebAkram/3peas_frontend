import React from 'react';
import {Button, Box} from '@mui/material';
import { color, textAlign } from '@mui/system';
import Image from 'next/image';
import { AlignVerticalCenter } from '@mui/icons-material';
const BoardButton = ({text, fontSize = 25, fontWeight = 'bold', iconName = 'lahore.png', width = 350, 
    fontColor = '#fff', onClick
}) => {

    const ButtonStyle = {
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: fontColor,
        
        
    };
    return(
        <div style={{display: 'flex'}}>
            
            <Button variant='container' style={ButtonStyle} onClick={onClick}>
            <div sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
          src= {`/Icons/boards/${iconName}`} // Replace with your actual path
          alt={`${text} Icon`}
          width={50}  // Adjust the width as needed
          height={50} // Adjust the height as needed
          style={{ justifyContent: 'flex-start' }}
        />
        </div >
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        {text}
      </div>
            </Button>
        </div>

    );
};
export default BoardButton;