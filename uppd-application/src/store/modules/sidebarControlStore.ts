import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialSidebarState, SelectedItemType } from '../../types';
import {
  filterScale,
  mapLayers,
  PointsOfInterest,
  currentYear,
} from '../../configuration/app-config';
import { groupPOI } from '../../services/sharedFunctions';

const sidebarControlInitialState: InitialSidebarState = {
  selectedYear: currentYear,
  selectedItem: null,
  selectedLayerId: mapLayers[0].colName,
  pointsOfInterest: groupPOI(PointsOfInterest),
  filterSlider: [filterScale.lowBound, filterScale.highBound],
  sliderReset: 0,
  desktopCollapse: false,
};

const sidebarSlice = createSlice({
  name: 'sidebarControl',
  initialState: sidebarControlInitialState,
  reducers: {
    setSelectedYear: (
      state,
      { payload }: PayloadAction<number | number[]>,
    ): void => {
      state.selectedYear = payload;
    },
    setSelectedItem: (
      state,
      { payload }: PayloadAction<SelectedItemType | null>,
    ): void => {
      state.selectedItem = payload;
    },
    setSelectedLayerId: (state, { payload }: PayloadAction<string>): void => {
      state.selectedLayerId = payload;
    },
    setPoiState: (state, { payload }: PayloadAction<string>): void => {
      state.pointsOfInterest[payload].selected = !state.pointsOfInterest[
        payload
      ].selected;
    },
    setFilterSlider: (
      state,
      { payload }: PayloadAction<[number, number]>,
    ): void => {
      state.filterSlider = [payload[0], payload[1]];
    },
    resetFilterSlider: (state): void => {
      state.filterSlider = [filterScale.lowBound, filterScale.highBound];
      state.sliderReset += 1;
    },
    setDesktopCollapse: (state, { payload }: PayloadAction<boolean>): void => {
      state.desktopCollapse = payload;
    },
  },
});

export const {
  setSelectedYear,
  setSelectedItem,
  setSelectedLayerId,
  setPoiState,
  setFilterSlider,
  resetFilterSlider,
  setDesktopCollapse,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
