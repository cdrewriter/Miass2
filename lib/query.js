export const Tehnika = `
  query {
    allItemCategories {
      name
      slugcat
      id
    }
    allItemCars {
      name
      id
      pricevalue
      description
      isEnabled
      date
      categories {
        slugcat
        name
        id
      }
      image {
        publicUrl
      }
      netweight
      engine
    }

    allItemCarCategories {
      name
      slugcat
      id
      categorydesc
      items {
        name
        pricevalue
      }
    }
  }
`;
