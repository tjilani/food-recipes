import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    const { handleChange, handleSubmit, value } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-slanted text-capitalize">
                search for recipe with{" "}
                <strong className="text-danger">Food2Fork</strong>
              </h1>
              <form className="mt-4">
                <label htmlFor="search" className="text-capitalize">
                  type ingredients seperated by comma
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="paneer, chickpeas, spinach"
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className=" bg-primary text-white"
                      onSubmit={handleSubmit}
                    >
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
