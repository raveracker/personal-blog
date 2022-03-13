import { PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../containers/about";

const AboutPage: React.FunctionComponent<PageProps> = () => {
  return (
    <Layout>
      <SEO
        title="About"
        description="About raveracker, developer & lifestyle blog which explains the learnings and experiences of a software developer in the industry."
      />

      <About />
    </Layout>
  );
};

export default AboutPage;
