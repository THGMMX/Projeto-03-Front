import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Copyright from './Copyright';

const Footer = (props) => {
  const { description, title } = props;

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 4,
        mt: 4.5,
        mb: 0,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          align="center"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
