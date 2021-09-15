import { store } from '../store/store';
import { setDarkTheme, setSideNavOpen } from '../store/modules/appControlStore';

test('Test dark toggle', () => {
  store.dispatch(setDarkTheme(false));

  const { AppControl } = store.getState();

  expect(AppControl.darkTheme).toEqual(false);
});

test('Sidenav toggle', () => {
  store.dispatch(setSideNavOpen(true));

  const { AppControl } = store.getState();

  expect(AppControl.sideNavOpen).toEqual(true);
});
