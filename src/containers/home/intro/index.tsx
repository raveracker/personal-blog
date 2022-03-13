import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "../../../components/gatsby-image";
import SocialProfile from "../../../components/social-profile/social-profile";
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Description,
  IntroInfo
} from "./style";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoReddit
} from "react-icons/io";
import { ImStackoverflow } from "react-icons/im";

type IntroProps = {};

const SocialLinks = [
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/allanjeo",
    tooltip: "Instagram"
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/allan_jeo",
    tooltip: "Twitter"
  },
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/raveracker",
    tooltip: "Github"
  },
  {
    icon: <IoLogoReddit />,
    url: "https://www.reddit.com/user/Secure-Letterhead-39",
    tooltip: "Reddit"
  },
  {
    icon: <ImStackoverflow />,
    url: "https://stackoverflow.com/users/12510072/allan-joseph",
    tooltip: "Stack Overflow"
  }
];

const Intro: React.FunctionComponent<IntroProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  const { author, about } = Data.site.siteMetadata;
  const AuthorImage = Data.avatar.childImageSharp.gatsbyImageData;

  const description = (
    <p>
      {about}
      <a href="https://www.procedure.tech" target="_blank">
        procedure.tech
      </a>
    </p>
  );

  return (
    <IntroWrapper>
      <IntroImage>
        <GatsbyImage src={AuthorImage} alt="author" />
      </IntroImage>
      <IntroInfo>
        <IntroTitle>
          Hey! I’m <b>{author}</b>
        </IntroTitle>
        <Description>{description}</Description>
        <SocialProfile items={SocialLinks} />
      </IntroInfo>
    </IntroWrapper>
  );
};

export default Intro;
