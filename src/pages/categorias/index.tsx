import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
import { fetchProducts } from "@/store/reducers/apiSlice";

import { getFirstLetter } from "@/services/utility";
import { Card, Categories } from "./styles";

const Categorias = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state: RootState) => state.products);

  const categories = Array.from(new Set(items.map((product) => product.category)));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <p>Carregando...</p>;
  if (status === 'failed') return <p>Erro ao carregar produtos.</p>;

  return (
    <Categories>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Card href={`categorias/${category}`}>
              <img
                src={items.find((item) => item.category === category)?.medias?.thumbnail || ""}
                alt={category}
                title={getFirstLetter(`${category}s`)}
              />
              {getFirstLetter(category)}
            </Card>
          </li>
        ))}
      </ul>
    </Categories>
  )
}

export default Categorias
