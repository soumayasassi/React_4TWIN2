import { useSearchParams } from "react-router-dom";

function SearchParams() {
  const [searchparam] = useSearchParams();
  const name = searchparam.get("name");
  return (
    <>
      <h1>welcome {name} to Home Page</h1>
    </>
  );
}

export default SearchParams;
