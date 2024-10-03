import React from 'react';
import {Button} from '@mui/material';
import Image from 'next/image';

const BoardButton = ({text, fontSize = 18, fontWeight = 'bold', iconName = 'lahore.png', width = 350, 
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