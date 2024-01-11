import { useCallback } from "react";
import { useRouter } from "next/router";
import TopHeader from "../components/top-header";
import Header3 from "../components/header3";
import LineIcon from "../components/line-icon";
import Roadmap from "../components/roadmap";
import PlaceToInfoBox from "../components/place-to-info-box";
import Footer from "../components/footer";
import WildValorCard from "../components/wild-valor-card";

const CheckOut = () => {
  const router = useRouter();

  const onUserIconClick = useCallback(() => {
    router.push("/account");
  }, [router]);

  return (
    <div className="relative bg-primary w-full h-[1795px] text-left text-17xl text-text2 font-heading-24px-bold">
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
      <Header3
        navItemText="RAV"
        pageTitle="Home"
        linkText="Contact"
        sectionTitle="About"
        buttonText="Sign Up"
        searchQuery="What are you looking for?"
        iconImageUrl="/component-2@2x.png"
        dimensionImageUrl="/vector@2x.png"
        itemNumber="4"
        componentImageUrl="/cartoff@2x.png"
        itemIndex="2"
        imageAltText="/user@2x.png"
        frameDivFlexShrink="0"
        component2IconFlexShrink="0"
        component2IconDisplay="flex"
        component2IconFlexDirection="row"
        component2IconAlignItems="flex-start"
        component2IconJustifyContent="flex-start"
        component2IconGap="48px"
        frameDivPosition="relative"
        frameDivWidth="48px"
        frameDivHeight="24px"
        wishlistPosition="absolute"
        wishlistTop="0%"
        wishlistLeft="0%"
        wishlistFontSize="16px"
        wishlistLineHeight="24px"
        wishlistFontFamily="Poppins"
        wishlistColor="#000"
        wishlistTextAlign="center"
        wishlistDisplay="inline-block"
        vectorIconPosition="relative"
        vectorIconWidth="66px"
        vectorIconHeight="24px"
        groupDivPosition="absolute"
        groupDivTop="0%"
        groupDivLeft="0%"
        groupDivFontSize="16px"
        groupDivLineHeight="24px"
        groupDivFontFamily="Poppins"
        groupDivColor="#000"
        groupDivTextAlign="center"
        groupDivDisplay="inline-block"
        ellipseDivPosition="relative"
        ellipseDivWidth="48px"
        ellipseDivHeight="24px"
        divPosition="absolute"
        divTop="0%"
        divLeft="0%"
        divFontSize="16px"
        divLineHeight="24px"
        divFontFamily="Poppins"
        divColor="#000"
        divTextAlign="center"
        divDisplay="inline-block"
        cart1WithBuyPosition="relative"
        cart1WithBuyWidth="61px"
        cart1WithBuyHeight="24px"
        cart1IconPosition="absolute"
        cart1IconTop="0%"
        cart1IconLeft="0%"
        cart1IconFontSize="16px"
        cart1IconLineHeight="24px"
        cart1IconFontFamily="Poppins"
        cart1IconColor="#000"
        cart1IconTextAlign="center"
        cart1IconDisplay="inline-block"
        groupDivFlexShrink="0"
        groupDivDisplay1="flex"
        groupDivFlexDirection="row"
        groupDivAlignItems="center"
        groupDivJustifyContent="flex-start"
        groupDivGap="24px"
        ellipseDivBorderRadius="4px"
        ellipseDivBackgroundColor="#f5f5f5"
        ellipseDivFlexDirection="column"
        ellipseDivJustifyContent="center"
        ellipseDivPadding="7px 12px 7px 20px"
        ellipseDivBoxSizing="border-box"
        divFlexDirection="row"
        divGap="34px"
        userIconPosition="relative"
        userIconFontSize="12px"
        userIconLineHeight="18px"
        userIconFontFamily="Poppins"
        userIconColor="#000"
        userIconTextAlign="left"
        userIconDisplay="inline-block"
        userIconOpacity="0.5"
        propWidth="24px"
        propHeight="24px"
        propOverflow="hidden"
        propFlexShrink="0"
        propObjectFit="cover"
        propDisplay1="flex"
        propFlexDirection="row"
        propAlignItems="center"
        propJustifyContent="center"
        propGap="16px"
        propPosition1="relative"
        propWidth2="32px"
        propHeight2="32px"
        propOverflow2="hidden"
        propPosition2="absolute"
        propHeight3="56.25%"
        propWidth3="62.5%"
        propTop="21.88%"
        propRight="18.75%"
        propBottom="21.88%"
        propLeft="18.75%"
        propMaxWidth="100%"
        propMaxHeight="100%"
        propObjectFit2="cover"
        propHeight4="53.13%"
        propWidth4="50%"
        propTop1="0%"
        propRight1="0%"
        propBottom1="46.88%"
        propLeft1="50%"
        propHeight5="94.12%"
        propWidth5="100%"
        propTop2="5.88%"
        propBottom2="0%"
        propLeft2="0%"
        propBorderRadius="50%"
        propBackgroundColor="#db4444"
        propHeight6="100%"
        propWidth6="43.75%"
        propTop3="0%"
        propLeft3="25%"
        propFontSize1="12px"
        propLineHeight1="18px"
        propFontFamily1="Poppins"
        propColor1="#fafafa"
        propTextAlign1="center"
        propDisplay3="inline-block"
        propPosition3="relative"
        propWidth7="32px"
        propHeight7="32px"
        propPosition4="absolute"
        propHeight8="75%"
        propWidth8="75%"
        propTop5="25%"
        propRight3="21.88%"
        propBottom4="0%"
        propLeft5="3.13%"
        propMaxWidth2="100%"
        propOverflow4="hidden"
        propMaxHeight2="100%"
        propObjectFit4="cover"
        propHeight9="53.13%"
        propWidth9="50%"
        propTop6="3.13%"
        propRight4="3.13%"
        propBottom5="43.75%"
        propLeft6="46.88%"
        propHeight10="94.12%"
        propWidth10="100%"
        propTop7="5.88%"
        propRight5="0%"
        propBottom6="0%"
        propLeft7="0%"
        propBorderRadius2="50%"
        propBackgroundColor2="#db4444"
        propHeight11="100%"
        propWidth11="43.75%"
        propTop8="0%"
        propLeft8="31.25%"
        propFontSize3="12px"
        propLineHeight3="18px"
        propFontFamily3="Poppins"
        propColor3="#fafafa"
        propTextAlign3="center"
        propDisplay5="inline-block"
        propPosition5="relative"
        propWidth12="32px"
        propHeight12="32px"
        propOverflow6="hidden"
        propFlexShrink2="0"
        propObjectFit6="cover"
        propCursor="pointer"
        onUserIconClick={onUserIconClick}
      />
      <LineIcon imageDimensions="/line-3@2x.png" propWidth="1440px" />
      <Roadmap
        account="Account"
        line13="/line-13@2x.png"
        nothing="My Account"
        line14="/line-13@2x.png"
        nothing1="Product"
        line15="/line-13@2x.png"
        nothing2="View Cart"
        line16="/line-13@2x.png"
        nothing3="CheckOut"
        showLineIcon
        showNothing
        lineIconVisible
        nothingVisible
        lineIconVisible1
        nothingVisible1
        roadmapPosition="absolute"
        roadmapTop="222px"
        roadmapLeft="135px"
        roadmapFlexShrink="0"
        lineIconOpacity="0.5"
        nothingOpacity="0.5"
        lineIconOpacity1="0.5"
        nothingOpacity1="0.5"
        lineIconOpacity2="0.5"
        nothingOpacity2="0.5"
        lineIconOpacity3="0.5"
      />
      <div className="absolute top-[323px] left-[135px] shrink-0 flex flex-col items-start justify-start">
        <div className="relative tracking-[0.04em] leading-[30px] font-medium">
          Billing Details
        </div>
      </div>
      <div className="absolute top-[401px] left-[135px] shrink-0 flex flex-col items-start justify-start gap-[24px] text-base font-title-16px-medium">
        <div className="shrink-0 flex flex-col items-start justify-start gap-[32px]">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] opacity-[0.4]">
              <span>First Name</span>
              <span className="text-button2">*</span>
            </div>
            <PlaceToInfoBox
              placeToInfoBoxPosition="relative"
              placeToInfoBoxFlexShrink="0"
              placeToInfoBoxWidth="470px"
              placeToInfoBoxHeight="50px"
              placeToInfoBoxTop="unset"
              placeToInfoBoxRight="unset"
              placeToInfoBoxBottom="unset"
              placeToInfoBoxLeft="unset"
            />
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] opacity-[0.4]">
              Company Name
            </div>
            <div className="relative rounded-9xs bg-secondary w-[470px] h-[50px] overflow-hidden shrink-0" />
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] opacity-[0.4]">
              <span>Street Address</span>
              <span className="text-button2">*</span>
            </div>
            <div className="relative rounded-9xs bg-secondary w-[470px] h-[50px] overflow-hidden shrink-0" />
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] opacity-[0.4]">
              Apartment, floor, etc. (optional)
            </div>
            <div className="relative rounded-9xs bg-secondary w-[470px] h-[50px] overflow-hidden shrink-0" />
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] opacity-[0.4]">
              <span>Town/City</span>
              <span className="text-button2">*</span>
            </div>
            <div className="relative rounded-9xs bg-secondary w-[470px] h-[50px] overflow-hidden shrink-0" />
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] opacity-[0.4]">
              <span>Phone Number</span>
              <span className="text-button2">*</span>
            </div>
            <div className="relative rounded-9xs bg-secondary w-[470px] h-[50px] overflow-hidden shrink-0" />
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] opacity-[0.4]">
              <span>Email Address</span>
              <span className="text-button2">*</span>
            </div>
            <div className="relative rounded-9xs bg-secondary w-[470px] h-[50px] overflow-hidden shrink-0" />
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[16px]">
          <img
            className="relative rounded-9xs w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/iconcheckbox@2x.png"
          />
          <div className="relative leading-[24px]">
            Save this information for faster check-out next time
          </div>
        </div>
      </div>
      <Footer
        underLine="/underline@2x.png"
        iconCopyright="/iconcopyright@2x.png"
        rAV="RAV"
        iconSend="/iconsend@2x.png"
        iconFacebook="/iconfacebook@2x.png"
        iconTwitter="/icontwitter@2x.png"
        iconInstagram="/iconinstagram@2x.png"
        iconLinkedin="/iconlinkedin@2x.png"
        footerHeight="440px"
        footerPosition="absolute"
        footerTop="1355px"
        footerLeft="0px"
        footerWidth="1440px"
        underLineIconWidth="1440px"
      />
      <WildValorCard />
    </div>
  );
};

export default CheckOut;
