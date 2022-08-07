import React from 'react';
import { Modal, Card, Form, Input, Upload, Button, Divider, message, Row, Col } from 'antd';
import {
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
  ProFormRadio,
  ProFormDateTimePicker,
  ProFormUploadButton,
} from '@ant-design/pro-form';
import { useIntl, FormattedMessage, formatMessage } from 'umi';
import ReactPlayer from 'react-player/youtube';

import type { TableListItem, AttachType } from '../data.d';

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
const FormItem = Form.Item;



const CommentForm: React.FC<CommentFormProps> = (props) => {
  const [form] = Form.useForm();
  const intl = useIntl();
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };
  return (
    <React.Fragment>
      <Card
        title={props.values.name}
      >
        <Row gutter={16}>
          <Col span={18}>
            <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </Col>
          <Col span={6}>
            Comments
          </Col>
        </Row>
      </Card>
      
    </React.Fragment>
  );
};

export default CommentForm;
