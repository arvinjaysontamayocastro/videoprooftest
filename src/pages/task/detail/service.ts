import request from 'umi-request';

export async function queryCurrent() {
  return request('/api/currentTask');
}

export async function queryCurrentUser() {
  return request('/api/currentUser');
}

export async function queryFakeList(params: { count: number }) {
  return request('/api/fake_list', {
    params,
  });
}

export async function query() {
  return request('/api/tasks');
}

