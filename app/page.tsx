"use client";
import HeroMobile from "@/components/HeroCarusel/HeroMobile";
import Hero from "../components/HeroCarusel/Hero";
import { RangeSlider } from "@/components/RangeSlider";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import axios from "axios";
import { URL } from "@/service/resquest";
import { useState } from "react";
import { Product } from "@/components/Products/Product";
import { Pagination, Popover } from "antd";
import { CustomImage } from "@/components/CustomImage";
import { Button } from "@/components/Button";
import { ArrowBtnRight, ArrowRight } from "@/assets/icon";
import Image from "next/image";

import NothingImg from "../public/Nothing.png";

interface Categories {
  category_id: string;
  category_name: string;
}

interface PlantProductsType {
  product_id: string;
  product_name: string;
  cost: string;
  image: string;
}
interface SizeDataType {
  size_id: number;
  size_name: string;
}

interface TagNavbarDataType {
  tag_id: number;
  tag_name: string;
  path:string | null
}

function Home() {
  const token = window.localStorage.getItem("token")
  const [arrow, setArrow] = useState<string>("Show");
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  const size:SizeDataType[] = [
    {
      size_id: 1,
      size_name:"Small",
    },
    {
      size_id: 2,
      size_name:"Medium",
    },
    {
      size_id: 3,
      size_name:"Large",
    }
  ]

  const tagNavbar:TagNavbarDataType[] = [
    {
      tag_id: 1,
      tag_name: "All Plants",
      path:null
    },
    {
      tag_id: 2,
      tag_name: "New Arrivals",
      path:"new-arrival"
    },
    {
      tag_id: 3,
      tag_name: "Sale",
      path:"sale"
    },
  ]
  const [category, setCategory] = useState<Array<Categories>>([]);
  const [plantProducts, setPlantProducts] = useState<Array<any>>([]);
  const [categoriesId, setCategoriesId] = useState<string>("");
  const [tagNavbarId, setTagNavbarId] = useState<string | null>("");
  const [sizesId, setSizesId] = useState<string | null>(null);
  const [rangeValue, setRangeValue] = useState<Array<number>| null>(null)


  
//////////////////////////////////////////////////////////////////////////////////////////

    // Sort qilishni funksiyasi 
 const handleClickCategories = (id: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setTagNavbarId("");
      setSizesId("");
      setCategoriesId(id);
      setRefresh(!refresh);
    }, 500);
  };

  const handleTagNavbarIdClick = (id: string) => {
    setIsLoading(true);
    if (id == "1") {
      setTimeout(() => {
        setCategoriesId("");
        setTagNavbarId("1");
        setSizesId("");
        setRefresh(!refresh);
      }, 500);
    } else {
      setTimeout(() => {
        setCategoriesId("");
        setTagNavbarId(id);
        setSizesId("");
        setRefresh(!refresh);
      }, 500);
    }
  };

  const handleSizesClick = (id: string) => {
    setIsLoading(true);
    if (id === "1") {
      setTimeout(() => {
        setCategoriesId("");
        setTagNavbarId("1");
        setSizesId("1");
        setRefresh(!refresh);
      }, 500);
    } else {
      setTimeout(() => {
        setCategoriesId("");
        setTagNavbarId("1");
        setSizesId(id);
        setRefresh(!refresh);
      }, 500);
    }
  };

  // const handleSortClick = (value: string) => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setSortProducts(value);
  //   }, 500);
  // };

 const handleSortClick = (name: string) => {
  if(name == "title"){
    setTimeout(() => {
      setPlantProducts(plantProducts.sort((a, b) => a.product_name < b.product_name ? -1 : 1))
    }, 500);
  }
  else{
    setTimeout(() => {
      setPlantProducts(plantProducts.sort((a, b) => a.cost - b.cost ))
    }, 500);
  }
 }
 // Sort qilishni funksiyasi

 
//////////////////////////////////////////////////////////////////////////////////////////
 
 
 useEffect(() => {
    axios.get(`${URL}/categories?page=1&limit=100`).then((res) => {
      setCategory(res.data.categories);
    });
  }, []);

//////////////////////////////////////////////////////////////////////////////////////////

useEffect(() => {
  axios.get(`${URL}/categories?page=1&limit=100`).then((res) => {
    setCategory(res.data.categories);
  });
}, []);

//////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {

    axios
      .get(
        `${URL}/products`,{
          params: {
            page:page,
            limit:10,
            name: null,
            category:categoriesId,
            size:sizesId,
            status:tagNavbarId,
            min_price:rangeValue? rangeValue[0] : null,
            max_price:rangeValue? rangeValue[1] : null,
          },
          headers: token? {
            "Authorization":"Bearer " + token
          }:{}
        }
        )
      .then((res) => {
        // console.log(res)
        setIsLoading(false); 
        setLimit(res.data.total_count)
        setPlantProducts(res.data.products)
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [categoriesId, sizesId, rangeValue, tagNavbarId, page, refresh]);
//////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${URL}/products`, {
        params: {
          page: 1,
          limit: 10,
          name: null,
          category: categoriesId,
          size: sizesId,
          min_price:rangeValue? rangeValue[0] : null,
          max_price:rangeValue? rangeValue[1] : null,
        },
      })
      .then((res) => {
        setIsLoading(false);
        setLimit(res.data.total_count)
        setPlantProducts(res.data.products)
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [categoriesId, sizesId, rangeValue]);
  console.log(category);
  console.log(plantProducts)

//////////////////////////////////////////////////////////////////////////////////////////
  
  return (
    <>
      <section className="pt-[12px] pb-[46px]">
        <div className="container px-5 md:px-0">
          <Hero />
          <HeroMobile />
        </div>
      </section>
      <section className="">
        <div className="container">
          {/* <div className="bg-red-500 text-[35px] text-white">AAAAAA SALOM!!!</div> */}
          <div className="flex flex-col md:flex-row justify-between gap-x-[50px] gap-y-[30px]">
            <div className="w-full md:w-[310px] bg-[#FBFBFB]">
              <div className="p-[15px] hidden md:block">
                <h2 className="font-bold text-[18px] leading-[16px]">
                  Categories
                </h2>
                <ul className="pl-[12px] space-y-[15px] mt-[20px] mb-[36px] ">
                  {category &&
                    Array.isArray(category) &&
                    category?.length > 0 &&
                    category?.map((item: Categories) => (
                      <li
                        onClick={() => {
                          setIsLoading(true)
                          setTimeout(() => {
                            setCategoriesId(item.category_name)
                          }, 500)
                        }}
                        className={`flex items-center justify-between cursor-pointer ${
                          categoriesId == item.category_name
                            ? "text-[#46A358] font-bold"
                            : ""
                        }`}
                        key={item.category_id}
                      >
                        <span>{item.category_name}</span>
                      </li>
                    ))}
                </ul>
                <h2 className="font-bold text-[18px] leading-[16px]">
                  Price Range
                </h2>
                <RangeSlider setRangeValue={setRangeValue}/>
                <h2 className="font-bold text-[18px] leading-[16px] mt-[46px]">
                  Size
                </h2>
                <ul className="pl-[12px] space-y-[15px] mt-[20px] mb-[36px]">
                  {size.map((item:SizeDataType) => (
                      <li
                        onClick={() => setSizesId(item.size_name)}
                        className={` cursor-pointer flex items-center justify-between ${
                          sizesId == item.size_name ? "text-[#46A358] font-bold" : ""
                        }`}
                        key={item.size_id}
                      >
                        <span>{item.size_name}</span>
                      </li>
                    ))}
                </ul>
              </div>
              <Link href={"#"}>
                <img
                  className="mx-auto hidden md:block"
                  src="/Super-Sale.png"
                  alt="Plant"
                  width={"100%"}
                  height={470}
                />
              </Link>
            </div>
            <div className="w-full md:w-[840px]">
              <div className="flex flex-col md:flex-row items-start  justify-between  pl-[24px]">
                <ul className="flex items-center space-x-[37px] mb-[20px] md:mb-0 ">
                  {tagNavbar.map((item:TagNavbarDataType) => (
                    <li
                      className={` cursor-pointer leading-[16px] text-[15px]  ${
                        tagNavbarId == item.path
                          ? "text-[#46A358] font-bold border-b-[3.5px] pb-[7px] border-[#46A358]"
                          : ""
                      }`}
                      onClick={() => {
                        setIsLoading(true)
                        setTimeout(() => {
                          setTagNavbarId(item.path)
                        }, 500)
                      }}
                      key={item.tag_id}
                    >
                      {item.tag_name}
                    </li>
                  ))}
                </ul>
                <div className="hidden md:block">
                <div className="flex items-center justify-end cursor-pointer text-[15px]">
                  Short by:
                  <Popover
                    placement="bottom"
                    title={""}
                    content={
                      <ul className="space-y-3 w-[100px] text-center">
                        <li
                        
//////////////////////////////////////////////////////////////////////////////////////////
                        onClick={() => handleSortClick("title")} // Sort qilishni funksiyasi
//////////////////////////////////////////////////////////////////////////////////////////
                          className=" hover:scale-125 duration-300 hover:font-bold cursor-pointer"
                        >
                          Title sort
                        </li>
                        <li
                        
//////////////////////////////////////////////////////////////////////////////////////////
                         onClick={() => handleSortClick("cost")} // Sort qilishni funksiyasi
                        
//////////////////////////////////////////////////////////////////////////////////////////
                          className="hover:scale-125 duration-300 hover:font-bold cursor-pointer"
                        >
                          Price sort
                        </li>
                      </ul>
                    }
                    arrow={mergedArrow}
                  >
                    <h2>Default sorting</h2>
                  </Popover>
                </div>
                </div>
              </div>
              <ul className="mt-[31px] flex flex-wrap gap-[30px] text-center md:text-left justify-center md:justify-start">
                {isLoading
                  ? "Loading..."
                  : plantProducts?.length
                  ? plantProducts.map((item: any) => (
                      <Product setRefresh={setRefresh} refresh={refresh} key={item.product_id} item={item}/>
                    ))
                  : 
                  <div className="flex items-center justify-center w-[60%]">
                  <Image src={NothingImg} alt="No products found" />
                </div>
                  }
              </ul>
              <div className="mt-[90px] flex justify-center md:justify-end">
                <Pagination onChange={(e) => {
                  setIsLoading(true)
                  setTimeout(() => {
                    setPage(e)
                  }, 500)
                }
                } defaultCurrent={page} total={limit} />
              </div>
            </div>
          </div>
          <br/>
          <div className="mt-[100px]  hidden md:block">
          <div className=" container flex items-center gap-[30px] mb-[20px]">
            <div>
              <div className=" w-[586px] h-[290px] bg-[#FBFBFB]">
                <p className="absolute ">
                  <CustomImage
                      alt="Flower png"
                      height={290}
                      width={290}
                      src={"/photo_1.png"}
                    
                    />
                </p>
                <h1 className="flex  justify-end pr-[30px] pt-[37px] text-[18px] leading-[24px] text-[#3D3D3D] font-bold ">
                  SUMMER CACATUS
                  <br />& SUCCULENTS
                </h1>
                <p className="mt-3 font-normal text-[14px] leading-[24px] text-[#727272]  flex justify-end pr-[30px]">
                  We are an online plant shop offering a wide
                  <br />
                </p>
                <span className=" font-normal text-[14px] leading-[24px] text-[#727272]  flex justify-end pr-[30px]">
                  range of cheap and trendy plants
                </span>
                <p className="flex justify-end mt-[30px] pr-[30px]">
                  <Button
                    bgBtn={false}
                    title="Find More"
                    buttonWidth={140}
                    icon={<ArrowRight />}
                    iconPosition="next"
                  />
                </p>
              </div>
            </div>
            <div>
              <div className="w-[586px] h-[250px] bg-[#FBFBFB]">
                <p className="absolute ">
                  <CustomImage
                    alt="Flower png"
                    height={292}
                    width={292}
                    src={"/photo_2.png"}
                  />
                </p>
                <h1 className="flex  justify-end pr-[30px] pt-[37px] text-[18px] leading-[24px] text-[#3D3D3D] font-bold ">
                  STYLING TRENDS
                  <br />& MUCH MORE
                </h1>
                <p className=" mt-3 font-normal text-[14px] leading-[24px] text-[#727272]  flex justify-end pr-[30px]">
                  We are an online plant shop offering a wide
                  <br />
                </p>
                <span className=" font-normal text-[14px] leading-[24px] text-[#727272]  flex justify-end pr-[30px]">
                  range of cheap and trendy plants
                </span>
                <p className="flex justify-end mt-[30px] pr-[30px]">
                  <Button
                    bgBtn={false}
                    title="Find More"
                    buttonWidth={140}
                    icon={<ArrowRight />}
                    iconPosition="next"
                  />
                </p>
              </div>
            </div>
          </div>
          </div>
          <div className="container pt-[138px] pl-[22px] hidden md:block">
            <h1 className="text-[30px] leading-[16px] text-[3D3D3D] text-center font-semibold">
              Our Blog Posts
            </h1>
            <p className="text-[14px] leading-[24px] text-[#727272] font-normal text-center pt-[15px]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
            <div className=" flex items-center justify-between ml-[-22px] pt-[40px]">
              <div>
                <CustomImage
                  src={"/01.png"}
                  width={268}
                  height={196}
                  alt="Blog Post Image 1"
                />
                <div className="bg-[#FBFBFB] w-[250px] h-[167px]">
                  <p className="text-[#46A358] text-[14px] leading-[16px] pt-[9px] pl-[15px] font-medium">
                    September 12 I Read in 6 minutes
                  </p>
                  <h1 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] pt-[4px] pl-[15px]">
                    Cactus & Succulent Care Tips
                  </h1>
                  <p className="pt-[4px] pl-[15px] text-[#727272] text-[14px] leading-[22px] font-normal">
                    Cacti are succulents are easy care plants for any home or
                    patio.{" "}
                  </p>
                  <Button
                    bgBtn={true}
                    title="Read More"
                    buttonWidth={110}
                    icon={<ArrowBtnRight />}
                    iconPosition="next"
                  />
                </div>
              </div>
              <div>
                <CustomImage
                  src={"/02.png"}
                  width={268}
                  height={196}
                  alt="Blog Post Image 1"
                />
                <div className="bg-[#FBFBFB] w-[250px] h-[167px]">
                  <p className="text-[#46A358] text-[14px] leading-[16px] pt-[9px] pl-[15px] font-medium">
                  September 13 I Read in 2 minutes
                  </p>
                  <h1 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] pt-[4px] pl-[15px]">
                  Top 10 Succulents for Your Home
                  </h1>
                  <p className="pt-[4px] pl-[15px] text-[#727272] text-[14px] leading-[22px] font-normal">
                  Best in hanging baskets. Prefers medium to high light.
                  </p>
                  <Button
                    bgBtn={true}
                    title="Read More"
                    buttonWidth={110}
                    icon={<ArrowBtnRight />}
                    iconPosition="next"
                  />
                </div>
              </div>
              <div>
                <CustomImage
                  src={"/03.png"}
                  width={268}
                  height={196}
                  alt="Blog Post Image 1"
                />
                <div className="bg-[#FBFBFB] w-[250px] h-[167px]">
                  <p className="text-[#46A358] text-[14px] leading-[16px] pt-[9px] pl-[15px] font-medium">
                  September 15 I Read in 3 minutes
                  </p>
                  <h1 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] pt-[4px] pl-[15px]">
                  Cacti & Succulent Care Tips
                  </h1>
                  <p className="pt-[4px] pl-[15px] text-[#727272] text-[14px] leading-[22px] font-normal">
                  Cacti and succulents thrive in containers and because most are..
                  </p>
                  <Button
                    bgBtn={true}
                    title="Read More"
                    buttonWidth={110}
                    icon={<ArrowBtnRight />}
                    iconPosition="next"
                  />
                </div>
              </div>
              <div>
                <CustomImage
                  src={"/04.png"}
                  width={268}
                  height={196}
                  alt="Blog Post Image 1"
                />
                <div className="bg-[#FBFBFB] w-[250px] h-[167px]">
                  <p className="text-[#46A358] text-[14px] leading-[16px] pt-[9px] pl-[15px] font-medium">
                  September 15  I Read in 2 minutes
                  </p>
                  <h1 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] pt-[4px] pl-[15px]">
                  Best Houseplants 
                  Room by Room
                  </h1>
                  <p className="pt-[4px] pl-[15px] text-[#727272] text-[14px] leading-[22px] font-normal">
                  The benefits of houseplants are endless. In addition to..
                  </p>
                  <Button
                    bgBtn={true}
                    title="Read More"
                    buttonWidth={110}
                    icon={<ArrowBtnRight />}
                    iconPosition="next"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
























