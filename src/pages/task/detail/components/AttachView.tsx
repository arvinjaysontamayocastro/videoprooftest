import React, {useState, useEffect} from 'react';
import { Avatar, Card, Row, Col, List, Form, Input } from 'antd';
import ReactPlayer from 'react-player';
import styles from './AttachView.less';
import VideoPlayer from 'react-video-player-extended';

import type { TableListItem, AttachType, CurrentUser, Member } from '../data.d';
const { TextArea } = Input;

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<TableListItem>;

export type CommentFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<AttachType>;
};
interface AttachViewProps {
  updateModalVisible: boolean;
  value: AttachType;
  currentUser: Partial<CurrentUser>;
  onChange?: (value: string) => void;
}

export interface AttachViewState {
  isPlaying: boolean;
  volume: number;
  markers: {};
}


const AttachView: React.FC<AttachViewProps> = (props) => {
  const [form] = Form.useForm();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.7);
  const handlePlay = () => {
    setIsPlaying(true);
  };
  const handlePause = () => {
    setIsPlaying(false);
  };
  const handleVolume = (value: number) => {
    setVolume(value);
  };
  const handleProgress = () => {
    console.log('progress');
  };
  const handleDurationLoaded = () => {
    console.log('onDuration');
  };

  const handleMarkerClick = () => {
    console.log('Hllo Ted');
  };

  const markers = [
    {id: 1, time: 5, color: '#ffc837', title: 'Marker 1'},
    {id: 2, time: 68, color: '#4dbd74', title: 'Marker 2'}
  ];

  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "./jquery.selectareas.js";
    // script.async = true;
    // document.body.appendChild(script);
  }, []);
  
  return (
    <React.Fragment>
      <Card
        title={props.value.name}
      >
        <Row gutter={16}>
          <Col span={18}>
            {/* <div className={styles.player_wrapper}>
              <ReactPlayer
                width="100%"
                height='100%'
                url={props.value.url}
                className={styles.react_player}
              />
            </div> */}
            <div>
              <VideoPlayer
                width="100%"
                height='100%'
                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                // url={props.value.url}
                isPlaying={isPlaying}
                volume={volume}
                onPlay={handlePlay}
                onPause={handlePause}
                onVolume={handleVolume}
                onProgress={handleProgress}
                onDuration={handleDurationLoaded}
                markers={markers}
                onMarkerClick={handleMarkerClick}
              />
            </div>
          </Col>
          <Col span={6}>
            <List
              itemLayout="horizontal"
              header={<div>{props.value.comments && props.value.comments.length} comments</div>}
              dataSource={props.value.comments}
              renderItem={item => (
                <List.Item
                  actions={[<a onClick={() => {}}>Resolve</a>]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.author.avatar} />}
                    title={<a onClick={() => {}}>{item.author.name}</a>}
                    description={item.content}
                  />
                </List.Item>
              )}
            />
            <List
              itemLayout="horizontal"
              dataSource={[{avatar: props.currentUser.avatar}]}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    description={
                      <Form
                        form={form}
                        layout="vertical"
                      >
                        <Form.Item required tooltip="This is a required field"
                          help="Press Enter to submit"
                        >
                          <TextArea placeholder="Leave a new comment" />
                        </Form.Item>
                      </Form>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Card>
      
    </React.Fragment>
  );
};

export default AttachView;
