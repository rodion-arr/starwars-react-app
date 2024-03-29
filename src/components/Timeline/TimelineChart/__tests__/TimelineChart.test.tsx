import { render, fireEvent } from "@testing-library/react";
import { TimelineChart } from "../TimelineChart";

describe("TimelineChart", () => {
  it("should render correctly", function () {
    const { container } = render(
      <TimelineChart
        range={{
          min: -10,
          max: 10,
        }}
        timeline={{
          "0": {
            id: "0",
            title: "The Phantom Menace",
            start: -9,
            end: -9,
          },
          "1": {
            id: "1",
            title: "Episode 2",
            start: 1,
            end: 10,
          },
        }}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should have collapse functionality", function () {
    const { container } = render(
      <TimelineChart
        range={{
          min: -10,
          max: 10,
        }}
        timeline={{
          "0": {
            id: "0",
            title: "The Phantom Menace",
            start: -9,
            end: -9,
          },
        }}
      />
    );

    const collapseButton = container.getElementsByClassName('timeline__collapse')[0];
    fireEvent.click(collapseButton);

    expect(container).toMatchSnapshot();
  });
});
