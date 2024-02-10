import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// import Cradimg from '../images/card.jpeg'
import Cardimg from '../images/card.png'
const Cards = ({ check }) => {
  console.log(`ajay${check}`);
  const theme = useTheme();

  return (
    <Card sx={{
      borderRadius: 3,
      display: 'flex',
      backgroundColor: check ? "#191919" : "#f5f5f5",
      justifyContent: "space-between",
      mt: "30px",
      mr: "30px",
      ml: "30px",

      '@media (min-width: 900px)': {
        width: "800px",
        margin: "auto",
        mt: "30px"
      },

    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', mr: 1 }}>
        <CardContent >
          <Box
            sx={{

              backgroundColor: check ? "#3b3429" : "#f6efe4",
              pl: "10px",
              pr: "10px",
              pt: "5px",
              pb: "5px",
              borderRadius: 2,
              display: "inline-block"
            }}
          >
            <Typography
              sx={{
                fontSize: 17,
                fontWeight: 500,
                color: "#F6A62C",
              }}
            >
              ensuring good.
            </Typography>
          </Box>
          <Typography
            sx={{
              mt: 1,
              fontSize: 20,
              fontWeight: 600,
              color: check ? "white" : "black",
            }}>
            Feel free to adjust the text color or background color values to achieve the desired visual effect while ensuring good readability.

          </Typography>
        </CardContent>

        <Box sx={{
          pl: 2,
          pb: 1,
        }}>
          <Box
            sx={{
              border: "1px solid #F6A62C",
              borderRadius: 1,
              display: "inline-block",
              pl: "10px",
              pr: "10px",
              pt: "3px",
              pb: "3px",
            }}
          >
            <Typography
              sx={{

                fontWeight: 500,
                fontSize: 14,
                color: "#F6A62C",


              }}
            >
              Deadline 19 Feb.
            </Typography>

          </Box>

        </Box>

        <Typography
          sx={{
            fontSize: 13,
            color: "#a89898",
            fontWeight: 600,
            pl: 2, pb: 1, pt: 1
          }}
        >By Parthana | 8 Feb, 2024</Typography>

      </Box>
      {/* <Box>
        <img src={Cardimg} alt="" />

      </Box> */}
      <CardMedia
        component="img"
        sx={{
          height: 120,
          width: 120,
          borderRadius: 2,
          mt: 2.4,
          mr: 2.4,
          '@media (max-width: 900px)': {
            height: "100px",
            width: "100px",
          },


        }}
        image={Cardimg}
        alt="Live from space album cover"
      />

    </Card>
  );
}
export default Cards;