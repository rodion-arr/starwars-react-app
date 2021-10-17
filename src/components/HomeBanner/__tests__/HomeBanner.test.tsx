import {render} from "@testing-library/react";
import {HomeBanner} from "../HomeBanner";

describe('HomeBanner', () => {
  it('should render correctly', function () {
    const {container} = render(<HomeBanner />);

    expect(container).toMatchSnapshot();
  });
});
