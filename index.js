import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent10 from "../components/frame-component10";
import ButtonSmallHoverNo from "../components/button-small-hover-no";
import FrameComponent11 from "../components/frame-component11";
import JourneyCard from "../components/journey-card";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent12 from "../components/frame-component12";
import FrameComponent13 from "../components/frame-component13";
import FullServices from "../components/full-services";
import Footer from "../components/footer";
import TopHeader from "../components/top-header";
import Header6 from "../components/header6";
import LineIcon from "../components/line-icon";

const RAVHomePage = () => {
  const router = useRouter();

  const onWinterFeelsCartClick = useCallback(() => {
    router.push("/product-details-page");
  }, [router]);

  const onHeaderContainer3Click = useCallback(() => {
    router.push("/r-a-v-sign-up");
  }, [router]);

  return (
    <div className="relative bg-primary w-full h-[4662px] overflow-hidden text-left text-5xl text-text2 font-heading-24px-bold">
      <div className="absolute top-[1334.8px] left-[134.8px] box-border w-[1170.5px] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
      <div className="absolute top-[1797.8px] left-[134.8px] box-border w-[1170.5px] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
      <FrameComponent10 />
      <ButtonSmallHoverNo
        addToCart="View All Products"
        buttonSmallHoverNoPadding="16px 48px"
        buttonSmallHoverNoFlexShrink="unset"
        buttonSmallHoverNoPosition="absolute"
        buttonSmallHoverNoTop="1295px"
        buttonSmallHoverNoLeft="634px"
        buttonSmallHoverNoBackgroundColor="#db4444"
        buttonSmallHoverNoBorder="unset"
        buttonSmallHoverNoWidth="215px"
        buttonSmallHoverNoHeight="40px"
        addToCartColor="#fafafa"
      />
      <FrameComponent11 />
      <section className="absolute top-[-680px] left-[135px] h-[2612px] flex flex-col items-start justify-start gap-[60px]">
        <JourneyCard propFlexShrink="0" propGap="20px" propHeight="40px" />
        <FrameComponent9 />
      </section>
      <FrameComponent12 />
      <FrameComponent13 />
      <FullServices
        services="/services@2x.png"
        services1="/services@2x.png"
        services2="/services@2x.png"
        services3="/services@2x.png"
        showFrameDiv
        frameDivVisible={false}
        fullServicesPosition="absolute"
        fullServicesTop="3917px"
        fullServicesLeft="244px"
      />
      <Footer
        underLine="/underline@2x.png"
        iconCopyright="/iconcopyright@2x.png"
        rAV="RAV"
        iconSend="/iconsend@2x.png"
        iconFacebook="/iconfacebook@2x.png"
        iconTwitter="/icontwitter@2x.png"
        iconInstagram="/iconinstagram@2x.png"
        iconLinkedin="/iconlinkedin@2x.png"
        footerHeight="444px"
        footerPosition="absolute"
        footerTop="4218px"
        footerLeft="2px"
        footerWidth="1440px"
        underLineIconWidth="1440px"
      />
      <TopHeader
        dropDown="/dropdown@2x.png"
        showFrameDiv={false}
        showShopNow
        showUncoverTheMagicContainer
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
        topHeaderWidth="1440px"
        uncoverTheMagicContainerWidth="1025px"
      />
      <Header6 />
      <LineIcon imageDimensions="/line-3@2x.png" propWidth="1440px" />
      <img
        className="absolute top-[4172px] left-[1234px] w-[46px] h-[46px] object-contain"
        alt=""
        src="/fill-with-up-arrow@2x.png"
      />
      <b className="absolute top-[63px] left-[1142px] tracking-[0.03em] leading-[24px] whitespace-pre-wrap">{`   `}</b>
    </div>
  );
};

export default RAVHomePage;
