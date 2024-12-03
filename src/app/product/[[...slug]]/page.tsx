import { getData } from "@/app/services/products";
import Image from "next/image";

type ProductPageProps = { params: Promise<{ slug: string[] }> };
type Products = {
  id: number;
  title: string;
  price: number;
  description?: string;
};

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params;
  const products: Products[] = await getData(
    "https://fakestoreapi.com/products"
  );

  console.log(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5 place-items-center gap-5 px-1">
      {products.length > 0 &&
        products.map((product: any) => (
          <div
            key={product.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <Image
                className="p-8 rounded-t-lg object-cover h-96 w-full"
                src={product.image}
                alt="product image"
                width={500}
                height={500}
                loading="lazy"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.title}
                </h5>
              </a>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $ {product.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      {params.slug && (
        <>
          <div>Categori: {params.slug[0]}</div>
          <div>Nama: {params.slug[1]}</div>
          <div>Id: {params.slug[2]}</div>
        </>
      )}
    </div>
  );
}
