import type { Effect, Reducer } from 'umi';
import type { CurrentTask, CurrentUser } from './data.d';
import { queryCurrent, queryCurrentUser, query as queryTasks } from './service';

export interface ModalState {
  currentTask?: Partial<CurrentTask>;
  currentUser: Partial<CurrentUser>;
  isLoading?: boolean;
}

export interface ModelType {
  namespace: string;
  state: ModalState;
  effects: {
    fetchCurrent: Effect;
    fetch: Effect;
    fetchCurrentUser: Effect;
  };
  reducers: {
    saveCurrentTask: Reducer<ModalState>;
    changeLoading: Reducer<ModalState>;
    saveCurrentUser: Reducer<ModalState>;
  };
}

const Model: ModelType = {
  namespace: 'taskDetail',

  state: {
    currentUser: {},
    currentTask: {},
    isLoading: false,
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryTasks);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentTask',
        payload: response,
      });
    },
    *fetchCurrentUser(_, { call, put }) {
      const response = yield call(queryCurrentUser);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },

  reducers: {
    saveCurrentTask(state, action) {
      return {
        ...(state as ModalState),
        currentTask: action.payload || {},
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...(state as ModalState),
        currentUser: action.payload || {},
      };
    },
    changeLoading(state, action) {
      return {
        ...(state as ModalState),
        isLoading: action.payload,
      };
    },
  },
};

export default Model;
