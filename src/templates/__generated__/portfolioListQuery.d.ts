/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: portfolioListQuery
// ====================================================

export interface portfolioListQuery_allMdx_edges_node_frontmatter_image_childImageSharp_fluid {
  srcSet: string;
  base64: string | null;
  aspectRatio: number;
  src: string;
  sizes: string;
}

export interface portfolioListQuery_allMdx_edges_node_frontmatter_image_childImageSharp {
  fluid: portfolioListQuery_allMdx_edges_node_frontmatter_image_childImageSharp_fluid | null;
  id: string;
}

export interface portfolioListQuery_allMdx_edges_node_frontmatter_image {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
  childImageSharp: portfolioListQuery_allMdx_edges_node_frontmatter_image_childImageSharp | null;
}

export interface portfolioListQuery_allMdx_edges_node_frontmatter {
  title: string;
  description: string | null;
  image: portfolioListQuery_allMdx_edges_node_frontmatter_image | null;
}

export interface portfolioListQuery_allMdx_edges_node_fields {
  slug: string | null;
}

export interface portfolioListQuery_allMdx_edges_node {
  id: string;
  frontmatter: portfolioListQuery_allMdx_edges_node_frontmatter | null;
  fields: portfolioListQuery_allMdx_edges_node_fields | null;
}

export interface portfolioListQuery_allMdx_edges {
  node: portfolioListQuery_allMdx_edges_node;
}

export interface portfolioListQuery_allMdx {
  edges: portfolioListQuery_allMdx_edges[];
}

export interface portfolioListQuery {
  allMdx: portfolioListQuery_allMdx;
}

export interface portfolioListQueryVariables {
  skip: number;
  limit: number;
}
