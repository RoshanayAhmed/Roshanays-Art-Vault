import { useCallback } from "react";
import { useRouter } from "next/router";
import TopHeader from "../components/top-header";
import Header7 from "../components/header7";
import LineIcon from "../components/line-icon";
import Roadmap from "../components/roadmap";
import EditProfileFormContainer from "../components/edit-profile-form-container";
import Footer from "../components/footer";

const Account = () => {
  const router = useRouter();

  const onAboutTextClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  return (
    <div className="relative bg-primary w-full h-[1533px] text-left text-base text-text2 font-title-16px-medium">
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
        frameDivFlexShrink="0"
        frameDivCursor="unset"
        frameDivCursor1="pointer"
        propBorderRadius="47px"
        onAboutTextClick={onAboutTextClick}
      />
      <LineIcon imageDimensions="/line-3@2x.png" propWidth="1440px" />
      <Roadmap
        account="Home"
        line13="/line-13@2x.png"
        nothing="My Account"
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
        roadmapFlexShrink="0"
        lineIconOpacity="unset"
        nothingOpacity="unset"
        lineIconOpacity1="unset"
        nothingOpacity1="unset"
        lineIconOpacity2="unset"
        nothingOpacity2="unset"
        lineIconOpacity3="unset"
      />
      <div className="absolute top-[222px] left-[1166px] text-sm leading-[21px]">
        <span>{`Welcome! `}</span>
        <span className="text-button2">Md Rimel</span>
      </div>
      <div className="absolute top-[323px] left-[135px] leading-[24px] font-medium">
        Manage My Account
      </div>
      <div className="absolute top-[475px] left-[135px] leading-[24px] font-medium">
        My Orders
      </div>
      <div className="absolute top-[587px] left-[135px] leading-[24px] font-medium inline-block w-[93px] h-[23px]">
        My WishList
      </div>
      <div className="absolute top-[363px] left-[170px] shrink-0 flex flex-col items-start justify-start gap-[8px]">
        <div className="relative leading-[24px] text-button2">My Profile</div>
        <div className="relative leading-[24px] opacity-[0.5]">
          Address Book
        </div>
        <div className="relative leading-[24px] opacity-[0.5]">
          My Payment Options
        </div>
      </div>
      <div className="absolute top-[515px] left-[170px] shrink-0 flex flex-col items-start justify-start gap-[8px]">
        <div className="relative leading-[24px] opacity-[0.5]">My Returns</div>
        <div className="relative leading-[24px] opacity-[0.5]">
          My Cancellations
        </div>
      </div>
      <EditProfileFormContainer />
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
        footerTop="1093px"
        footerLeft="0px"
        footerWidth="1440px"
        underLineIconWidth="1440px"
      />
    </div>
  );
};

export default Account;
