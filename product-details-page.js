import { useCallback } from "react";
import { useRouter } from "next/router";
import TopHeader from "../components/top-header";
import Header7 from "../components/header7";
import LineIcon from "../components/line-icon";
import Roadmap from "../components/roadmap";
import FourStar from "../components/four-star";
import UnderLineIcon from "../components/under-line-icon";
import ButtonSmallHoverNo from "../components/button-small-hover-no";
import FreeDeliveryCard from "../components/free-delivery-card";
import ArtVaultCard from "../components/art-vault-card";
import Footer from "../components/footer";

const ProductDetailsPage = () => {
  const router = useRouter();

  const onHeaderContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative bg-primary w-full h-[2093px] overflow-hidden text-left text-5xl text-text2 font-title-16px-medium">
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
      <Header7
        iconId="/user@2x.png"
        frameDivCursor="pointer"
        onHeaderContainerClick={onHeaderContainerClick}
      />
      <LineIcon imageDimensions="/line-3@2x.png" propWidth="1440px" />
      <Roadmap
        account="Account"
        line13="/line-13@2x.png"
        nothing="Gaming"
        line14="/line-13@2x.png"
        nothing1="Product"
        line15="/line-13@2x.png"
        nothing2="View Cart"
        line16="/line-13@2x.png"
        nothing3="Meow forever"
        showLineIcon={false}
        showNothing={false}
        lineIconVisible={false}
        nothingVisible={false}
        lineIconVisible1
        nothingVisible1
        roadmapPosition="absolute"
        roadmapTop="222px"
        roadmapLeft="135px"
        roadmapFlexShrink="unset"
        lineIconOpacity="0.5"
        nothingOpacity="0.5"
        lineIconOpacity1="0.5"
        nothingOpacity1="0.5"
        lineIconOpacity2="0.5"
        nothingOpacity2="0.5"
        lineIconOpacity3="0.5"
      />
      <div className="absolute top-[323px] left-[335px] rounded-9xs bg-secondary w-[500px] h-[600px] overflow-hidden">
        <img
          className="absolute top-[61px] left-[8.5px] w-[486.5px] h-[486px] object-cover"
          alt=""
          src="/meow@2x.png"
        />
      </div>
      <div className="absolute top-[323px] left-[135px] rounded-9xs bg-secondary w-[170px] h-[138px] overflow-hidden">
        <img
          className="absolute top-[12px] left-[24px] w-[121px] h-[114px] object-contain"
          alt=""
          src="/image-57@2x.png"
        />
      </div>
      <div className="absolute top-[477px] left-[135px] rounded-9xs bg-secondary w-[170px] h-[138px] overflow-hidden">
        <img
          className="absolute top-[20px] left-[29px] w-28 h-[97px] object-contain"
          alt=""
          src="/image-58@2x.png"
        />
      </div>
      <div className="absolute top-[631px] left-[135px] rounded-9xs bg-secondary w-[170px] h-[138px] overflow-hidden">
        <img
          className="absolute top-[22px] left-[18px] w-[134px] h-[94px] object-cover"
          alt=""
          src="/image-61@2x.png"
        />
      </div>
      <div className="absolute top-[323px] left-[906px] tracking-[0.03em] leading-[24px] font-semibold font-heading-24px-bold">
        <p className="m-0">Whiskers in Wonderland</p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="absolute top-[400px] left-[905px] tracking-[0.03em] leading-[24px] font-heading-24px-bold">
        $0.00
      </div>
      <div className="absolute top-[363px] left-[905px] flex flex-row items-start justify-start gap-[16px] text-sm">
        <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
          <FourStar
            vector="/vector@2x.png"
            vector1="/vector@2x.png"
            vector2="/vector@2x.png"
            vector3="/vector@2x.png"
            vector4="/vector@2x.png"
            fourStarFlexShrink="0"
          />
          <div className="relative leading-[21px] opacity-[0.5]">
            (150 Reviews)
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-start gap-[16px] text-button1">
          <div className="relative box-border w-px h-[17px] opacity-[0.5] border-r-[1px] border-solid border-text2" />
          <div className="relative leading-[21px] opacity-[0.6]">In Stock</div>
        </div>
      </div>
      <div className="absolute top-[448px] left-[905px] text-sm leading-[21px] whitespace-pre-wrap inline-block w-[373px]">
        <p className="m-0">
          This 12x12in cat painting is an ideal addition to any art collection,
          bringing a sense of joy and enchantment to the viewer. Hand painted on
          fine wood double thick imported canvas with high quality Oil Paints
          and varnished.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`Parcel contains 12x12 inches Oil Painting wrapped carefully. `}</p>
        <p className="m-0">{`   `}</p>
      </div>
      <UnderLineIcon
        underLineIconUnderLine="/underline@2x.png"
        underLineIconWidth="400px"
        underLineIconPosition="absolute"
        underLineIconMaxHeight="100%"
        underLineIconHeight="unset"
        underLineIconOpacity="0.5"
        underLineIconTop="629px"
        underLineIconLeft="905px"
      />
      <div className="absolute top-[659px] left-[906px] w-[159px] h-11 flex flex-row items-start justify-start text-xl">
        <div className="relative rounded-tl-9xs rounded-tr-none rounded-br-none rounded-bl-9xs box-border w-10 h-11 overflow-hidden shrink-0 border-[1px] border-solid border-gray-600">
          <img
            className="absolute top-[10px] left-[8px] w-6 h-6 overflow-hidden object-cover"
            alt=""
            src="/iconminus@2x.png"
          />
        </div>
        <div className="relative box-border w-20 h-11 overflow-hidden shrink-0 ml-[-1px] border-t-[1px] border-solid border-gray-600 border-b-[1px]">
          <div className="absolute top-[8px] left-[34px] leading-[28px] font-medium">
            1
          </div>
        </div>
        <img
          className="relative rounded-tl-none rounded-tr-9xs rounded-br-9xs rounded-bl-none w-[41px] h-11 overflow-hidden shrink-0 object-cover ml-[-1px]"
          alt=""
          src="/frame-907@2x.png"
        />
      </div>
      <ButtonSmallHoverNo
        addToCart="Buy Now"
        buttonSmallHoverNoPadding="10px 48px"
        buttonSmallHoverNoFlexShrink="unset"
        buttonSmallHoverNoPosition="absolute"
        buttonSmallHoverNoTop="659px"
        buttonSmallHoverNoLeft="1081px"
        buttonSmallHoverNoBackgroundColor="#db4444"
        buttonSmallHoverNoBorder="unset"
        buttonSmallHoverNoWidth="unset"
        buttonSmallHoverNoHeight="unset"
        addToCartColor="#fafafa"
      />
      <img
        className="absolute top-[661px] left-[1265px] rounded-9xs w-10 h-10 overflow-hidden object-cover"
        alt=""
        src="/frame-904@2x.png"
      />
      <FreeDeliveryCard />
      <ArtVaultCard />
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
        footerTop="1653px"
        footerLeft="0px"
        footerWidth="1440px"
        underLineIconWidth="1440px"
      />
    </div>
  );
};

export default ProductDetailsPage;
