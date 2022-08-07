import request from '@/utils/request';
import type { TableListParams, TableListItem } from './data.d';

export async function queryTask(params?: TableListParams) {
  return request('/api/tasks', {
    params,
  });
}

export async function removeTask(params: { key: number[] }) {
  return request('/api/tasks', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addTask(params: TableListItem) {
  return request('/api/tasks', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateTask(params: TableListParams) {
  return request('/api/tasks', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
