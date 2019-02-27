import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchHabitants} from "../store/actions/habitantActions";
import {Card, Button, Avatar} from 'antd';

const {Meta} = Card;

class HabitantList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: 9
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {
        visible: prev.visible + 3
      };
    });
  }

  componentDidMount() {
    this.props.dispatch(fetchHabitants());
  }

  render() {

    const {error, loading, habitants} = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (<div className="habitants-container">
      {
        habitants.slice(0, this.state.visible).map(habitant => <div className="unique-habitant fade-in" key={habitant.id}>
          <Card >
            <Meta avatar={<Avatar src = {
                habitant.thumbnail
              } />} title={habitant.name} description="This is the description"/>
          </Card>
        </div>)
      }
      {
        this.state.visible < habitants.length && <div className="btn-center">
            <Button type="primary" onClick={this.loadMore}>Load more</Button>
          </div>
      }
    </div>);
  }
}

const mapStateToProps = state => ({habitants: state.habitants.items, loading: state.habitants.loading, error: state.habitants.error});

export default connect(mapStateToProps)(HabitantList);
