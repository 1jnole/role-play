import React, {Component} from 'react';
import {Card, Col, Row, Slider, InputNumber} from 'antd';

class Age extends Component {
  state = {
    inputValue: 1
  }

  onChange = (value) => {
    this.setState({inputValue: value});
  }
  render() {
    const {inputValue} = this.state;
    return (<Card title="Filter by">
      <Card type="inner" bordered={false} >
        <Row>
          <Col span={12}>
            <Slider min={1} max={400} onChange={this.onChange} value={typeof inputValue === 'number'
                ? inputValue
                : 0}/>
          </Col>
          <Col span={4}>
            <InputNumber min={1} max={400} style={{
                marginLeft: 16
              }} value={inputValue} onChange={this.onChange}/>
          </Col>
        </Row>
      </Card>
    </Card>);
  }
}

export default Age;
