import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Slider } from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from '@material-ui/core/styles';
import { setSelectedYear } from '../../../store/modules/sidebarControlStore';
import { AppState } from '../../../types';

interface MarksType {
  value: number;
  label: number;
}

const DateSlider: React.FC = () => {
  const dispatch = useDispatch();

  const selectedYear: number | number[] = useSelector(
    (state: AppState) => state.SidebarControl.selectedYear,
  );

  const availableYears: number[] = useSelector(
    (state: AppState) => state.AvailableYears.availableYears,
  );

  const [value, setValue] = React.useState<number | number[]>(selectedYear);
  const [marks, setMarks] = React.useState<MarksType[]>([]);

  useEffect(
    () => {
      const lastYear = availableYears[availableYears.length - 1];
      const newMarks: MarksType[] = [];

      // create an array of marks
      availableYears.forEach(year => {
        newMarks.push({
          value: year,
          label: year,
        });
      });

      // set the slider and store value to the last available date
      setValue(lastYear);
      dispatch(setSelectedYear(lastYear));

      // set the marks in state
      setMarks(newMarks);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [availableYears],
  );

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | number[],
  ) => {
    setValue(newValue);
  };

  const commitChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | number[],
  ) => {
    dispatch(setSelectedYear(newValue));
  };

  function valuetext(value: number) {
    return `${value}`;
  }
  const theme = useTheme();

  const muiTheme = createMuiTheme({
    overrides: {
      MuiSlider: {
        mark: {
          display: 'none',
        },
        track: {
          color: theme.palette.primary.main,
        },
        rail: {
          color: theme.palette.primary.main,
        },
        thumb: {
          color: theme.palette.primary.main,
        },
        markLabel: {
          color: theme.palette.text.secondary,
          marginTop: '-40px',
        },
        markLabelActive: {
          color: theme.palette.text.primary,
        },
      },
    },
  });

  return (
    <div>
      <h2 className="main-header">Select Year</h2>
      <Box px={3} mb={-3} mt={4}>
        <ThemeProvider theme={muiTheme}>
          {marks.length > 0 && (
            <Slider
              id="DateSlider"
              value={value}
              track={false}
              getAriaValueText={valuetext}
              onChange={handleChange}
              onChangeCommitted={commitChange}
              aria-labelledby="discrete-slider-custom"
              step={1}
              max={marks[marks.length - 1].value}
              min={marks[0].value}
              valueLabelDisplay="off"
              marks={marks}
            />
          )}
        </ThemeProvider>
      </Box>
    </div>
  );
};
export default DateSlider;
