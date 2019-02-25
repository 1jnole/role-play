import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchHabitants } from "../store/actions/habitantActions";

class HabitantList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchHabitants());
  }

  render() {
    const { error, loading, habitants } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    console.log(this.props);
    return (
      <ul>
        {habitants.map(habitant =>
          <li key={habitant.id}>{habitant.name}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  habitants: state.habitants.items,
  loading: state.habitants.loading,
  error: state.habitants.error
});

export default connect(mapStateToProps)(HabitantList);
