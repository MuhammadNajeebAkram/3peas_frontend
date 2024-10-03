import React from 'react';
import { Typography, Button } from '@mui/material';
import Image from 'next/image';


const AppButton = ({ text, variant = 'contained', color = 'primary', size = 'medium', onClick, disabled = false,
    mainWidth = 200, mainHeight = 50, fontSize = 18, fontColor = '#01411C', textAlign = 'center', 
    justifyContent = 'center', fontWeight = 'bold', iconName = 'english'
 }) =>
     {
  return (
    <div>
      <div style={{display: 'flex'}}>
      <Button
        sx={{
          width: mainWidth,
          minWidth: '100px',
          height: mainHeight,
          backgroundColor: '#fff',
          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)',
          justifyContent: justifyContent,
          textTransform: 'none',
          borderColor: '#01411C'
          // `polygon` defines the arrow shape
        }}
        variant={variant}
        onClick={onClick}
      >
        <Typography sx={{fontSize: fontSize, textAlign: textAlign, color: fontColor, fontWeight: fontWeight, textTransform: 'none'}}>
        {text}
        </Typography>
        
      </Button>
      <Image
          src= {`/Icons/subjects/${iconName}`} // Replace with your actual path
          alt={`${text} Icon`}
          width={50}  // Adjust the width as needed
          height={50} // Adjust the height as needed
          style={{ marginLeft: 'auto' }}
        />
      </div>
      

    </div>
      
      
   
  );
};

export default AppButton;
