import React from "react";
// @import component
import Slider from "react-slick";
// @import style
import {
  SlideItemBody,
  CommonBankBody,
  BankSmallCard,
  BankCard,
  NextArrow,
  PrevArrow,
  WhiteSmallCard,
  WhiteCard,
  BankHeader,
} from "./style";
// @import component
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

import { Text } from "components/CustomText";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};
function BankSlider() {
  return (
    <Slider
      {...settings}
      nextArrow={
        <div>
          <NextArrow>
            <HiOutlineChevronRight size={20} color="#000000" />
          </NextArrow>
        </div>
      }
      prevArrow={
        <div>
          <PrevArrow>
            <HiOutlineChevronLeft size={20} color="#000000" />
          </PrevArrow>
        </div>
      }
    >
      <SlideItemBody>
        <BankSmallCard>
          <div>
            <BankHeader>
              <Text fontSize="12px">United Bank</Text>
              <Text fontSize="12px" fontWeight="bold">
                $
              </Text>
            </BankHeader>
            <WhiteSmallCard />
          </div>

          <Text fontSize="12px">4352</Text>
        </BankSmallCard>
      </SlideItemBody>
      <CommonBankBody>
        <BankCard>
          <div>
            <BankHeader>
              <Text fontSize="16px">United Bank</Text>
              <Text fontSize="16px" fontWeight="bold">
                $
              </Text>
            </BankHeader>
            <WhiteCard />
          </div>
          <Text fontSize="18px" fontWeight="bold">
            4352
          </Text>
        </BankCard>
      </CommonBankBody>
    </Slider>
  );
}
export default BankSlider;
