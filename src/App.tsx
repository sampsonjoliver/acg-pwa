import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Screen } from './components/Screen';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  Paper
} from '@material-ui/core';

const App: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const tiles = [
    {
      img:
        'https://images.ctfassets.net/xkm4d93o9wm6/2JkgfSNc9OwPSvTlH4NtOI/dc26f49242e661e7e91819f0c13606e4/04_Certified_Developer.png?w=224&h=224&fit=fill',
      title: 'Certified Developer Associate'
    },
    {
      img:
        'https://images.ctfassets.net/xkm4d93o9wm6/A5Mg9ExgYJyI9O1BarHxm/58cb9fe534e918ce923b0853d5e39663/21_Intro_to_Cloud_Computing.png?w=224&h=224&fit=fill',
      title: 'Introduction to Cloud Computing'
    },
    {
      img:
        'https://images.ctfassets.net/xkm4d93o9wm6/6w8lJloeioe9dXDxDfcWOr/a17a5d795cc06b5d04f4c3594942d967/aws-certified-cloud-practitioner-2-square.png?w=224&h=224&fit=fill',
      title: 'AWS Certified Cloud Practitioner'
    },
    {
      img:
        'https://images.ctfassets.net/xkm4d93o9wm6/2JkgfSNc9OwPSvTlH4NtOI/dc26f49242e661e7e91819f0c13606e4/04_Certified_Developer.png?w=224&h=224&fit=fill',
      title: 'Certified Developer Associate'
    },
    {
      img:
        'https://images.ctfassets.net/xkm4d93o9wm6/A5Mg9ExgYJyI9O1BarHxm/58cb9fe534e918ce923b0853d5e39663/21_Intro_to_Cloud_Computing.png?w=224&h=224&fit=fill',
      title: 'Introduction to Cloud Computing'
    },
    {
      img:
        'https://images.ctfassets.net/xkm4d93o9wm6/6w8lJloeioe9dXDxDfcWOr/a17a5d795cc06b5d04f4c3594942d967/aws-certified-cloud-practitioner-2-square.png?w=224&h=224&fit=fill',
      title: 'AWS Certified Cloud Practitioner'
    },
    {
      img:
        'https://images.ctfassets.net/xkm4d93o9wm6/2JkgfSNc9OwPSvTlH4NtOI/dc26f49242e661e7e91819f0c13606e4/04_Certified_Developer.png?w=224&h=224&fit=fill',
      title: 'Certified Developer Associate'
    },
    {
      img:
        'https://images.ctfassets.net/xkm4d93o9wm6/A5Mg9ExgYJyI9O1BarHxm/58cb9fe534e918ce923b0853d5e39663/21_Intro_to_Cloud_Computing.png?w=224&h=224&fit=fill',
      title: 'Introduction to Cloud Computing'
    },
    {
      img:
        'https://images.ctfassets.net/xkm4d93o9wm6/6w8lJloeioe9dXDxDfcWOr/a17a5d795cc06b5d04f4c3594942d967/aws-certified-cloud-practitioner-2-square.png?w=224&h=224&fit=fill',
      title: 'AWS Certified Cloud Practitioner'
    },
    {
      img:
        'https://images.ctfassets.net/xkm4d93o9wm6/2JkgfSNc9OwPSvTlH4NtOI/dc26f49242e661e7e91819f0c13606e4/04_Certified_Developer.png?w=224&h=224&fit=fill',
      title: 'Certified Developer Associate'
    },
    {
      img:
        'https://images.ctfassets.net/xkm4d93o9wm6/A5Mg9ExgYJyI9O1BarHxm/58cb9fe534e918ce923b0853d5e39663/21_Intro_to_Cloud_Computing.png?w=224&h=224&fit=fill',
      title: 'Introduction to Cloud Computing'
    },
    {
      img:
        'https://images.ctfassets.net/xkm4d93o9wm6/6w8lJloeioe9dXDxDfcWOr/a17a5d795cc06b5d04f4c3594942d967/aws-certified-cloud-practitioner-2-square.png?w=224&h=224&fit=fill',
      title: 'AWS Certified Cloud Practitioner'
    }
  ];

  return (
    <Screen height="100vh" display="flex" flexDirection="column">
      <Box bgcolor="#048264" flex="1 0 auto" padding={1} pb="56px">
        <Box mb={2}>
          <Typography component="h1" variant="h3">
            Hi, Sampson
          </Typography>
        </Box>
        {[0, 1, 2].map(() => (
          <Box mb={2}>
            <Typography component="h2" variant="h4">
              Your Courses
            </Typography>
            <GridList style={{ flexWrap: 'nowrap' }}>
              {tiles.map(tile => (
                <GridListTile
                  key={tile.img}
                  style={{ width: '224px', height: '224px' }}
                >
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar title={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </Box>
        ))}
      </Box>
      <Box position="fixed" bottom={0} width="100%">
        <Paper elevation={8}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
          >
            <BottomNavigationAction label="Recents" />
            <BottomNavigationAction label="Favorites" />
            <BottomNavigationAction label="Nearby" />
          </BottomNavigation>
        </Paper>
      </Box>
    </Screen>
  );
};

export default App;
