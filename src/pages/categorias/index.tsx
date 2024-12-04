import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
import { fetchProducts } from "@/store/reducers/apiSlice";

import { getFirstLetter } from "@/services/utility";
import { Card, Categories } from "./styles";

const Categorias = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <p>Carregando...</p>;
  if (status === 'failed') return <p>Erro ao carregar produtos.</p>;

  return (
    <Categories>
      <ul>
        {items.map((product) => (
          <li key={product.id}>
            <Card href={'categorias/'.concat(product.category.concat('s'))}>
              <img src={product.medias?.thumbnail} alt={product.category} title={getFirstLetter(product.category.concat('s'))} />
              {getFirstLetter(product.category.concat('s'))}
            </Card>
          </li>
        ))}
      </ul>
    </Categories>
  )
}

export default Categorias
