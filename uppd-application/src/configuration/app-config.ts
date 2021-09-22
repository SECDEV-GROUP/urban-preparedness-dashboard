import {
  LinearChartDataType,
  MapLayerDataConfigType,
  PointsOfInterestType,
  RacialDistDataType,
  RadarChartDataType,
} from '../types';

export const mapAreaConfig = {
  zoomLevel: 9,
  mapCenter: [***MAP_CENTER***], // [longitude, latitude]
  bounds: [
    [***SOUTHWEST_COORDS***], // Southwest Coordinates (bottom left)
    [***NORTHEAST_COORDS***], // Northeast Coordinates (top right)
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

export const tractId = '***REGION_ID_COLUMN_NAME***';
export const primaryScore = '***PRIMARY_SCORE_COLUMN_NAME***';
export const totalPopCol = '***POPULATION_COLUMN_NAME***;

export const currentYear = 2019;
export const availableYears: number[] = [2019, ***ADDITIONAL_YEARS_OR_REMOVE***];
export const projectedYears: number[] = [];

export const mapLayers: MapLayerDataConfigType[] = [
  {
    title: '***MAIN_INDEX***',
    colName: '***MAIN_INDEX_COLUMN_NAME***',
    subcategories: [],
  },
  {
    title: '***SUB_INDEX_1***',
    colName: '***SUB_INDEX_COLUMN_NAME***',
    subcategories: [
      {
        title: '***SUBCATEGORY_TO_SUB_INDEX_1***',
        colName: '***SUB_INDEX_COLUMN_NAME***',
      },
      {
        title: '***SUBCATEGORY_TO_SUB_INDEX_1***',
        colName: '***SUB_INDEX_COLUMN_NAME***',
      },
    ],
  },
  {
    title: '***SUB_INDEX_2***',
    colName: '***SUB_INDEX_COLUMN_NAME***',
    subcategories: [
      {
        title: '***SUBCATEGORY_TO_SUB_INDEX_2***',
        colName: '***SUB_INDEX_COLUMN_NAME***',
      },
      {
        title: '***SUBCATEGORY_TO_SUB_INDEX_2***',
        colName: '***SUB_INDEX_COLUMN_NAME***',
      },
    ],
  },
  // *** AS MANY ADDITIONAL SUB INDICES AS REQUIRED MAY BE INSERTED HERE ***
];

export const radarChartConfig: RadarChartDataType = {
  enabled: true,
  fields: [
    { title: '***SUB_INDEX_1***', colName: '***SUB_INDEX_COLUMN_NAME***' },
    { title: '***SUB_INDEX_2***', colName: '***SUB_INDEX_COLUMN_NAME***' },
    // *** AS MANY ADDITIONAL SUB INDICES AS REQUIRED MAY BE INSERTED HERE ***
  ],
};

// line charts are based off of total population counts and not index score
export const linearCharts: LinearChartDataType[] = [
  {
    title: '***LINE_CHART_TITLE***',
    chartId: '***SINGLE_WORD_ID***', // eg: ageDist
    data: {
      totalPopulation: totalPopCol,
      secondaryCount: '***COLUMN_NAME***',
    },
    labels: {
      left: '***Label for group NOT in COLUMN_NAME***',
      right: '***Label for group represented by data from COLUMN_NAME***',
    },
  },
  // *** AS MANY ADDITIONAL LINE CHARTS AS REQUIRED MAY BE INSERTED HERE ***
];

// may be used for any demographic data in percentages, simply displays title and percent value
export const racialDistInfo: RacialDistDataType[] = [
  {
    title: '***GROUP_1***',
    colName: '***COLUMN_WITH_PERCENT_VALUE_FOR_GROUP_1***',
  },
  {
    title: '***GROUP_2***',
    colName: '***COLUMN_WITH_PERCENT_VALUE_FOR_GROUP_2***',
  },
  // *** AS MANY ADDITIONAL GROUPS AS REQUIRED MAY BE INSERTED HERE ***
];

// These must be added as separate data files, with endpoint = the name of the csv without the extension (.csv)
export const PointsOfInterest: PointsOfInterestType[] = [
  {
    title: '***POI_1***',
    endpoint: '***NAME_OF_FILE_FOR_POI_1***',
    icon: '***MAKI_ICON_NAME***',
    nameField: '***COLUMN_WITH_NAME_OF_POI',
  },
  {
    title: '***POI_2***',
    endpoint: '***NAME_OF_FILE_FOR_POI_2***',
    icon: '***MAKI_ICON_NAME***',
    nameField: '***COLUMN_WITH_NAME_OF_POI***',
  },
  
];

// *** ADDITIONAL SIDEBAR TEXT (optional, can leave as '' if not desired) ***
export const sidebarText = '';
