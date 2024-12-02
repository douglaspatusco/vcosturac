import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
import { fetchProducts } from "@/store/reducers/apiSlice";

import { Card, Categories } from "./styles";
import Link from "next/link";

const Categorias = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state: RootState) => state.products);

  const getFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

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
