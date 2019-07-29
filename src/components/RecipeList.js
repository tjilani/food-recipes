import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
  render() {
    const {
      list,
      handleDetail,
      handleChange,
      handleSubmit,
      value,
      error
    } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={value}
        />
        <div className="container my-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>
          {/* end of title */}
          {/* list recipes */}
          <div className="row">
            {error ? (
              <h1 className="text-danger text-center">{error}</h1>
            ) : (
              list.map(recipe => {
                return (
                  <Recipe
                    key={recipe.recipe_id}
                    data={recipe}
                    handleDetail={() => handleDetail(0, recipe.recipe_id)}
                  />
                );
              })
            )}
          </div>
          {/* end of list recipes */}
        </div>
      </React.Fragment>
    );
  }
}
