import {render} from "@testing-library/react";
import {SocialLinks} from "../SocialLinks";

describe('SocialLinks', () => {
  it('should render correctly', function () {
    const {container} = render(<SocialLinks />);

    expect(container).toMatchSnapshot();
  });
});
