import React, {Component} from 'react';
import {Layout} from 'antd';
import Age from '../../components/filters/Age';
import HairColor from '../../components/filters/HairColor';
import HabitantList from '../../components/HabitantList';
import './Layout.scss';

const { Content, Sider} = Layout;

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
    return (<div>
      <Layout className="role-play">
        <Sider className="filters">
          <Age/>
          <HairColor/>
        </Sider>
        <Content className="content">
          <HabitantList/>
        </Content>
      </Layout>
    </div>);
  }
}

export default ContainerLayout;
