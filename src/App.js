import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=ff9e30951edacf844fdaf6c40bf5684b",
    details_id: 35381,
    pageIndex: 1,
    search: "",
    query: "&q=",
    baseUrl:
      "https://www.food2fork.com/api/search?key=ff9e30951edacf844fdaf6c40bf5684b",
    error: ""
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      console.log(jsonData);

      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return {
            error: "sorry no match found"
          };
        });
      } else {
        this.setState(() => {
          return {
            recipes: jsonData.recipes
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            list={this.state.recipes}
            handleDetail={this.handleDetails}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.search}
            error={this.state.error}
          />
        );
      case 0:
        return (
          <RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };

  handleChange = event => {
    this.setState(
      {
        search: event.target.value
      },
      () => console.log(this.state.search)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const { baseUrl, query, search } = this.state;
    this.setState(
      () => {
        return { url: `${baseUrl}${query}${search}`, search: "" };
      },
      () => this.getRecipes()
    );
  };

  render() {
    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}

export default App;
