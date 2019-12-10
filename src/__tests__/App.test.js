import React from "react";
import { mount } from "enzyme";

import authors from "../data";

import App from "../App";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("renders correctly", () => {
    expect(wrapper.find("#app").exists()).toBe(true);
  });

  it("is not just an empty div", () => {
    expect(wrapper.find("#app").children().length).toBe(1);
  });

  it("renders the right number of authors", () => {
    expect(wrapper.find(".card").length).toBe(4);
  });

  it("renders different authors", () => {
    const cards = wrapper
      .find(".card")
      .map(card => card.find(".card-title").text());
    expect(new Set(cards).size).toEqual(cards.length);
  });

  it("has the correct content in each author card", () => {
    wrapper.find(".card").forEach((card, idx) => {
      const image = card.find("img");
      const authorName = card.find(".card-title");
      const books = card.find(".card-text");
      const author = authors[idx];

      expect(image.exists()).toBe(true);
      expect(authorName.exists()).toBe(true);
      expect(books.exists()).toBe(true);

      expect(image.props().src).toBe(author.imageUrl);
      expect(authorName.text()).toContain(
        `${author.first_name} ${author.last_name}`
      );
      expect(books.text()).toContain(`${author.books.length} books`);
    });
  });
});
