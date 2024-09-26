import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded outline className='mb-5'>
          <GoBell />
          Something
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloud />
          Whats up
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoDatabase />
          Click Me
        </Button>
      </div>
      <div>
        <Button danger outline rounded>Buy Now</Button>
      </div>
      <div>
        <Button warning>See Deal</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
