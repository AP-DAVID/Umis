import _ from "lodash";
import React, { useEffect, Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import axios from "axios";

const initialState = { isLoading: false, results: [], value: "" };

export default class Searches extends Component {
  state = initialState;

  constructor(props) {
    super(props);
    this.state = { details: [] };
  }

  componentDidMount() {
    const userss = async () => {
      try {
        if (this.props.login?.section === "admin") {
          const response = await axios.get(
            `/api/getUsers/${this.props.login._id}`
          );

          var obj = await [];
          var res = await Array.from(response.data, (x) =>
            obj.push({
              title: x.email,
              description: x.section,
              image: x.profile,
              price: `${x.firstname}`,
            })
          );

          this.setState({
            details: obj,
          });
        } else {
          const response = await axios.get(
            `/api/getUsers/${this.props.login.adminId}`
          );

          var obj = await [];
          var res = await Array.from(response.data, (x) =>
            obj.push({
              title: x.email,
              description: x.section,
              image: x.profile,
              price: `${x.firstname}`,
            })
          );

          this.setState({
            details: obj,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    userss();
  }

  handleResultSelect = async (e, { result }) => {
    await this.setState({ value: result.age });
    await this.props.setSection(result.description);
    await console.log(result.title);
    await console.log(result.age);
    await console.log(result.description);
    await this.props.onSearch(result.title);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.details, isMatch),
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            aligned="left"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
