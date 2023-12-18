import React, { useEffect, useState } from "react";

function CarFilterOption({ carsList, setBrand, orderCarList }: any) {
  const [brandList, setBrandList] = useState<any>();
  // const [orderCarList,setOrderCarList]=useState<any>()

  useEffect(() => {
    if (carsList) {
      filterBrandList();
    }
  }, [carsList]);
  const BrandSet = new Set();

  const filterBrandList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carType);
    });
    console.log(BrandSet);
    setBrandList(Array.from(BrandSet));
    console.log(brandList);
  };
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore the car you might like</h2>
      </div>
      <div className="flex items-center gap-5">
        <select
          onChange={(e) => orderCarList(e.target.value)}
          className="select select-bordered w-full  max-w-xs"
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          onChange={(e) => setBrand(e.target.value)}
          className="select select-bordered w-full  gap-5 hidden md:block max-w-xs"
        >
          <option disabled selected>
            Manufacturer
          </option>
          {brandList &&
            brandList.map((brand: string, index: number) => (
              <option key={index}>{brand}</option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default CarFilterOption;
