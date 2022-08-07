export default {
  'GET  /api/currentTask': {
    name: 'Promotional Video',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    taskid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    notifyCount: 12,
    unreadCount: 11,
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
    desc: 'This is a description',
    attach: [
      {
        id: '0001',
        name: 'This is attach file 0001',
        url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
        comments: [
          {
            id: '10001',
            author: {
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
              name: 'Author 1',
              id: 'member1',
            },
            content: 'Please update this lorem ipsum',
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2).getTime(),
            resolve: false,
            marker: {
              id: '1',
              color: '#4dbd74',
              title: 'This is new marker'
            }
          },
          {
            id: '10002',
            author: {
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              name: 'Author 2',
              id: 'member2',
            },
            content: 'Please update this lorem ipsum',
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2).getTime(),
            resolve: false,
            marker: {
              id: '2',
              color: '#f86c6b',
              title: 'This is new marker 2'
            }
          },
        ],
      },
      {
        id: '0002',
        name: 'This is attach file 0002',
        url: 'https://www.youtube.com/watch?v=xL2F-pkrejc',
        comments: [
          {
            id: '10003',
            author: {
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              name: 'Author 3',
              id: 'member3',
            },
            content: 'Please update this lorem ipsum',
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2).getTime(),
            resolve: false,
            marker: {
              id: '3',
              color: '#ffc107',
              title: 'This is new marker 3'
            }
          },
        ],
      }
    ]
  },
};