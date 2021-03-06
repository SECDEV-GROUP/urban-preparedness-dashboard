import { PointsOfInterestStoreType } from '../index';
import { SelectedItemType } from './selectedItem.type';

export interface InitialStateAppControl {
  darkTheme: boolean;
  sideNavOpen: boolean;
}

export interface InitialStateMapControl {
  satelliteView: boolean;
}

export interface InitialSidebarState {
  selectedYear: number | number[];
  selectedItem: SelectedItemType | null;
  selectedLayerId: string;
  pointsOfInterest: PointsOfInterestStoreType;
  filterSlider: [number, number];
  sliderReset: number;
  desktopCollapse: boolean;
}

export interface InitialAvailableYearsState {
  availableYears: number[];
  status: string;
  error: boolean;
  loaded: boolean;
}

export interface InitialHistogramDataState {
  columnData: (number | null)[];
  status: string;
  error: boolean;
  loaded: boolean;
}

export interface AppState {
  AppControl: InitialStateAppControl;
  AvailableYears: InitialAvailableYearsState;
  HistogramData: InitialHistogramDataState;
  MapControl: InitialStateMapControl;
  SidebarControl: InitialSidebarState;
}
