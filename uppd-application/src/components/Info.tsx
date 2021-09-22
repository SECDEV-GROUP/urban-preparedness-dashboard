import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Theme, Typography, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/styles';
import { InfoBackgroundImage } from '../configuration/img-config';
import { componentSizing } from '../services/component-sizing';
import InfoPageContainer from './BaseUIComponents/InfoPageContainer';
import { AppState } from '../types';
import MethodPdf from '../assets/secdev_group_us_cities_methodology.pdf';  // *** CHANGE FOR ALTERNATIVE INDICES

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    PageContainer: {
      minHeight: `calc(100vh - ${componentSizing.appBarHeight})`,
      padding: '5rem 0',
    },
    SectionHeader: {
      marginTop: '1rem',
    },
    Button: {
      marginTop: '1rem',
    },
  }),
);

const Info: React.FC = () => {
  const classes = useStyles();

  const darkTheme: boolean = useSelector(
    (state: AppState) => state.AppControl.darkTheme,
  );
  
  // *** Changes to the text below will be needed for alternative indices
  return (
    <InfoPageContainer image={InfoBackgroundImage}>
      <Container>
        <Grid container spacing={1} className={classes.PageContainer}>
          <Grid item xs={12} md={6}>
            <h1 className={classes.SectionHeader}>Methodology</h1>
            <Typography variant="body1" gutterBottom>
              The urban pandemic preparedness and recovery index (the “Index”)
              is inspired by the US Centers for Disease Control (CDC) social
              vulnerability index. The Index is made-up of population-level
              vulnerabilities across selected categories. Index data is
              visualized on a dashboard and discrete variables are also visible
              using filters to track variations in time and space.
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Index is organized around seven basic themes. These include
              burden of disease, clinical care and lifestyle choices, quality of
              life, social and economic conditions, demographic factors and
              digital preparedness. These themes are proxied via 42 separate
              variables, each of which was selected on the basis of their
              representation of a dimension of vulnerability to infectious
              disease.
            </Typography>
            <Typography variant="body1" gutterBottom>
              The index and individual variables are ordered based on the
              relative ranking of each census tract to all other tracts in a
              given city. Put simply, metrics for a given tract are compared to
              all the other tracts. Tracts with higher scores are considered to
              be more resilient to future contagious disease outbreaks. Tracts
              with lower scores are more vulnerable.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Importantly, these resilience and vulnerability scores can be used
              to help anticipate areas that may be disproportionately affected
              by health crises, or indeed other shocks and stressors. By
              understanding how resilience and vulnerability are distributed
              across micro-areas of the city, decision-makers can more
              effectively allocate resources and services to prepare and
              recover.
            </Typography>
            <h1 className={classes.SectionHeader}>Future Developments</h1>
            <Typography variant="body1" gutterBottom>
              An upcoming version of the dashboard will feature simulation
              functions focusing on optimizing vaccination rolloutvaccine
              optimization, green recovery, pollution monitoring and mobility
              options for accessing health facilities. These simulations will
              allow planners to simulate possible use cases to better anticipate
              risks and improve interventions.
            </Typography>
            <Typography variant="body1" gutterBottom>
              A detailed review of the Index composition, calculation, and
              specific data sources used is available by clicking the
              Methodology Details button below.
            </Typography>
            <Button
              variant="outlined"
              className={classes.Button}
              component={RouterLink}
              to="/map"
              aria-label="go to map"
            >
              Go To Map
            </Button>{' '}
            <Button
              variant="outlined"
              className={classes.Button}
              href={MethodPdf}
              aria-label="View full documentation of our methods"
              target="_blank"
              download
            >
              Methodology Details
            </Button>
          </Grid>
        </Grid>
      </Container>
    </InfoPageContainer>
  );
};

export default Info;
