import { render } from "@testing-library/react";
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
        }}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
