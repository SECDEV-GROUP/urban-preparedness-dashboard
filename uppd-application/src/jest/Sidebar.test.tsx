import { store } from '../store/store';
import {
  setPoiState,
  setSelectedYear,
  setDesktopCollapse,
  setFilterSlider,
} from '../store/modules/sidebarControlStore';
import { filterScale, currentYear } from '../configuration/app-config';
import mockPoiState from './data/mockPoiState.json';

test('Get Poi state', () => {
  store.dispatch(setPoiState('Hospitals'));

  const { SidebarControl } = store.getState();

  expect(SidebarControl.pointsOfInterest).toEqual(mockPoiState);
  expect(SidebarControl.pointsOfInterest.Hospitals.selected).toEqual(true);
});

test('Selecting year and filter', () => {
  store.dispatch(setSelectedYear(currentYear));
  store.dispatch(
    setFilterSlider([filterScale.lowBound, filterScale.highBound]),
  );

  const { SidebarControl } = store.getState();

  expect(SidebarControl.selectedYear).toEqual(currentYear);
  expect(SidebarControl.filterSlider).toEqual([
    filterScale.lowBound,
    filterScale.highBound,
  ]);
});

test('Desktop collapse', () => {
  store.dispatch(setDesktopCollapse(true));

  const { SidebarControl } = store.getState();

  expect(SidebarControl.desktopCollapse).toEqual(true);
});
