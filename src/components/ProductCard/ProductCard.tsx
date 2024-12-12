import "./ProductCard.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { IProduct } from "../MainLeftContent/MainLeftContent";

const ProductCard = ({
  productData,
  isChecked,
  setSelectedProduct,
}: {
  productData: IProduct;
  isChecked: boolean;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct>>;
}) => {
  return (
    <div
      className="w-full overflow-hidden rounded-md border border-gray-400 mb-4 cursor-pointer"
      onClick={() => setSelectedProduct(productData)}
    >
      <div className="overflow-hidden flex">
        <div className="w-[68%] p-3 bg-orange-400 flex align-middle justify-start">
          <h6 className="font-[700] font-sans text-[27px] text-start text-white">
            BUY 3 GET 3 FREE
          </h6>
        </div>

        <div className="w-[32%] p-3 flex justify-center align-middle product-card-right-header relative z-10">
          <img
            className="h-[23px] w-[28px] z-20 mr-3"
            src="box-icon.svg"
            alt=""
          />
          <h6 className="font-[700] font-sans text-[18px] z-20">
            FREE SHIPPING
          </h6>
        </div>
      </div>
      <div className="relative">
        <div>
          <div className="flex justify-between ps-14 pe-4 py-4">
            <div className="flex justify-start items-center gap-2">
              <img
                className="w-[160px]"
                src={productData.gummiesImage}
                alt=""
              />
              <FaPlusCircle size={28} />
              <img
                className="w-[160px]"
                src={productData.gummiesImage}
                alt=""
              />
            </div>
            <div className="text-center">
              <h6 className="text-red-600 font-[500] text-[18px] leading-10">
                <i>{productData.title}</i>
              </h6>
              <h3 className="font-oswald font-[400] text-[36px] leading-10 underline">
                {productData.price}
              </h3>
              <small className="font-oswald font-[400] text-[14px] leading-7">
                bottle
              </small>
              <p className="font-oswald font-[600] text-[14px]">
                Retail -{" "}
                <span className="line-through">{productData.retailPrice}</span>
              </p>
              {isChecked ? (
                <button className="text-white font-bold bg-orange-400 px-6 py-2 rounded-md text-[18px]">
                  Selected!
                </button>
              ) : (
                <button className="text-white font-bold bg-orange-500 px-6 py-2 rounded-md text-[18px]">
                  Select Package
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="h-full flex items-center">
            <div className={`${isChecked ? "checkMarkArea" : ""}`}>
              <FaRegCircle size={32} className="ms-3" color="#63aee4" />
            </div>

            {productData.showSavePrice && (
              <div className="absolute left-[300px] top-8">
                <img className="w-[130px]" src="package-save.svg" alt="" />
                <div className="relative bottom-[94px] left-[0px] text-center">
                  <h6 className="font-oswald text-[24px] leading-9">SAVE</h6>
                  <p className="font-oswald text-[19px]">$74.95</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;