import React, {Component} from 'react';
import {Card, Col, Row, Checkbox} from 'antd';

const CheckboxGroup = Checkbox.Group;

class HairColor extends Component {

  onChange = (checkedValues) => {
      console.log('checked = ', checkedValues);
  }

  render() {
    const palette = [
      {
        'id': '1',
        'color': 'Black'

      }, {
        'id': '2',
        'color': 'White'

      }, {
        'id': '3',
        'color': 'Green'

      }, {
        'id': '4',
        'color': 'Gray'

      }, {
        'id': '5',
        'color': 'Red'

      }, {
        'id': '6',
        'color': 'Pink'

      }
    ];

    return (
      <Card>
        <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange}>
          <Row>
            {
              palette.map(color =>
              <Col span={8} key={color.id}>
                <Checkbox value={color.color} key={color.id}>{color.color}</Checkbox>
              </Col>)
            }
          </Row>
        </Checkbox.Group>
    </Card>);
  }
}

export default HairColor;
