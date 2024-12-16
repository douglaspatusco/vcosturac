import { useRouter } from 'next/router';

import { BreadcrumbsNav } from './styles';
import { getFirstLetter } from '@/services/utility';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Breadcrumbs = () => {
  const { categoria, produtoSlug } = useRouter().query;
  const { products } = useSelector((state: RootState) => state.products);
  const product = products.find((product) => product.slug === produtoSlug);

  return (
    <nav>
      <BreadcrumbsNav>
        {categoria && (
          <li>
            <a href={`/loja/${categoria}`}>
              {getFirstLetter(categoria as string)}
            </a>
          </li>
        )}
        {categoria && produtoSlug && (
          <span>
            &nbsp; &gt; &nbsp;
          </span>
        )}
        {produtoSlug && product && (
          <li>
            {product.name}
          </li>
        )}
      </BreadcrumbsNav>
    </nav>
  );
};

export default Breadcrumbs;
