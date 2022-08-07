export interface TableListItem {
  key: number;
  disabled?: boolean;
  href: string;
  avatar: string;
  name: string;
  owner: string;
  desc: string;
  status: string;
  updatedAt: Date;
  createdAt: Date;
  progress: number;
}
export interface CommentType {
  id: string;
  author: Member;
  content: string;
  createdAt: Date;
  resolve: boolean;
  marker: MarkerType;
}
export interface AttachType {
  id: string;
  name: string;
  url: string;
  comments: CommentType[];
}

export interface MarkerType {
  id: string;
  color: string;
  title: string;
}

export interface TagType {
  key: string;
  label: string;
}

export interface NoticeType {
  id: string;
  title: string;
  logo: string;
  description: string;
  updatedAt: string;
  member: string;
  href: string;
  memberLink: string;
}

export interface CurrentUser {
  name: string;
  avatar: string;
  userid: string;
  notice: NoticeType[];
  email: string;
  signature: string;
  title: string;
  group: string;
  tags: TagType[];
  notifyCount: number;
  unreadCount: number;
  country: string;
  address: string;
  phone: string;
}

export interface CurrentTask {
  name: string;
  avatar: string;
  taskid: string;
  notice: NoticeType[];
  email: string;
  title: string;
  desc: string;
  attach: AttachType[];
}

export interface Member {
  avatar: string;
  name: string;
  id: string;
}

export interface ListItemDataType {
  id: string;
  owner: string;
  title: string;
  avatar: string;
  cover: string;
  status: 'normal' | 'exception' | 'active' | 'success';
  percent: number;
  logo: string;
  href: string;
  body?: any;
  updatedAt: number;
  createdAt: number;
  subDescription: string;
  description: string;
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
}
