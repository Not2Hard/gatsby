import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import About from "../components/index/About"
import Citat from "../components/index/Citat"
import CTAImages from "../components/index/CTAImages"
import HeroSlider from "../components/index/HeroSlider"
import LatestTrend from "../components/index/LatestTrend"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSlider />
    <CTAImages/>
    <LatestTrend/>
    <Citat/>
    <About/>
  </Layout>
)

export default IndexPage;
