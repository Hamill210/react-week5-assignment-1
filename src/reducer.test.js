import reducer from './reducer';

import {
  setRegions,
  updateLoading,
} from './actions';

import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('setLoading', () => {
    it('changes loading', () => {
      const state = reducer({
        loading: false,
      }, updateLoading(true));

      expect(state.loading).toBe(true);
    });
  });
});
