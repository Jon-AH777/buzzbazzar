import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import ImageDetail from '@/components/designLayouts/ImageDetail';

const ActionButton = ({ onClick, text, icon }) => (
    <li
        onClick={onClick}
        className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
    >
        {text}
        <span className="text-lg">{icon}</span>
    </li>
);

const Product = (props) => {
    return (
        <div className=" w-11/12 relative group">
            <div className="max-w-80 max-h-80 relative overflow-y-hidden">
                <div>
                    <ImageDetail className="w-full h-full" imgSrc={props.img} />
                </div>
                <div className="w-full absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
                    <ul className="w-full pt-2 h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r" >
                        <ActionButton
                            text="Add to Cart"
                            icon={<FaShoppingCart />}
                        />
                        <ActionButton
                            text="View Details"
                            icon={<MdOutlineLabelImportant />}
                        />
                        <ActionButton
                            text="Add to Wishlist"
                            icon={<BsSuitHeartFill />}
                        />
                    </ul>
                </div>
            </div>
            <div className="max-w-80 py-1 flex flex-col gap-1 border-[1px] border-t-0 px-4">
                <div className="flex items-center justify-between font-titleFont">
                    <h2 className="text-lg text-primeColor font-bold">
                        {props.productName}
                    </h2>
                    <p className="text-[#767676] text-[14px]">${props.price}</p>
                </div>
                <div>
                    <p className="text-[#767676] text-[14px]">{props.color}</p>
                </div>
            </div>
        </div>
  )
}

export default Product