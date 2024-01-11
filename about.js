import { useCallback } from "react";
import { useRouter } from "next/router";
import TopHeader from "../components/top-header";
import Header2 from "../components/header2";
import LineIcon from "../components/line-icon";
import Roadmap from "../components/roadmap";
import FullServices from "../components/full-services";
import ServicesFastDelivery from "../components/services-fast-delivery";
import ServicesMoneyBack1 from "../components/services-money-back1";
import ServicesCustomerService1 from "../components/services-customer-service1";
import Footer from "../components/footer";

const About = () => {
  const router = useRouter();

  const onHeaderContainer1Click = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div className="relative bg-primary w-full h-[2061px] overflow-hidden text-left text-lg-7 text-text2 font-title-16px-medium">
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
      <Header2 />
      <LineIcon imageDimensions="/line-3@2x.png" propWidth="1440px" />
      <Roadmap
        account="Home"
        line13="/line-13@2x.png"
        nothing="About"
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
      <div className="absolute top-[422px] left-[135px] flex flex-col items-start justify-start">
        <div className="shrink-0 flex flex-col items-start justify-start gap-[27.98px]">
          <div className="relative leading-[30.31px] inline-block w-[612px]">
            <p className="m-0">
              Welcome to Roshanay's Art Gallery, where creativity meets
              expression. Our art is a journey through emotion and imagination,
              blending realism with abstraction.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              We use high quality painting supplies to create wonderful pieces
              for our valued customers.
            </p>
            <p className="m-0">&nbsp;</p>
          </div>
          <div className="relative leading-[30.31px] inline-block w-[588.7px]">
            <p className="m-0">&nbsp;</p>
            <ul className="m-0 font-inherit text-inherit pl-[25px]">
              <li className="mb-0">
                Your interpretations add hues to our palette; share your
                thoughts and let's converse through art!
              </li>
              <li className="mb-0">{`Dive into the conversation via shanehahmed@gmail.com or catch the behind-the-scenes magic on Instagram: @roshanayahmed `}</li>
            </ul>
            <p className="m-0">&nbsp;</p>
          </div>
        </div>
      </div>
      <FullServices
        services="/services@2x.png"
        services1="/services@2x.png"
        services2="/services@2x.png"
        services3="/services@2x.png"
        showFrameDiv={false}
        frameDivVisible
        fullServicesPosition="absolute"
        fullServicesTop="1372px"
        fullServicesLeft="258px"
      />
      <div className="absolute top-[1034px] left-[135px] flex flex-row items-start justify-start gap-[30px]">
        <div className="relative rounded-9xs box-border w-[270px] h-[230px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300">
          <ServicesFastDelivery
            services="/services@2x.png"
            fREEANDFASTDELIVERY="10.5k "
            freeDeliveryForAllOrdersO="Sallers active our site"
            servicesFastDeliveryFlexShrink="unset"
            servicesFastDeliveryPosition="absolute"
            servicesFastDeliveryTop="30px"
            servicesFastDeliveryLeft="50px"
            frameDivGap="12px"
            fREEANDFASTFontSize="32px"
            fREEANDFASTFontWeight="bold"
            fREEANDFASTFontFamily="Inter"
            fREEANDFASTLetterSpacing="0.04em"
          />
        </div>
        <div className="relative rounded-9xs bg-button2 shadow-[0px_2px_10px_2px_rgba(0,_0,_0,_0.2)] w-[270px] h-[230px] overflow-hidden shrink-0">
          <ServicesMoneyBack1
            services="/services@2x.png"
            mONEYBACKGUARANTEE="33k"
            weReurnMoneyWithin30Days="Mopnthly Produduct Sale"
            servicesMoneyBackFlexShrink="unset"
            servicesMoneyBackPosition="absolute"
            servicesMoneyBackTop="32px"
            servicesMoneyBackLeft="35px"
            frameDivGap="8px"
            mONEYBACKGUARANTEEFontSize="32px"
            mONEYBACKGUARANTEEFontWeight="bold"
            mONEYBACKGUARANTEEFontFamily="Inter"
            mONEYBACKGUARANTEEColor="#fff"
            mONEYBACKGUARANTEELetterSpacing="0.04em"
            weReurnMoneyColor="#fff"
          />
        </div>
        <div className="relative rounded-9xs box-border w-[270px] h-[230px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300">
          <ServicesCustomerService1
            services="/services@2x.png"
            cUSTOMERSERVICE="45.5k"
            friendly247CustomerSuppor="Customer active in our site"
            servicesCustomerServicePosition="absolute"
            servicesCustomerServiceTop="30px"
            servicesCustomerServiceLeft="4px"
            frameDivGap="12px"
            cUSTOMERSERVICEFontSize="32px"
            cUSTOMERSERVICEFontWeight="bold"
            cUSTOMERSERVICEFontFamily="Inter"
            cUSTOMERSERVICELetterSpacing="0.04em"
          />
        </div>
        <div className="relative rounded-9xs box-border w-[270px] h-[230px] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300">
          <ServicesMoneyBack1
            services="/services@2x.png"
            mONEYBACKGUARANTEE="25k"
            weReurnMoneyWithin30Days="Anual gross sale in our site"
            servicesMoneyBackFlexShrink="unset"
            servicesMoneyBackPosition="absolute"
            servicesMoneyBackTop="30px"
            servicesMoneyBackLeft="28px"
            frameDivGap="12px"
            mONEYBACKGUARANTEEFontSize="32px"
            mONEYBACKGUARANTEEFontWeight="bold"
            mONEYBACKGUARANTEEFontFamily="Inter"
            mONEYBACKGUARANTEEColor="#000"
            mONEYBACKGUARANTEELetterSpacing="0.04em"
            weReurnMoneyColor="#000"
          />
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
        footerTop="1621px"
        footerLeft="0px"
        footerWidth="1440px"
        underLineIconWidth="1440px"
      />
      <div className="absolute top-[317px] left-[767px] rounded-tl-9xs rounded-tr-none rounded-br-none rounded-bl-9xs bg-palevioletred w-[583px] h-[609px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[705px] h-[609px] object-cover"
          alt=""
          src="/brush@2x.png"
        />
      </div>
    </div>
  );
};

export default About;
