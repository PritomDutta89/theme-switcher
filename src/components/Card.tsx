/* eslint-disable @typescript-eslint/no-explicit-any */

function Card({ product }: { product: any }) {
  return (
    <div className="bg-white dark:bg-gray-700 border border-gray-200 p-4 rounded shadow flex flex-col h-[300px] overflow-hidden transition duration-300 delay-65 hover:hover:-translate-y-1 hover:scale-100 ease-in-out">
      <h2 className="font-bold mb-2 text-lg text-black dark:text-gray-300 h-[80px] overflow-hidden text-ellipsis">
        {product.title}
      </h2>

      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 overflow-hidden h-[80px] line-clamp-3">
        {product.description}
      </p>

      <div className="mt-auto">
        <button className="w-full p-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Buy
        </button>
      </div>
    </div>
  );
}

export default Card;
