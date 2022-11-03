import { gql } from '@apollo/client';
// import MenuFragment from "../fragments/menus";
// import {HeaderFooter} from "../get-menus";
// import SeoFragment from "../fragments/seo";

export const GET_PAGE = gql`
	query GET_PAGE{
	  page: pageBy(uri: "/home") {
    
  home {
  text1
  text2
  text3
  text4
  text5
  text6
  text7
  text8
  text9
  text10
  text11
  text12
  text13
  text14
  text15
  text16
  text17
  text18
  text19
  text20
  text21
  text22
  text23
  text24
  text25
  text26
  text27
  text28
  text29
  text30
  text31
  text32
  text33
  text34
  text35
  text36
  text37
  text38
  text39
  text40
  text41
  text42
  text43
  text44
  text45
  text46
  text47
  text48
  text49
  text50
  image1 {
    sourceUrl
  }
  image2 {
    sourceUrl
  }
  image3 {
    sourceUrl
  }
  image4 {
    sourceUrl
  }
  image5 {
    sourceUrl
  }
}
  }
  }
`;


export const GET_PAGE_BY_ID = gql`
	query GET_PAGE_BY_ID($id: ID!) {
	  page(idType: DATABASE_ID, id: $id) {
	    id
	    title
	    content
	    slug
	    uri
		status
	  }
	}

`;
