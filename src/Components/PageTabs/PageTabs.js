import './PageTabs.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormData from './FormData/FormData';
import Charts from './Charts/Charts';

const PageTabs = (
  {
    formData,
    formAction,
    chartData
  }
  ) => {
    return (
      <div className='page-tabs'>
        <BasicTabs
        formData={formData}
        formAction={formAction}
        chartData={chartData}
        />
      </div>
    )
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs(
  {
    formData,
    formAction,
    chartData
  }
) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Form" {...a11yProps(0)} />
          <Tab label="Visualize" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FormData
        formData={formData}
        formAction={formAction}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Charts
          chartData={chartData}
        />
      </CustomTabPanel>
    </Box>
  );
}


export default PageTabs;