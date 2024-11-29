import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
import { fetchProducts } from "@/store/reducers/apiSlice";

type Props = {
  product: Product[]
}

const Categorias = ({product}: Props) => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <p>Carregando...</p>;
  if (status === 'failed') return <p>Erro ao carregar produtos.</p>;

  return (
    <div>
      <h1>oi</h1>
      {items.map((product) => (
        <li key={product.id}>
          {product.name}
        </li>
      ))}
    </div>
  )
}

export default Categorias
