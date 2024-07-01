
import useStore from "@/zustand/slice";
import Product from "../home/products/Product";
import { makeSelectedBrands, makeSelectedCategories, makeSelectedColors } from "@/zustand/selectors";
import { paginationItems } from "@/Constants";
import Paginate from "./Paginate";

const items = paginationItems;  

/* function Items({ currentItems, selectedBrands, selectedCategories, selectedColors }) {
  // Filter items based on selected brands and categories
  const filteredItems = currentItems.filter((item) => {
    const isBrandSelected =
      selectedBrands.length === 0 ||
      selectedBrands.some((brand) => brand.title === item.brand);

    const isCategorySelected =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => category.title === item.cat);

    const isColorSelected =
      selectedColors.length === 0 ||
      selectedColors.some((color) => color.title === item.color);

    return isBrandSelected && isCategorySelected && isColorSelected;
  });

  

  return (
    <>
      {entries.map((item) => (
        <div key={item._id} className="w-full">
          <Product
            _id={item._id}
            img={item.img}
            productName={item.productName}
            price={item.price}
            color={item.color}
            des={item.des}
          />
        </div>
      ))}   
      
    </>
  );
} */

const Pagination = ({ currentItems, searchParams }) => {
  const selectedBrands = useStore(makeSelectedBrands);
  const selectedCategories = useStore(makeSelectedCategories);
  const selectedColors = useStore(makeSelectedColors);

  const filteredItems = currentItems.filter((item) => {
    const isBrandSelected =
      selectedBrands.length === 0 ||
      selectedBrands.some((brand) => brand.title === item.brand);

    const isCategorySelected =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => category.title === item.cat);

    const isColorSelected =
      selectedColors.length === 0 ||
      selectedColors.some((color) => color.title === item.color);

    return isBrandSelected && isCategorySelected && isColorSelected;
  });
  const page = searchParams?.['page'] ?? '1'
  const per_page = searchParams?.['per_page'] ?? '5'

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
  const end = start + Number(per_page) // 5, 10, 15 ...

  const entries = filteredItems.slice(start, end);


  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10'>
      {entries.map((item) => (
        <div key={item._id} className="w-full">
          <Product
            _id={item._id}
            img={item.img}
            productName={item.productName}
            price={item.price}
            color={item.color}
            des={item.des}
          />
        </div>
      ))}   
    </div>
    <Paginate
        hasNextPage={end < items.length}
        hasPrevPage={start > 0}
      />
    </>
  )
}

export default Pagination