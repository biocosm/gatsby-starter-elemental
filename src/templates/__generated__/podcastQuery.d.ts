/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: portfolioQuery
// ====================================================

export interface portfolioQuery_mdx_frontmatter_banner_childImageSharp_fluid {
  srcSet: string;
  base64: string | null;
  aspectRatio: number;
  src: string;
  sizes: string;
}

export interface portfolioQuery_mdx_frontmatter_banner_childImageSharp {
  fluid: portfolioQuery_mdx_frontmatter_banner_childImageSharp_fluid | null;
  id: string;
}

export interface portfolioQuery_mdx_frontmatter_banner {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
  childImageSharp: portfolioQuery_mdx_frontmatter_banner_childImageSharp | null;
}

export interface portfolioQuery_mdx_frontmatter {
  title: string;
  date: any | null;
  description: string | null;
  banner: portfolioQuery_mdx_frontmatter_banner | null;
}

export interface portfolioQuery_mdx {
  body: string;
  frontmatter: portfolioQuery_mdx_frontmatter | null;
}

export interface portfolioQuery {
  mdx: portfolioQuery_mdx | null;
}

export interface portfolioQueryVariables {
  slug: string;
}
