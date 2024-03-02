import Bottom from "./Bottom";
import Heading from "./Heading";
import Middle from "./Middle";
import Middle1 from "./Middle1";

const Body = () => {
  return (
    <div className="flex flex-col">
      <Heading />
      <Middle1 />
      <Middle />
      <Bottom />
    </div>
  );
};

export default Body;
