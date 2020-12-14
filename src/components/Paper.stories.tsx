import React from 'react';

import Grid from '../components/Grid';
import Paper from '../components/Paper';

export default {
  title: 'Components / Paper',
  component: Paper,
  parameters: {
    backgrounds: {
      default: 'app',
    },
  },
};

export const Default = () => (
  <Paper>
    <div style={{ padding: '1em' }}>
      Lorem ipsum dolor sit amet, idque nusquam adipisci qui no, vel dictas recusabo ut, recusabo
      scribentur liberavisse vix id. Vix summo dicant homero ne, mel at fabulas detraxit. Eu sed
      veri consul consequat, nam id novum facilis, quo noster constituam dissentiet ex. Scripta
      docendi constituam ad mei. Sint unum ex eos. Cum mollis nonumes temporibus ad, dicit consul
      efficiantur ea vel, qui possit iudicabit id.
    </div>
  </Paper>
);

export const Interactive = () => (
  <Grid cols={2}>
    <Paper interactive>
      <div style={{ padding: '1em' }}>
        <h1>One</h1>
      </div>
    </Paper>
    <Paper interactive>
      <div style={{ padding: '1em' }}>
        <h1>Two</h1>
      </div>
    </Paper>
  </Grid>
);
