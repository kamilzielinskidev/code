import { useQuery } from "@apollo/react-hooks";
import { PRODUCTS_QUERY } from "../api/products";

export const App = () => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div>
      {data.products.map(({ id, name }) => (
        <div className="mb-2" key={id}>
          <div>id: {id}</div>
          <div>name: {name}</div>
        </div>
      ))}
    </div>
  );
};
