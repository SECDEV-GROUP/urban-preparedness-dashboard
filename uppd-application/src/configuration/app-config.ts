import {
  LinearChartDataType,
  MapLayerDataConfigType,
  PointsOfInterestType,
  RacialDistDataType,
  RadarChartDataType,
} from '../types';

export const mapAreaConfig = {
  zoomLevel: 9,
  mapCenter: [-118.2437, 34.0522], // [longitude, latitude]
  bounds: [
    [-119.24, 33.05], // Southwest Coordinates (bottom left)
    [-117.24, 35.05], // Northeast Coordinates (top right)
  ],
  style: {
    dark: 'mapbox://styles/jharnum/cknsxylu20drd17pbsf07gytm',
    light: 'mapbox://styles/jharnum/cknsy11dh0q3h18ql5qeh7f41',
    satellite: 'mapbox://styles/jharnum/cknsxxxqq0q1j17qohk46xz4l',
  },
};

export const filterScale = {
  lowBound: 0,
  highBound: 100,
  step: 1,
};

export const tractId = 'tractce10';
export const primaryScore = 'secdev_res_plr';
export const totalPopCol = 'tot_pop_e';

export const currentYear = 2019;
export const availableYears: number[] = [2019, 2018, 2017];
export const projectedYears: number[] = [];

export const mapLayers: MapLayerDataConfigType[] = [
  {
    title: 'Urban Pandemic Preparedness Index',
    colName: 'secdev_res_plr',
    subcategories: [],
  },
  {
    title: 'Economic Factors',
    colName: 'econ_fctrs_plr',
    subcategories: [
      {
        title: 'Percent living below poverty',
        colName: 'pvrty_pe',
      },
      { title: 'Percent unemployed', colName: 'unemp_pe' },
      { title: 'Income per capita', colName: 'pci_e' },
      { title: 'Percent without a high school diploma', colName: 'nohsdp_plr' },
    ],
  },
  {
    title: ' Demographic Factors',
    colName: 'demograph_fctrs_plr',
    subcategories: [
      { title: 'Percent 65 years or older', colName: 'age65p_pe' },
      { title: 'Percent 17 years or younger', colName: 'age18u_pe' },
      {
        title: 'Percent living with a disability',
        colName: 'disable_pe',
      },
      {
        title:
          'Percent of vulnerable households (single parent households with children less than 18 years old and single households with 65+ years living alone)',
        colName: 'vlnrbl_hhd_plr',
      },
    ],
  },
  {
    title: 'Social Factors',
    colName: 'social_fctrs_plr',
    subcategories: [
      {
        title:
          'Percent not from a racialized minority background (i.e. white, non-Hispanic)',
        colName: 'mnrty_pe',
      },
      { title: 'Percent who speak limited English', colName: 'limeng_pe' },
      { title: 'Percent of households without a vehicle', colName: 'noveh_pe' },
      {
        title: 'Percentage of occupied households with more people than rooms',
        colName: 'crowd_pe',
      },
      {
        title:
          'Percentage of households in structures with more than 10 units, mobile homes, group housing, etc.',
        colName: 'mlti_mob_pe',
      },
    ],
  },
  // {
  //   title: 'Quality of Life',
  //   colName: '',
  //   subcategories: [
  //     {
  //       title:
  //         'Air quality (coarse particle pollution, fine particle pollution, nitrogen dioxide', colName: ''
  //     },
  //     { title: 'Life expectancy at birth' , colName: ''},
  //     { title: 'Infant mortality',  colName: ''},
  //     { title: 'Suicides',  colName: ''},
  //   ],
  // },
  {
    title: 'Burden of Chronic Disease', // TODO: tooltip indicating these are all estimated crude prevalence values
    colName: 'chronic_fctrs_plr',
    subcategories: [
      { title: 'Arthritis', colName: 'arthritis_crudeprev' },
      { title: 'High Blood Pressure', colName: 'bphigh_crudeprev' },
      { title: 'Cancer', colName: 'cancer_crudeprev' },
      { title: 'Asthma', colName: 'asthma_crudeprev' },
      { title: 'Coronary Heart Disease', colName: 'chd_crudeprev' },
      {
        title: 'Chronic Obstructive Pulmonary Disease (COPD)',
        colName: 'copd_crudeprev',
      },
      { title: 'Diabetes', colName: 'diabetes_crudeprev' },
      { title: 'High Cholesterol', colName: 'highchol_crudeprev' },
      { title: 'Kidney Disease', colName: 'kidney_crudeprev' },
      { title: 'Stroke', colName: 'stroke_crudeprev' },
    ],
  },
  // {
  //   title: 'Infectious Disease (both Morbidity and Mortality)',
  //   colName: '',
  //   subcategories: [
  //     { title: 'COVID19' , colName: ''},
  //     { title: 'HIV incidence and prevalence' , colName: '' },
  //     { title: 'Varicella' , colName: ''},
  //     { title: 'Gonorrhea' , colName: ''},
  //     { title: 'Tuberculosis' , colName: ''},
  //     { title: 'Chlamydia' , colName: ''},
  //     { title: 'Syphilis' , colName: ''},
  //     { title: 'Pertussis', colName: '' },
  //   ],
  // },
  {
    title: 'Clinical Care and Lifestyle Choices', // TODO tooltip saying all values are estimated crude prevalence values
    colName: 'clncl_fctrs_plr',
    subcategories: [
      // {
      //  title: 'Distance to nearest health care (medical) facility',
      //  colName: 'hsptl_prxmty_plr',
      // },
      {
        title: 'Adults without health insurance',
        colName: 'access2_crudeprev',
      },
      { title: 'Binge drinking', colName: 'binge_crudeprev' },
      {
        title: 'Visited the doctor within the past year',
        colName: 'checkup_crudeprev',
      },
      { title: 'Cholesterol screening', colName: 'cholscreen_crudeprev' },
      { title: 'Colon screening', colName: 'colon_screen_crudeprev' },
      {
        title: 'Adult men up to date on core clinical services',
        colName: 'corem_crudeprev',
      },
      {
        title: 'Adult women up to date on core clinic services',
        colName: 'corew_crudeprev',
      },
      { title: 'Current smoking', colName: 'smking_crudeprev' },
      { title: 'Dental checkups', colName: 'dental_crudeprev' },
      {
        title: 'Mental health was "not good" for >14 days',
        colName: 'mhlth_crudeprev',
      },
      {
        title: 'Physical health was "not good" for >14 days',
        colName: 'phlth_crudeprev',
      },
      {
        title: 'Adults lacking leisure time physical activity',
        colName: 'lpa_crudeprev',
      },
      {
        title: 'Mammography use among women aged 50-74',
        colName: 'mammouse_crudeprev',
      },
      { title: 'Obesity', colName: 'obesity_crudeprev' },
      {
        title: 'Pap test usage among women aged 21-65',
        colName: 'paptest_crudeprev',
      },
      {
        title: 'Adults sleeping less than 7 hours a night',
        colName: 'sleep_crudeprev',
      },
      // { title: 'Number of hospital beds', colName: '' },
      // { title: 'Number of ICU beds' , colName: ''},
    ],
  },
  {
    title: 'Digital Preparedness',
    colName: 'digital_fctrs_plr',
    subcategories: [
      {
        title: 'Percent of households without a computer or computing device',
        // TODO: tooltip saying "Computing devices include a desktop, laptop, smartphone, tablet, or other portable wireless computer"
        colName: 'nodevice_pe',
      },
      {
        title: 'Percent of households with a cellular data plan',
        colName: 'mobildat_pe',
      },
      {
        title: 'Percent of households without internet',
        colName: 'nointrnt_pe',
      },
    ],
  },
];

export const radarChartConfig: RadarChartDataType = {
  enabled: true,
  fields: [
    { title: 'Econ. Factors', colName: 'econ_fctrs_plr' },
    { title: 'Disease Factors', colName: 'chronic_fctrs_plr' },
    { title: 'Demo. Factors', colName: 'demograph_fctrs_plr' },
    { title: 'Social Factors', colName: 'social_fctrs_plr' },
    {
      title: 'Lifestyle Factors',
      colName: 'clncl_fctrs_plr',
    },
    {
      title: 'Digital Prep.',
      colName: 'digital_fctrs_plr',
    },
  ],
};

// note line charts are based off of total population counts and not index score
export const linearCharts: LinearChartDataType[] = [
  {
    title: 'Age Distribution',
    chartId: 'ageDist',
    data: {
      totalPopulation: totalPopCol,
      secondaryCount: 'age65p_pe',
    },
    labels: {
      left: 'Under 65',
      right: 'Over 65',
    },
  },
  {
    title: 'Gender Distribution',
    chartId: 'genderDist',
    data: {
      totalPopulation: totalPopCol,
      secondaryCount: 'pop_ml_e',
    },
    labels: {
      left: 'Female',
      right: 'Male',
    },
  },
];

export const racialDistInfo: RacialDistDataType[] = [
  {
    title: 'African American',
    colName: 'african_american',
  },
  {
    title: 'White',
    colName: 'white',
  },
  {
    title: 'Asian',
    colName: 'asian',
  },
  {
    title: 'Hispanic or Latino',
    colName: 'hispanic_latino',
  },
  {
    title: 'American Indian or Alaska Native',
    colName: 'american_indian_alaska_native',
  },
  {
    title: 'Native Hawaiian or Other Pacific Islander',
    colName: 'native_hawaiian_other_pacific_islander',
  },
];

export const PointsOfInterest: PointsOfInterestType[] = [
  {
    title: 'Hospitals',
    endpoint: 'hospitals_and_medical_centers',
    icon: 'hospital-15',
    nameField: 'name',
  },
  {
    title: 'Libraries',
    endpoint: 'libraries',
    icon: 'library-11',
    nameField: 'name',
  },
  {
    title: 'Museums and Aquariums',
    endpoint: 'museums_and_aquariums',
    icon: 'museum-15',
    nameField: 'name',
  },
  {
    title: 'Metro Stations',
    endpoint: 'metro_stations',
    icon: 'rail-metro-15',
    nameField: 'name',
  },
  {
    title: 'Sports Venues',
    endpoint: 'sports_venues',
    icon: 'stadium-15',
    nameField: 'name',
  },
  {
    title: 'Golf Courses',
    endpoint: 'golf_courses',
    icon: 'golf-15',
    nameField: 'name',
  },
  // {
  //  title: 'City Parking Lots',
  //  endpoint: 'city_owned_parking_lots',
  //  icon: 'car-15',
  //  nameField: 'lotname',
  // },
  {
    title: 'Campgrounds',
    endpoint: 'campgrounds',
    icon: 'campsite-15',
    nameField: 'name',
  },
  {
    title: 'Recreation Centers',
    endpoint: 'recreation_centers',
    icon: 'soccer-15',
    nameField: 'name',
  },
];

export const sidebarText = '';
