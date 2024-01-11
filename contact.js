import TopHeader from "../components/top-header";
import Header1 from "../components/header1";
import LineIcon from "../components/line-icon";
import Roadmap from "../components/roadmap";
import PlaceboxInfo from "../components/placebox-info";
import ButtonSmallHoverNo from "../components/button-small-hover-no";
import CallToUsFormContainer from "../components/call-to-us-form-container";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <div className="relative bg-primary w-full h-[1360px] overflow-hidden">
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
      <Header1 />
      <LineIcon imageDimensions="/line-3@2x.png" propWidth="1440px" />
      <Roadmap
        account="Home"
        line13="/line-13@2x.png"
        nothing="Cantact"
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
      <div className="absolute top-[323px] left-[505px] rounded-9xs bg-primary shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[800px] h-[457px] overflow-hidden">
        <div className="absolute top-[40px] left-[31px] flex flex-col items-end justify-start gap-[32px]">
          <div className="shrink-0 flex flex-row items-start justify-start gap-[16px]">
            <PlaceboxInfo
              placeboxInfoPosition="relative"
              placeboxInfoWidth="235px"
              placeboxInfoHeight="50px"
              mdColor="unset"
            />
            <PlaceboxInfo
              placeboxInfoPosition="relative"
              placeboxInfoWidth="235px"
              placeboxInfoHeight="50px"
              mdColor="unset"
            />
            <PlaceboxInfo
              placeboxInfoPosition="relative"
              placeboxInfoWidth="235px"
              placeboxInfoHeight="50px"
              mdColor="unset"
            />
          </div>
          <PlaceboxInfo
            md="Your Massage"
            placeboxInfoPosition="relative"
            placeboxInfoWidth="737px"
            placeboxInfoHeight="207px"
            mdColor="#000"
          />
          <ButtonSmallHoverNo
            addToCart="Send Massage"
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
      </div>
      <div className="absolute top-[323px] left-[135px] rounded-9xs bg-primary shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[340px] h-[457px] overflow-hidden">
        <CallToUsFormContainer />
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
        footerTop="920px"
        footerLeft="0px"
        footerWidth="1440px"
        underLineIconWidth="1440px"
      />
    </div>
  );
};

export default Contact;
