import React from 'react';
import {
  Box,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  Grow,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const tiles = [
  {
    img:
      'https://images.ctfassets.net/xkm4d93o9wm6/2JkgfSNc9OwPSvTlH4NtOI/dc26f49242e661e7e91819f0c13606e4/04_Certified_Developer.png?w=224&h=224&fit=fill',
    title: 'Certified Developer Associate',
  },
  {
    img:
      'https://images.ctfassets.net/xkm4d93o9wm6/A5Mg9ExgYJyI9O1BarHxm/58cb9fe534e918ce923b0853d5e39663/21_Intro_to_Cloud_Computing.png?w=224&h=224&fit=fill',
    title: 'Introduction to Cloud Computing',
  },
  {
    img:
      'https://images.ctfassets.net/xkm4d93o9wm6/6w8lJloeioe9dXDxDfcWOr/a17a5d795cc06b5d04f4c3594942d967/aws-certified-cloud-practitioner-2-square.png?w=224&h=224&fit=fill',
    title: 'AWS Certified Cloud Practitioner',
  },
  {
    img:
      'https://images.ctfassets.net/xkm4d93o9wm6/2JkgfSNc9OwPSvTlH4NtOI/dc26f49242e661e7e91819f0c13606e4/04_Certified_Developer.png?w=224&h=224&fit=fill',
    title: 'Certified Developer Associate',
  },
  {
    img:
      'https://images.ctfassets.net/xkm4d93o9wm6/A5Mg9ExgYJyI9O1BarHxm/58cb9fe534e918ce923b0853d5e39663/21_Intro_to_Cloud_Computing.png?w=224&h=224&fit=fill',
    title: 'Introduction to Cloud Computing',
  },
  {
    img:
      'https://images.ctfassets.net/xkm4d93o9wm6/6w8lJloeioe9dXDxDfcWOr/a17a5d795cc06b5d04f4c3594942d967/aws-certified-cloud-practitioner-2-square.png?w=224&h=224&fit=fill',
    title: 'AWS Certified Cloud Practitioner',
  },
  {
    img:
      'https://images.ctfassets.net/xkm4d93o9wm6/2JkgfSNc9OwPSvTlH4NtOI/dc26f49242e661e7e91819f0c13606e4/04_Certified_Developer.png?w=224&h=224&fit=fill',
    title: 'Certified Developer Associate',
  },
  {
    img:
      'https://images.ctfassets.net/xkm4d93o9wm6/A5Mg9ExgYJyI9O1BarHxm/58cb9fe534e918ce923b0853d5e39663/21_Intro_to_Cloud_Computing.png?w=224&h=224&fit=fill',
    title: 'Introduction to Cloud Computing',
  },
  {
    img:
      'https://images.ctfassets.net/xkm4d93o9wm6/6w8lJloeioe9dXDxDfcWOr/a17a5d795cc06b5d04f4c3594942d967/aws-certified-cloud-practitioner-2-square.png?w=224&h=224&fit=fill',
    title: 'AWS Certified Cloud Practitioner',
  },
  {
    img:
      'https://images.ctfassets.net/xkm4d93o9wm6/2JkgfSNc9OwPSvTlH4NtOI/dc26f49242e661e7e91819f0c13606e4/04_Certified_Developer.png?w=224&h=224&fit=fill',
    title: 'Certified Developer Associate',
  },
  {
    img:
      'https://images.ctfassets.net/xkm4d93o9wm6/A5Mg9ExgYJyI9O1BarHxm/58cb9fe534e918ce923b0853d5e39663/21_Intro_to_Cloud_Computing.png?w=224&h=224&fit=fill',
    title: 'Introduction to Cloud Computing',
  },
  {
    img:
      'https://images.ctfassets.net/xkm4d93o9wm6/6w8lJloeioe9dXDxDfcWOr/a17a5d795cc06b5d04f4c3594942d967/aws-certified-cloud-practitioner-2-square.png?w=224&h=224&fit=fill',
    title: 'AWS Certified Cloud Practitioner',
  },
];

export const Dashboard = () => {
  return (
    <Box flex="1 0 auto" padding={1}>
      <Box mb={2}>
        <Typography component="h1" variant="h3">
          Hi, Sampson
        </Typography>
      </Box>
      {[0, 1, 2].map(index => (
        <Box mb={2}>
          <Typography component="h2" variant="h4">
            Your Courses
          </Typography>
          <GridList style={{ flexWrap: 'nowrap' }}>
            {tiles.map((tile, index2) => (
              <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                timeout={650}
              >
                <GridListTile
                  key={`${index}-${index2}-${tile.img}`}
                  style={{ width: '224px', height: '224px' }}
                >
                  <Link to="/video?componentId=123">
                    <img
                      src={tile.img}
                      alt={tile.title}
                      crossOrigin="anonymous"
                    />
                    <GridListTileBar title={tile.title} />
                  </Link>
                </GridListTile>
              </Grow>
            ))}
          </GridList>
        </Box>
      ))}
    </Box>
  );
};
