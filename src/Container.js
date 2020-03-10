import React, { Component } from "react";
import Authors from "./Authors";

const Container = props => {
  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">
          {props.authorsList.map(author => (
            <Authors
              first_name={author.first_name}
              last_name={author.last_name}
              image={author.imageUrl}
              numberOfBooks={author.books.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
