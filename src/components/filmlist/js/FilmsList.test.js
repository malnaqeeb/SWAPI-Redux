import React from "react";
import FilmsList from "./FilmsList";
import { configure, shallow, mount } from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<FilmsList/> component unit tests", () => {
  const mockFn = jest.fn();
  const props = {
    getFilms: mockFn,
  };
  it("Should render one todo component", () => {
    const component = shallow(<FilmsList {...props} />);
    expect(component).toHaveLength(1);
  });
});
