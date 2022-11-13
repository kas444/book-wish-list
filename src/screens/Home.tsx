import { useEffect } from "react";

interface Props { }

const Home = ({ }: Props) => {
  useEffect(() => { }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <h2>welcome</h2>
  );
};

export default Home;
