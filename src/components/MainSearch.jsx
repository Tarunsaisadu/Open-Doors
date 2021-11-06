import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import JobResult from "./JobResult";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchJobs } from "../store/actions";
import "./styles.css";

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: (baseEndpoint, query) => dispatch(fetchJobs(baseEndpoint, query)),
});

class MainSearch extends React.Component {
  state = {
    query: "",
    jobs: [],
  };

  baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.fetchJobs(this.baseEndpoint, this.state.query);
  };

  render() {
    return (
      <Container
        style={{
          width: "100%",
        }}
      >
        <Row>
          <Col xs={10} className="mx-auto my-3 searchcol">
            <lord-icon
              className="globeicon"
              src="https://cdn.lordicon.com/gqzfzudq.json"
              trigger="loop"
              colors="primary:#c74b16,secondary:#c74b16"
              style={{
                width: "42px",
                height: "42px",
                marginLeft: "180px",
                top: "26px",
              }}
            ></lord-icon>
            <h1
              className="searchtitle"
              style={{ marginLeft: "250px", marginTop: "-20px" }}
            >
              Find job offers across the globe
            </h1>
          </Col>

          <Col xs={10} className="mx-auto searchbarcol">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="Enter Job Title or Company & press enter"
                className="searchbar"
              />
            </Form>
            <div className="favbuttondiv">
              <button className="favbutton">
                <Link to="/favourites">
                  <lord-icon
                    src="https://cdn.lordicon.com/rjzlnunf.json"
                    trigger="loop"
                    colors="primary:#c74b16,secondary:#c71f16"
                    style={{ width: "50px", height: "50px" }}
                  ></lord-icon>{" "}
                </Link>
              </button>
            </div>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {this.props.jobs.elements.map((jobData) => (
              <JobResult key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect((s) => s, mapDispatchToProps)(MainSearch);
