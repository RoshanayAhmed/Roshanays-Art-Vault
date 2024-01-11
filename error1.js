import TopHeader from "../components/top-header";
import Header7 from "../components/header7";
import LineIcon from "../components/line-icon";
import Roadmap from "../components/roadmap";
import ButtonSmallHoverNo from "../components/button-small-hover-no";
import Footer from "../components/footer";

const Error1 = () => {
  return (
    <div className="relative bg-primary w-full h-[1278px] overflow-hidden text-left text-91xl text-text2 font-heading-24px-bold">
      <TopHeader
        dropDown="/dropdown@2x.png"
        showFrameDiv
        showShopNow={false}
        showUncoverTheMagicContainer={false}
        topHeaderPosition="absolute"
        topHeaderTop="0px"
        topHeaderLeft="0px"
        topHeaderWidth="1440px"
        uncoverTheMagicContainerWidth="1025px"
      />
      <Header7
        iconId="/user@2x.png"
        frameDivFlexShrink="unset"
        frameDivCursor="unset"
        frameDivCursor1="unset"
        propBorderRadius="unset"
      />
      <LineIcon imageDimensions="/line-3@2x.png" propWidth="1440px" />
      <Roadmap
        account="Home"
        line13="/line-13@2x.png"
        nothing="404 Error"
        line14="/line-13@2x.png"
        nothing1="Nothing"
        line15="/line-13@2x.png"
        nothing2="Nothing"
        line16="/line-13@2x.png"
        nothing3="Nothing"
        showLineIcon={false}
        showNothing={false}
        lineIconVisible={false}
        nothingVisible={false}
        lineIconVisible1={false}
        nothingVisible1={false}
        roadmapPosition="absolute"
        roadmapTop="222px"
        roadmapLeft="135px"
        roadmapFlexShrink="unset"
        lineIconOpacity="unset"
        nothingOpacity="unset"
        lineIconOpacity1="unset"
        nothingOpacity1="unset"
        lineIconOpacity2="unset"
        nothingOpacity2="unset"
        lineIconOpacity3="unset"
      />
      <div className="absolute top-[383px] left-[306px] flex flex-col items-center justify-start gap-[40px]">
        <div className="relative tracking-[0.03em] leading-[115px] font-medium">
          404 Not Found
        </div>
        <div className="relative text-base leading-[24px] font-title-16px-medium">
          Your visited page not found. You may go home page.
        </div>
      </div>
      <ButtonSmallHoverNo
        addToCart="Back to home page"
        buttonSmallHoverNoPadding="16px 48px"
        buttonSmallHoverNoFlexShrink="unset"
        buttonSmallHoverNoPosition="absolute"
        buttonSmallHoverNoTop="642px"
        buttonSmallHoverNoLeft="572px"
        buttonSmallHoverNoBackgroundColor="#db4444"
        buttonSmallHoverNoBorder="unset"
        buttonSmallHoverNoWidth="unset"
        buttonSmallHoverNoHeight="unset"
        addToCartColor="#fafafa"
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
        footerHeight="440px"
        footerPosition="absolute"
        footerTop="838px"
        footerLeft="0px"
        footerWidth="1440px"
        underLineIconWidth="1440px"
      />
    </div>
  );
};

export default Error1;
