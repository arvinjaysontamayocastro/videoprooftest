import type { AttachType, CurrentTask, CurrentUser } from './data.d';
import { Card, Divider, Drawer, List, Menu } from 'antd';
import { FormattedMessage, connect } from 'umi';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import ProForm, {
  ProFormUploadButton,
} from '@ant-design/pro-form';
import React, { Component } from 'react';

import AttachView from './components/AttachView';
import type { Dispatch } from 'umi';
import ReactPlayer from 'react-player/youtube';

// import styles from './style.less';

const { Item } = Menu;

interface TaskDetailProps {
  dispatch: Dispatch;
  currentTask: CurrentTask;
  currentUser: CurrentUser;
  currentAttach: AttachType;
}
interface TaskDetailState {
  menuMap: Record<string, React.ReactNode>;
  showComment: boolean;
  updateModalVisible: boolean;
  currentAttach: AttachType;
}

class TaskDetail extends Component<TaskDetailProps, TaskDetailState> {
  main: HTMLDivElement | undefined = undefined;

  constructor(props: TaskDetailProps) {
    super(props);
    const menuMap = {
      base: (
        <FormattedMessage id="accountandsettings.menuMap.basic" defaultMessage="Basic Settings" />
      ),
      security: (
        <FormattedMessage
          id="accountandsettings.menuMap.security"
          defaultMessage="Security Settings"
        />
      ),
      binding: (
        <FormattedMessage
          id="accountandsettings.menuMap.binding"
          defaultMessage="Account Binding"
        />
      ),
      notification: (
        <FormattedMessage
          id="accountandsettings.menuMap.notification"
          defaultMessage="New Message Notification"
        />
      ),
    };
    this.state = {
      menuMap,
      showComment: false,
      updateModalVisible: false,
      currentAttach: props.currentAttach
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'taskDetail/fetchCurrent',
    });
    dispatch({
      type: 'taskDetail/fetchCurrentUser',
    });
    const script1 = document.createElement("script");
    script1.src = "https://code.jquery.com/jquery-2.2.4.min.js";
    script1.async = false;
    document.body.appendChild(script1);
    const script = document.createElement("script");
    script.src = "/js/jquery.selectareas.js";
    script.async = false;
    document.body.appendChild(script);
    const script2 = document.createElement("script");
    script2.src = "/js/select-areas.js";
    script2.async = false;
    document.body.appendChild(script2);
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.resize);
  }

  getMenu = () => {
    const { menuMap } = this.state;
    return Object.keys(menuMap).map((item) => <Item key={item}>{menuMap[item]}</Item>);
  };

  setShowComment = (show: boolean) => {
    this.setState({
      showComment: show,
    });
  };

  setCurrentAttach = (attach: AttachType) => {
    this.setState({
      currentAttach: attach,
    });
  }

  handleUpdateModalVisible = (show: boolean) => {
    this.setState({
      updateModalVisible: show,
    });
  }

  renderChildren = () => {

    return null;
  };

  render() {

    const { currentTask, currentUser } = this.props;
    const { currentAttach } = this.state;

    if (!currentTask.taskid) {
      return '';
    }
    const { showComment, updateModalVisible } = this.state;
    return (
      <PageContainer
        title={currentTask.name}
        content={currentTask.desc}
      >
        <GridContent>
          <Card>
            <ProForm>
              <ProFormUploadButton
                name="upload"
                label="Upload"
                max={2}
                action="/upload.do"
                extra="Upload video file"
                title="Click to Attach files"
              />
            </ProForm>
            <Divider orientation="left">{currentTask.attach.length} FILE</Divider>
            <List
              itemLayout="horizontal"
              dataSource={currentTask.attach}
              renderItem={item => (
                <List.Item
                  actions={[<a onClick={() => {this.setShowComment(true); this.setCurrentAttach(item)}}>Click to view comment and add comment</a>]}
                >
                  <List.Item.Meta
                    avatar={<ReactPlayer width={200} height={100} url={item.url} />}
                    title={<a onClick={() => {this.setShowComment(true); this.setCurrentAttach(item)}}>{item.name}</a>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </GridContent>
        <Drawer
          width='95%'
          visible={showComment}
          onClose={() => {
            this.setCurrentAttach(this.props.currentAttach);
            this.setShowComment(false);
          }}
          closable={true}
        >
          <AttachView
            updateModalVisible={updateModalVisible}
            value={currentAttach || {}}
            currentUser={currentUser || {}}
          />
        </Drawer>
      </PageContainer>
    );
  }
}

export default connect(
  ({ taskDetail }: { taskDetail: { currentTask: CurrentTask, currentUser: CurrentUser } }) => ({
    currentTask: taskDetail.currentTask,
    currentUser: taskDetail.currentUser,
  }),
)(TaskDetail);
