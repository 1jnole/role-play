import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import DataSource from  '../../components/DataSource';
import HabitantList from  '../../components/HabitantList';
import './Layout.scss';

const { Header, Content, Sider } = Layout;

/**
 *
 * @author Jorge Nole
 * @class
 */
class ContainerLayout extends Component {
  /**
   * Render this Component on each state change
   * @return {React.Component}
   */
  render() {
    return (
      <Layout className="role-play">
        <Header className="header">
          <Row>
            <Col span={6}>
              <HabitantList/>
            </Col>
            <Col span={6}>
            b
            </Col>
            <Col span={6}>
              c
            </Col>
            <Col span={6}>
              d
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider className="filters" theme="light">

          </Sider>
          <Layout>
            <Content className="content">
                Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default ContainerLayout;
