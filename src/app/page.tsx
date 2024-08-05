import Card from "@/components/Card";

type Products = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

const HomePage = () => {
  const products: Products[] = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      description: "Product 1 description",
      imageUrl:
        "https://asset.cloudinary.com/dgtrmhlsp/3ece2ae1ab26e602f7dfc6b7634f9020",
    },
    {
      id: 2,
      name: "Product 2",
      price: 1900.99,
      description: "Product 2 description",
      imageUrl:
        "https://console.cloudinary.com/console/c-b2a534be96c0c20eac078b580e9215/media_library/homepage/asset/a88d557a44c5ca13b366f1ac6069968c",
    },
  ];
  const topProducts: Products[] = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      description: "Product 1 description",
      imageUrl:
        "https://asset.cloudinary.com/dgtrmhlsp/3ece2ae1ab26e602f7dfc6b7634f9020",
    },
    {
      id: 2,
      name: "Product 2",
      price: 1900.99,
      description: "Product 2 description",
      imageUrl:
        "https://console.cloudinary.com/console/c-b2a534be96c0c20eac078b580e9215/media_library/homepage/asset/a88d557a44c5ca13b366f1ac6069968c",
    },
  ];
  return (
    <main className="min-h-screen max-w-[100rem] mx-auto">
      <div className="px-12 pt-12 pb-20">
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-40">
          <div className="pt-12">
            <h2 className="text-4xl mb-16">OUR TOP PRODUCTS</h2>
            <p className="text-xl">You can pay to boost your products here.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
            {topProducts &&
              topProducts.map((item, idx) => (
                <Card id={item.id} key={`${item.name}-${idx}`} {...item} />
              ))}
          </div>
        </div>

        <h2 className="text-4xl mt-20 mb-16">ALL PRODUCTS</h2>
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((item, idx) => (
              <Card id={item.id} key={`${item.name}-${idx}`} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-800">All our products are gone...</p>
        )}
      </div>
    </main>
  );
};

export default HomePage;
