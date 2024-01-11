import { useCallback } from "react";
import { useRouter } from "next/router";
import TopHeader from "../components/top-header";
import Header4 from "../components/header4";
import LineIcon from "../components/line-icon";
import UnderLineIcon from "../components/under-line-icon";
import ButtonSmallHoverNo from "../components/button-small-hover-no";
import Footer from "../components/footer";

const RAVLogIn = () => {
  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative bg-primary w-full h-[1561px] overflow-hidden text-left text-17xl text-text2 font-heading-24px-bold">
      <TopHeader
        dropDown="/dropdown@2x.png"
        showFrameDiv
        showShopNow
        showUncoverTheMagicContainer
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
        topHeaderWidth="1440px"
        uncoverTheMagicContainerWidth="1025px"
      />
      <Header4 />
      <LineIcon imageDimensions="/line-3@2x.png" propWidth="1440px" />
      <div className="absolute top-[200px] left-[0px] flex flex-row items-center justify-start gap-[129px]">
        <div className="relative rounded-tl-none rounded-tr-9xs rounded-br-9xs rounded-bl-none bg-powderblue w-[805px] h-[781px] overflow-hidden shrink-0">
          <img
            className="absolute top-[0px] left-[0px] w-[805px] h-[781px] object-cover"
            alt=""
            src="/brush6@2x.png"
          />
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start gap-[40px]">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[48px]">
            <div className="shrink-0 flex flex-col items-start justify-start gap-[24px]">
              <div className="relative tracking-[0.04em] leading-[30px] font-medium">
                Log in to RAV
              </div>
              <div className="relative text-base leading-[24px] font-title-16px-medium">
                Enter your details below
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start gap-[40px] text-base font-title-16px-medium">
              <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative leading-[24px] opacity-[0.4]">
                  Email or Phone Number
                </div>
                <UnderLineIcon
                  underLineIconUnderLine="/underline@2x.png"
                  underLineIconWidth="370px"
                  underLineIconPosition="relative"
                  underLineIconMaxHeight="100%"
                  underLineIconHeight="unset"
                  underLineIconOpacity="0.5"
                  underLineIconTop="unset"
                  underLineIconLeft="unset"
                />
              </div>
              <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
                <div className="relative leading-[24px] opacity-[0.4]">
                  Password
                </div>
                <UnderLineIcon
                  underLineIconUnderLine="/underline@2x.png"
                  underLineIconWidth="370px"
                  underLineIconPosition="relative"
                  underLineIconMaxHeight="100%"
                  underLineIconHeight="unset"
                  underLineIconOpacity="0.5"
                  underLineIconTop="unset"
                  underLineIconLeft="unset"
                />
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-center justify-start gap-[87px] text-base text-button2 font-title-16px-medium">
            <div className="shrink-0 flex flex-col items-start justify-start">
              <ButtonSmallHoverNo
                addToCart="Log In"
                buttonSmallHoverNoPadding="16px 48px"
                buttonSmallHoverNoFlexShrink="0"
                buttonSmallHoverNoPosition="unset"
                buttonSmallHoverNoTop="unset"
                buttonSmallHoverNoLeft="unset"
                buttonSmallHoverNoBackgroundColor="#db4444"
                buttonSmallHoverNoBorder="unset"
                buttonSmallHoverNoWidth="unset"
                buttonSmallHoverNoHeight="unset"
                addToCartColor="#fafafa"
              />
            </div>
            <div className="relative leading-[24px]">Forget Password?</div>
          </div>
        </div>
      </div>
      <Footer
        underLine="/underline@2x.png"
        iconCopyright="/iconcopyright@2x.png"
        rAV="RAV "
        iconSend="/iconsend@2x.png"
        iconFacebook="/iconfacebook@2x.png"
        iconTwitter="/icontwitter@2x.png"
        iconInstagram="/iconinstagram@2x.png"
        iconLinkedin="/iconlinkedin@2x.png"
        footerHeight="440px"
        footerPosition="absolute"
        footerTop="1121px"
        footerLeft="0px"
        footerWidth="1440px"
        underLineIconWidth="1440px"
      />
    </div>
  );
};

export default RAVLogIn;
