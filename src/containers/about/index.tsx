import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "../../components/gatsby-image";
import SocialProfile from "../../components/social-profile/social-profile";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin
} from "react-icons/io";
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles
} from "./style";

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/redqinc/",
    tooltip: "Facebook"
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/redqinc/",
    tooltip: "Instagram"
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/redqinc",
    tooltip: "Twitter"
  },
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/company/redqinc/",
    tooltip: "Linked In"
  }
];

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
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

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>About Raveracker</h2>
        <p>
          Raveracker is my github username. I just wanted a cool name which is a
          made up word and I chose raveracker. Since them it became my codertag
          like how gamertag is for gamers. So it means I am just racking a lot
          of enthusiasm for myself, and I also love rave parties. Been to some
          but did not enjoy much. I much more prefer a house rave rather than a
          crowded rave with some stupidity and music.
        </p>
      </AboutPageTitle>

      <AboutImage>
        <GatsbyImage
          src={Data.avatar.childImageSharp.gatsbyImageData}
          alt="about"
        />
      </AboutImage>

      <AboutDetails>
        <h2>Hey there, what’s up?</h2>
        <p>
          I’m primarily an entrepreneur, but I’m also a self-taught software
          engineer. I currently work at{" "}
          <span>
            <a href="https://www.procedure.tech/" target="_blank">
              procedure.tech
            </a>
          </span>{" "}
          as a frontend developer. I’m passionate about building products that
          solve real world problems. I always believe that any problem can be
          solved with engineering mindset and I’m always open to learn new
          technologies. I specialize in Javascript/ React.js &#38; React Native.
        </p>
        <p>
          Apart from software development, I’m like reading, music, gaming and
          cooking. I love to put on some trap or hip hop beats when I code. For
          me, learning is what leads me to the next level. I love to learn new
          things and I love to share what I learn with others and{" "}
          <span>
            <a href="https://www.procedure.tech/" target="_blank">
              @procedure.tech
            </a>
          </span>{" "}
          learning is greatly appreciated. Over the course of my journey, I will
          share my learnings in this blog. I would also talk about my
          experiences in the industry and my thought process.
        </p>

        <img
          style={{ marginRight: "10px" }}
          src="https://github-readme-stats.vercel.app/api?username=raveracker&show_icons=true"
        />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=raveracker&layout=compact" />

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
