import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};


export type _ListAccess = {
  __typename?: '_ListAccess';
  create?: Maybe<Scalars['Boolean']>;
  read?: Maybe<Scalars['JSON']>;
  update?: Maybe<Scalars['JSON']>;
  delete?: Maybe<Scalars['JSON']>;
  auth?: Maybe<Scalars['JSON']>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  name?: Maybe<Scalars['String']>;
  access?: Maybe<_ListAccess>;
  schema?: Maybe<_ListSchema>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  type?: Maybe<Scalars['String']>;
  queries?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  type?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type AuthenticateUserOutput = {
  __typename?: 'authenticateUserOutput';
  token?: Maybe<Scalars['String']>;
  item?: Maybe<User>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CloudinaryGallery = {
  __typename?: 'CloudinaryGallery';
  images?: Maybe<Array<Maybe<CloudinaryGalleryImage>>>;
};

export type CloudinaryGalleryImage = {
  __typename?: 'CloudinaryGalleryImage';
  caption?: Maybe<Scalars['String']>;
  image?: Maybe<CloudinaryImage_File>;
};

export type CloudinaryGalleryImageInput = {
  caption?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Upload']>;
};

export type CloudinaryGalleryInput = {
  images?: Maybe<Array<Maybe<CloudinaryGalleryImageInput>>>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: Maybe<CloudinaryImageFormat>;
};

export type CloudinaryImageFormat = {
  prettyName?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  crop?: Maybe<Scalars['String']>;
  aspect_ratio?: Maybe<Scalars['String']>;
  gravity?: Maybe<Scalars['String']>;
  zoom?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  fetch_format?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['String']>;
  angle?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['String']>;
  border?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  overlay?: Maybe<Scalars['String']>;
  underlay?: Maybe<Scalars['String']>;
  default_image?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  color_space?: Maybe<Scalars['String']>;
  dpr?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  density?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['String']>;
  transformation?: Maybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContactCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContactsCreateInput = {
  data?: Maybe<ContactCreateInput>;
};

export type ContactsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ContactUpdateInput>;
};

export type ContactUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContactWhereInput = {
  AND?: Maybe<Array<Maybe<ContactWhereInput>>>;
  OR?: Maybe<Array<Maybe<ContactWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContactWhereUniqueInput = {
  id: Scalars['ID'];
};


export type File = {
  __typename?: 'File';
  id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
};

export type ItemCar = {
  __typename?: 'ItemCar';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  imagecloud?: Maybe<CloudinaryImage_File>;
  photos?: Maybe<CloudinaryGallery>;
  pricevalue?: Maybe<Scalars['Int']>;
  categories?: Maybe<ItemCarCategory>;
  chassis?: Maybe<Scalars['String']>;
  status?: Maybe<ItemCarStatusType>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  netweight?: Maybe<Scalars['String']>;
  engine?: Maybe<Scalars['String']>;
};

export type ItemCarCategoriesCreateInput = {
  data?: Maybe<ItemCarCategoryCreateInput>;
};

export type ItemCarCategoriesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ItemCarCategoryUpdateInput>;
};

export type ItemCarCategory = {
  __typename?: 'ItemCarCategory';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ItemCarCategoryCreateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ItemCarCategoryRelateToOneInput = {
  create?: Maybe<ItemCarCategoryCreateInput>;
  connect?: Maybe<ItemCarCategoryWhereUniqueInput>;
  disconnect?: Maybe<ItemCarCategoryWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ItemCarCategoryUpdateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ItemCarCategoryWhereInput = {
  AND?: Maybe<Array<Maybe<ItemCarCategoryWhereInput>>>;
  OR?: Maybe<Array<Maybe<ItemCarCategoryWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_i?: Maybe<Scalars['String']>;
  slug_not_i?: Maybe<Scalars['String']>;
  slug_contains_i?: Maybe<Scalars['String']>;
  slug_not_contains_i?: Maybe<Scalars['String']>;
  slug_starts_with_i?: Maybe<Scalars['String']>;
  slug_not_starts_with_i?: Maybe<Scalars['String']>;
  slug_ends_with_i?: Maybe<Scalars['String']>;
  slug_not_ends_with_i?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ItemCarCategoryWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ItemCarCreateInput = {
  name?: Maybe<Scalars['String']>;
  imagecloud?: Maybe<Scalars['Upload']>;
  photos?: Maybe<CloudinaryGalleryInput>;
  pricevalue?: Maybe<Scalars['Int']>;
  categories?: Maybe<ItemCarCategoryRelateToOneInput>;
  chassis?: Maybe<Scalars['String']>;
  status?: Maybe<ItemCarStatusType>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  netweight?: Maybe<Scalars['String']>;
  engine?: Maybe<Scalars['String']>;
};

export type ItemCarsCreateInput = {
  data?: Maybe<ItemCarCreateInput>;
};

export enum ItemCarStatusType {
  Draft = 'draft',
  Published = 'published'
}

export type ItemCarsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ItemCarUpdateInput>;
};

export type ItemCarUpdateInput = {
  name?: Maybe<Scalars['String']>;
  imagecloud?: Maybe<Scalars['Upload']>;
  photos?: Maybe<CloudinaryGalleryInput>;
  pricevalue?: Maybe<Scalars['Int']>;
  categories?: Maybe<ItemCarCategoryRelateToOneInput>;
  chassis?: Maybe<Scalars['String']>;
  status?: Maybe<ItemCarStatusType>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  netweight?: Maybe<Scalars['String']>;
  engine?: Maybe<Scalars['String']>;
};

export type ItemCarWhereInput = {
  AND?: Maybe<Array<Maybe<ItemCarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ItemCarWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  imagecloud?: Maybe<Scalars['String']>;
  imagecloud_not?: Maybe<Scalars['String']>;
  imagecloud_contains?: Maybe<Scalars['String']>;
  imagecloud_not_contains?: Maybe<Scalars['String']>;
  imagecloud_starts_with?: Maybe<Scalars['String']>;
  imagecloud_not_starts_with?: Maybe<Scalars['String']>;
  imagecloud_ends_with?: Maybe<Scalars['String']>;
  imagecloud_not_ends_with?: Maybe<Scalars['String']>;
  imagecloud_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  imagecloud_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  photos?: Maybe<Scalars['String']>;
  photos_not?: Maybe<Scalars['String']>;
  photos_contains?: Maybe<Scalars['String']>;
  photos_not_contains?: Maybe<Scalars['String']>;
  photos_starts_with?: Maybe<Scalars['String']>;
  photos_not_starts_with?: Maybe<Scalars['String']>;
  photos_ends_with?: Maybe<Scalars['String']>;
  photos_not_ends_with?: Maybe<Scalars['String']>;
  photos_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  photos_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pricevalue?: Maybe<Scalars['Int']>;
  pricevalue_not?: Maybe<Scalars['Int']>;
  pricevalue_lt?: Maybe<Scalars['Int']>;
  pricevalue_lte?: Maybe<Scalars['Int']>;
  pricevalue_gt?: Maybe<Scalars['Int']>;
  pricevalue_gte?: Maybe<Scalars['Int']>;
  pricevalue_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  pricevalue_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categories?: Maybe<ItemCarCategoryWhereInput>;
  categories_is_null?: Maybe<Scalars['Boolean']>;
  chassis?: Maybe<Scalars['String']>;
  chassis_not?: Maybe<Scalars['String']>;
  chassis_contains?: Maybe<Scalars['String']>;
  chassis_not_contains?: Maybe<Scalars['String']>;
  chassis_starts_with?: Maybe<Scalars['String']>;
  chassis_not_starts_with?: Maybe<Scalars['String']>;
  chassis_ends_with?: Maybe<Scalars['String']>;
  chassis_not_ends_with?: Maybe<Scalars['String']>;
  chassis_i?: Maybe<Scalars['String']>;
  chassis_not_i?: Maybe<Scalars['String']>;
  chassis_contains_i?: Maybe<Scalars['String']>;
  chassis_not_contains_i?: Maybe<Scalars['String']>;
  chassis_starts_with_i?: Maybe<Scalars['String']>;
  chassis_not_starts_with_i?: Maybe<Scalars['String']>;
  chassis_ends_with_i?: Maybe<Scalars['String']>;
  chassis_not_ends_with_i?: Maybe<Scalars['String']>;
  chassis_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  chassis_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<ItemCarStatusType>;
  status_not?: Maybe<ItemCarStatusType>;
  status_in?: Maybe<Array<Maybe<ItemCarStatusType>>>;
  status_not_in?: Maybe<Array<Maybe<ItemCarStatusType>>>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  isEnabled_not?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  netweight?: Maybe<Scalars['String']>;
  netweight_not?: Maybe<Scalars['String']>;
  netweight_contains?: Maybe<Scalars['String']>;
  netweight_not_contains?: Maybe<Scalars['String']>;
  netweight_starts_with?: Maybe<Scalars['String']>;
  netweight_not_starts_with?: Maybe<Scalars['String']>;
  netweight_ends_with?: Maybe<Scalars['String']>;
  netweight_not_ends_with?: Maybe<Scalars['String']>;
  netweight_i?: Maybe<Scalars['String']>;
  netweight_not_i?: Maybe<Scalars['String']>;
  netweight_contains_i?: Maybe<Scalars['String']>;
  netweight_not_contains_i?: Maybe<Scalars['String']>;
  netweight_starts_with_i?: Maybe<Scalars['String']>;
  netweight_not_starts_with_i?: Maybe<Scalars['String']>;
  netweight_ends_with_i?: Maybe<Scalars['String']>;
  netweight_not_ends_with_i?: Maybe<Scalars['String']>;
  netweight_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  netweight_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  engine?: Maybe<Scalars['String']>;
  engine_not?: Maybe<Scalars['String']>;
  engine_contains?: Maybe<Scalars['String']>;
  engine_not_contains?: Maybe<Scalars['String']>;
  engine_starts_with?: Maybe<Scalars['String']>;
  engine_not_starts_with?: Maybe<Scalars['String']>;
  engine_ends_with?: Maybe<Scalars['String']>;
  engine_not_ends_with?: Maybe<Scalars['String']>;
  engine_i?: Maybe<Scalars['String']>;
  engine_not_i?: Maybe<Scalars['String']>;
  engine_contains_i?: Maybe<Scalars['String']>;
  engine_not_contains_i?: Maybe<Scalars['String']>;
  engine_starts_with_i?: Maybe<Scalars['String']>;
  engine_not_starts_with_i?: Maybe<Scalars['String']>;
  engine_ends_with_i?: Maybe<Scalars['String']>;
  engine_not_ends_with_i?: Maybe<Scalars['String']>;
  engine_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  engine_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ItemCarWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ItemCategoriesCreateInput = {
  data?: Maybe<ItemCategoryCreateInput>;
};

export type ItemCategoriesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ItemCategoryUpdateInput>;
};

export type ItemCategory = {
  __typename?: 'ItemCategory';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ItemCategoryCreateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ItemCategoryRelateToOneInput = {
  create?: Maybe<ItemCategoryCreateInput>;
  connect?: Maybe<ItemCategoryWhereUniqueInput>;
  disconnect?: Maybe<ItemCategoryWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ItemCategoryUpdateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ItemCategoryWhereInput = {
  AND?: Maybe<Array<Maybe<ItemCategoryWhereInput>>>;
  OR?: Maybe<Array<Maybe<ItemCategoryWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_i?: Maybe<Scalars['String']>;
  slug_not_i?: Maybe<Scalars['String']>;
  slug_contains_i?: Maybe<Scalars['String']>;
  slug_not_contains_i?: Maybe<Scalars['String']>;
  slug_starts_with_i?: Maybe<Scalars['String']>;
  slug_not_starts_with_i?: Maybe<Scalars['String']>;
  slug_ends_with_i?: Maybe<Scalars['String']>;
  slug_not_ends_with_i?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ItemCategoryWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ItemPrice = {
  __typename?: 'ItemPrice';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['Int']>;
  author?: Maybe<User>;
  art?: Maybe<Scalars['String']>;
  pricevalue?: Maybe<Scalars['Int']>;
  categories?: Maybe<ItemCategory>;
  status?: Maybe<ItemPriceStatusType>;
};

export type ItemPriceCreateInput = {
  name?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['Int']>;
  author?: Maybe<UserRelateToOneInput>;
  art?: Maybe<Scalars['String']>;
  pricevalue?: Maybe<Scalars['Int']>;
  categories?: Maybe<ItemCategoryRelateToOneInput>;
  status?: Maybe<ItemPriceStatusType>;
};

export type ItemPricesCreateInput = {
  data?: Maybe<ItemPriceCreateInput>;
};

export enum ItemPriceStatusType {
  Draft = 'draft',
  Published = 'published'
}

export type ItemPricesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ItemPriceUpdateInput>;
};

export type ItemPriceUpdateInput = {
  name?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['Int']>;
  author?: Maybe<UserRelateToOneInput>;
  art?: Maybe<Scalars['String']>;
  pricevalue?: Maybe<Scalars['Int']>;
  categories?: Maybe<ItemCategoryRelateToOneInput>;
  status?: Maybe<ItemPriceStatusType>;
};

export type ItemPriceWhereInput = {
  AND?: Maybe<Array<Maybe<ItemPriceWhereInput>>>;
  OR?: Maybe<Array<Maybe<ItemPriceWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sku?: Maybe<Scalars['Int']>;
  sku_not?: Maybe<Scalars['Int']>;
  sku_lt?: Maybe<Scalars['Int']>;
  sku_lte?: Maybe<Scalars['Int']>;
  sku_gt?: Maybe<Scalars['Int']>;
  sku_gte?: Maybe<Scalars['Int']>;
  sku_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sku_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  author?: Maybe<UserWhereInput>;
  author_is_null?: Maybe<Scalars['Boolean']>;
  art?: Maybe<Scalars['String']>;
  art_not?: Maybe<Scalars['String']>;
  art_contains?: Maybe<Scalars['String']>;
  art_not_contains?: Maybe<Scalars['String']>;
  art_starts_with?: Maybe<Scalars['String']>;
  art_not_starts_with?: Maybe<Scalars['String']>;
  art_ends_with?: Maybe<Scalars['String']>;
  art_not_ends_with?: Maybe<Scalars['String']>;
  art_i?: Maybe<Scalars['String']>;
  art_not_i?: Maybe<Scalars['String']>;
  art_contains_i?: Maybe<Scalars['String']>;
  art_not_contains_i?: Maybe<Scalars['String']>;
  art_starts_with_i?: Maybe<Scalars['String']>;
  art_not_starts_with_i?: Maybe<Scalars['String']>;
  art_ends_with_i?: Maybe<Scalars['String']>;
  art_not_ends_with_i?: Maybe<Scalars['String']>;
  art_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  art_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pricevalue?: Maybe<Scalars['Int']>;
  pricevalue_not?: Maybe<Scalars['Int']>;
  pricevalue_lt?: Maybe<Scalars['Int']>;
  pricevalue_lte?: Maybe<Scalars['Int']>;
  pricevalue_gt?: Maybe<Scalars['Int']>;
  pricevalue_gte?: Maybe<Scalars['Int']>;
  pricevalue_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  pricevalue_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categories?: Maybe<ItemCategoryWhereInput>;
  categories_is_null?: Maybe<Scalars['Boolean']>;
  status?: Maybe<ItemPriceStatusType>;
  status_not?: Maybe<ItemPriceStatusType>;
  status_in?: Maybe<Array<Maybe<ItemPriceStatusType>>>;
  status_not_in?: Maybe<Array<Maybe<ItemPriceStatusType>>>;
};

export type ItemPriceWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ItemService = {
  __typename?: 'ItemService';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
  pricevalue?: Maybe<Scalars['Int']>;
  categories?: Maybe<ItemServiceCategory>;
  description?: Maybe<Scalars['String']>;
};

export type ItemServiceCategoriesCreateInput = {
  data?: Maybe<ItemServiceCategoryCreateInput>;
};

export type ItemServiceCategoriesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ItemServiceCategoryUpdateInput>;
};

export type ItemServiceCategory = {
  __typename?: 'ItemServiceCategory';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ItemServiceCategoryCreateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ItemServiceCategoryRelateToOneInput = {
  create?: Maybe<ItemServiceCategoryCreateInput>;
  connect?: Maybe<ItemServiceCategoryWhereUniqueInput>;
  disconnect?: Maybe<ItemServiceCategoryWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ItemServiceCategoryUpdateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ItemServiceCategoryWhereInput = {
  AND?: Maybe<Array<Maybe<ItemServiceCategoryWhereInput>>>;
  OR?: Maybe<Array<Maybe<ItemServiceCategoryWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_i?: Maybe<Scalars['String']>;
  slug_not_i?: Maybe<Scalars['String']>;
  slug_contains_i?: Maybe<Scalars['String']>;
  slug_not_contains_i?: Maybe<Scalars['String']>;
  slug_starts_with_i?: Maybe<Scalars['String']>;
  slug_not_starts_with_i?: Maybe<Scalars['String']>;
  slug_ends_with_i?: Maybe<Scalars['String']>;
  slug_not_ends_with_i?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ItemServiceCategoryWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ItemServiceCreateInput = {
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Upload']>;
  pricevalue?: Maybe<Scalars['Int']>;
  categories?: Maybe<ItemServiceCategoryRelateToOneInput>;
  description?: Maybe<Scalars['String']>;
};

export type ItemServicesCreateInput = {
  data?: Maybe<ItemServiceCreateInput>;
};

export type ItemServicesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ItemServiceUpdateInput>;
};

export type ItemServiceUpdateInput = {
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Upload']>;
  pricevalue?: Maybe<Scalars['Int']>;
  categories?: Maybe<ItemServiceCategoryRelateToOneInput>;
  description?: Maybe<Scalars['String']>;
};

export type ItemServiceWhereInput = {
  AND?: Maybe<Array<Maybe<ItemServiceWhereInput>>>;
  OR?: Maybe<Array<Maybe<ItemServiceWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Scalars['String']>;
  image_not?: Maybe<Scalars['String']>;
  image_contains?: Maybe<Scalars['String']>;
  image_not_contains?: Maybe<Scalars['String']>;
  image_starts_with?: Maybe<Scalars['String']>;
  image_not_starts_with?: Maybe<Scalars['String']>;
  image_ends_with?: Maybe<Scalars['String']>;
  image_not_ends_with?: Maybe<Scalars['String']>;
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  image_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pricevalue?: Maybe<Scalars['Int']>;
  pricevalue_not?: Maybe<Scalars['Int']>;
  pricevalue_lt?: Maybe<Scalars['Int']>;
  pricevalue_lte?: Maybe<Scalars['Int']>;
  pricevalue_gt?: Maybe<Scalars['Int']>;
  pricevalue_gte?: Maybe<Scalars['Int']>;
  pricevalue_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  pricevalue_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categories?: Maybe<ItemServiceCategoryWhereInput>;
  categories_is_null?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ItemServiceWhereUniqueInput = {
  id: Scalars['ID'];
};


export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  createPostCategory?: Maybe<PostCategory>;
  createPostCategories?: Maybe<Array<Maybe<PostCategory>>>;
  updatePostCategory?: Maybe<PostCategory>;
  updatePostCategories?: Maybe<Array<Maybe<PostCategory>>>;
  deletePostCategory?: Maybe<PostCategory>;
  deletePostCategories?: Maybe<Array<Maybe<PostCategory>>>;
  createPost?: Maybe<Post>;
  createPosts?: Maybe<Array<Maybe<Post>>>;
  updatePost?: Maybe<Post>;
  updatePosts?: Maybe<Array<Maybe<Post>>>;
  deletePost?: Maybe<Post>;
  deletePosts?: Maybe<Array<Maybe<Post>>>;
  createContact?: Maybe<Contact>;
  createContacts?: Maybe<Array<Maybe<Contact>>>;
  updateContact?: Maybe<Contact>;
  updateContacts?: Maybe<Array<Maybe<Contact>>>;
  deleteContact?: Maybe<Contact>;
  deleteContacts?: Maybe<Array<Maybe<Contact>>>;
  createItemCategory?: Maybe<ItemCategory>;
  createItemCategories?: Maybe<Array<Maybe<ItemCategory>>>;
  updateItemCategory?: Maybe<ItemCategory>;
  updateItemCategories?: Maybe<Array<Maybe<ItemCategory>>>;
  deleteItemCategory?: Maybe<ItemCategory>;
  deleteItemCategories?: Maybe<Array<Maybe<ItemCategory>>>;
  createItemPrice?: Maybe<ItemPrice>;
  createItemPrices?: Maybe<Array<Maybe<ItemPrice>>>;
  updateItemPrice?: Maybe<ItemPrice>;
  updateItemPrices?: Maybe<Array<Maybe<ItemPrice>>>;
  deleteItemPrice?: Maybe<ItemPrice>;
  deleteItemPrices?: Maybe<Array<Maybe<ItemPrice>>>;
  createItemServiceCategory?: Maybe<ItemServiceCategory>;
  createItemServiceCategories?: Maybe<Array<Maybe<ItemServiceCategory>>>;
  updateItemServiceCategory?: Maybe<ItemServiceCategory>;
  updateItemServiceCategories?: Maybe<Array<Maybe<ItemServiceCategory>>>;
  deleteItemServiceCategory?: Maybe<ItemServiceCategory>;
  deleteItemServiceCategories?: Maybe<Array<Maybe<ItemServiceCategory>>>;
  createItemService?: Maybe<ItemService>;
  createItemServices?: Maybe<Array<Maybe<ItemService>>>;
  updateItemService?: Maybe<ItemService>;
  updateItemServices?: Maybe<Array<Maybe<ItemService>>>;
  deleteItemService?: Maybe<ItemService>;
  deleteItemServices?: Maybe<Array<Maybe<ItemService>>>;
  createItemCar?: Maybe<ItemCar>;
  createItemCars?: Maybe<Array<Maybe<ItemCar>>>;
  updateItemCar?: Maybe<ItemCar>;
  updateItemCars?: Maybe<Array<Maybe<ItemCar>>>;
  deleteItemCar?: Maybe<ItemCar>;
  deleteItemCars?: Maybe<Array<Maybe<ItemCar>>>;
  createItemCarCategory?: Maybe<ItemCarCategory>;
  createItemCarCategories?: Maybe<Array<Maybe<ItemCarCategory>>>;
  updateItemCarCategory?: Maybe<ItemCarCategory>;
  updateItemCarCategories?: Maybe<Array<Maybe<ItemCarCategory>>>;
  deleteItemCarCategory?: Maybe<ItemCarCategory>;
  deleteItemCarCategories?: Maybe<Array<Maybe<ItemCarCategory>>>;
  authenticateUserWithPassword?: Maybe<AuthenticateUserOutput>;
  unauthenticateUser?: Maybe<UnauthenticateUserOutput>;
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};


export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreatePostCategoryArgs = {
  data?: Maybe<PostCategoryCreateInput>;
};


export type MutationCreatePostCategoriesArgs = {
  data?: Maybe<Array<Maybe<PostCategoriesCreateInput>>>;
};


export type MutationUpdatePostCategoryArgs = {
  id: Scalars['ID'];
  data?: Maybe<PostCategoryUpdateInput>;
};


export type MutationUpdatePostCategoriesArgs = {
  data?: Maybe<Array<Maybe<PostCategoriesUpdateInput>>>;
};


export type MutationDeletePostCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostCategoriesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreatePostArgs = {
  data?: Maybe<PostCreateInput>;
};


export type MutationCreatePostsArgs = {
  data?: Maybe<Array<Maybe<PostsCreateInput>>>;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  data?: Maybe<PostUpdateInput>;
};


export type MutationUpdatePostsArgs = {
  data?: Maybe<Array<Maybe<PostsUpdateInput>>>;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateContactArgs = {
  data?: Maybe<ContactCreateInput>;
};


export type MutationCreateContactsArgs = {
  data?: Maybe<Array<Maybe<ContactsCreateInput>>>;
};


export type MutationUpdateContactArgs = {
  id: Scalars['ID'];
  data?: Maybe<ContactUpdateInput>;
};


export type MutationUpdateContactsArgs = {
  data?: Maybe<Array<Maybe<ContactsUpdateInput>>>;
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContactsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateItemCategoryArgs = {
  data?: Maybe<ItemCategoryCreateInput>;
};


export type MutationCreateItemCategoriesArgs = {
  data?: Maybe<Array<Maybe<ItemCategoriesCreateInput>>>;
};


export type MutationUpdateItemCategoryArgs = {
  id: Scalars['ID'];
  data?: Maybe<ItemCategoryUpdateInput>;
};


export type MutationUpdateItemCategoriesArgs = {
  data?: Maybe<Array<Maybe<ItemCategoriesUpdateInput>>>;
};


export type MutationDeleteItemCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemCategoriesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateItemPriceArgs = {
  data?: Maybe<ItemPriceCreateInput>;
};


export type MutationCreateItemPricesArgs = {
  data?: Maybe<Array<Maybe<ItemPricesCreateInput>>>;
};


export type MutationUpdateItemPriceArgs = {
  id: Scalars['ID'];
  data?: Maybe<ItemPriceUpdateInput>;
};


export type MutationUpdateItemPricesArgs = {
  data?: Maybe<Array<Maybe<ItemPricesUpdateInput>>>;
};


export type MutationDeleteItemPriceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemPricesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateItemServiceCategoryArgs = {
  data?: Maybe<ItemServiceCategoryCreateInput>;
};


export type MutationCreateItemServiceCategoriesArgs = {
  data?: Maybe<Array<Maybe<ItemServiceCategoriesCreateInput>>>;
};


export type MutationUpdateItemServiceCategoryArgs = {
  id: Scalars['ID'];
  data?: Maybe<ItemServiceCategoryUpdateInput>;
};


export type MutationUpdateItemServiceCategoriesArgs = {
  data?: Maybe<Array<Maybe<ItemServiceCategoriesUpdateInput>>>;
};


export type MutationDeleteItemServiceCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemServiceCategoriesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateItemServiceArgs = {
  data?: Maybe<ItemServiceCreateInput>;
};


export type MutationCreateItemServicesArgs = {
  data?: Maybe<Array<Maybe<ItemServicesCreateInput>>>;
};


export type MutationUpdateItemServiceArgs = {
  id: Scalars['ID'];
  data?: Maybe<ItemServiceUpdateInput>;
};


export type MutationUpdateItemServicesArgs = {
  data?: Maybe<Array<Maybe<ItemServicesUpdateInput>>>;
};


export type MutationDeleteItemServiceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemServicesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateItemCarArgs = {
  data?: Maybe<ItemCarCreateInput>;
};


export type MutationCreateItemCarsArgs = {
  data?: Maybe<Array<Maybe<ItemCarsCreateInput>>>;
};


export type MutationUpdateItemCarArgs = {
  id: Scalars['ID'];
  data?: Maybe<ItemCarUpdateInput>;
};


export type MutationUpdateItemCarsArgs = {
  data?: Maybe<Array<Maybe<ItemCarsUpdateInput>>>;
};


export type MutationDeleteItemCarArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemCarsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateItemCarCategoryArgs = {
  data?: Maybe<ItemCarCategoryCreateInput>;
};


export type MutationCreateItemCarCategoriesArgs = {
  data?: Maybe<Array<Maybe<ItemCarCategoriesCreateInput>>>;
};


export type MutationUpdateItemCarCategoryArgs = {
  id: Scalars['ID'];
  data?: Maybe<ItemCarCategoryUpdateInput>;
};


export type MutationUpdateItemCarCategoriesArgs = {
  data?: Maybe<Array<Maybe<ItemCarCategoriesUpdateInput>>>;
};


export type MutationDeleteItemCarCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemCarCategoriesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
  postCategories?: Maybe<Array<Maybe<PostCategory>>>;
  _postCategoriesMeta?: Maybe<_QueryMeta>;
  status?: Maybe<PostStatusType>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  image?: Maybe<File>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};


export type PostPostCategoriesArgs = {
  where?: Maybe<PostCategoryWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type Post_PostCategoriesMetaArgs = {
  where?: Maybe<PostCategoryWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type PostCategoriesCreateInput = {
  data?: Maybe<PostCategoryCreateInput>;
};

export type PostCategoriesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<PostCategoryUpdateInput>;
};

export type PostCategory = {
  __typename?: 'PostCategory';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PostCategoryCreateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PostCategoryRelateToManyInput = {
  create?: Maybe<Array<Maybe<PostCategoryCreateInput>>>;
  connect?: Maybe<Array<Maybe<PostCategoryWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<PostCategoryWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type PostCategoryUpdateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PostCategoryWhereInput = {
  AND?: Maybe<Array<Maybe<PostCategoryWhereInput>>>;
  OR?: Maybe<Array<Maybe<PostCategoryWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_i?: Maybe<Scalars['String']>;
  slug_not_i?: Maybe<Scalars['String']>;
  slug_contains_i?: Maybe<Scalars['String']>;
  slug_not_contains_i?: Maybe<Scalars['String']>;
  slug_starts_with_i?: Maybe<Scalars['String']>;
  slug_not_starts_with_i?: Maybe<Scalars['String']>;
  slug_ends_with_i?: Maybe<Scalars['String']>;
  slug_not_ends_with_i?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PostCategoryWhereUniqueInput = {
  id: Scalars['ID'];
};

export type PostCreateInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  author?: Maybe<UserRelateToOneInput>;
  postCategories?: Maybe<PostCategoryRelateToManyInput>;
  status?: Maybe<PostStatusType>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['Upload']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type PostsCreateInput = {
  data?: Maybe<PostCreateInput>;
};

export enum PostStatusType {
  Draft = 'draft',
  Published = 'published'
}

export type PostsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<PostUpdateInput>;
};

export type PostUpdateInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  author?: Maybe<UserRelateToOneInput>;
  postCategories?: Maybe<PostCategoryRelateToManyInput>;
  status?: Maybe<PostStatusType>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['Upload']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type PostWhereInput = {
  AND?: Maybe<Array<Maybe<PostWhereInput>>>;
  OR?: Maybe<Array<Maybe<PostWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_i?: Maybe<Scalars['String']>;
  title_not_i?: Maybe<Scalars['String']>;
  title_contains_i?: Maybe<Scalars['String']>;
  title_not_contains_i?: Maybe<Scalars['String']>;
  title_starts_with_i?: Maybe<Scalars['String']>;
  title_not_starts_with_i?: Maybe<Scalars['String']>;
  title_ends_with_i?: Maybe<Scalars['String']>;
  title_not_ends_with_i?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_i?: Maybe<Scalars['String']>;
  slug_not_i?: Maybe<Scalars['String']>;
  slug_contains_i?: Maybe<Scalars['String']>;
  slug_not_contains_i?: Maybe<Scalars['String']>;
  slug_starts_with_i?: Maybe<Scalars['String']>;
  slug_not_starts_with_i?: Maybe<Scalars['String']>;
  slug_ends_with_i?: Maybe<Scalars['String']>;
  slug_not_ends_with_i?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  author?: Maybe<UserWhereInput>;
  author_is_null?: Maybe<Scalars['Boolean']>;
  postCategories_every?: Maybe<PostCategoryWhereInput>;
  postCategories_some?: Maybe<PostCategoryWhereInput>;
  postCategories_none?: Maybe<PostCategoryWhereInput>;
  postCategories_is_null?: Maybe<Scalars['Boolean']>;
  status?: Maybe<PostStatusType>;
  status_not?: Maybe<PostStatusType>;
  status_in?: Maybe<Array<Maybe<PostStatusType>>>;
  status_not_in?: Maybe<Array<Maybe<PostStatusType>>>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  publishedDate_not?: Maybe<Scalars['DateTime']>;
  publishedDate_lt?: Maybe<Scalars['DateTime']>;
  publishedDate_lte?: Maybe<Scalars['DateTime']>;
  publishedDate_gt?: Maybe<Scalars['DateTime']>;
  publishedDate_gte?: Maybe<Scalars['DateTime']>;
  publishedDate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedDate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  image?: Maybe<Scalars['String']>;
  image_not?: Maybe<Scalars['String']>;
  image_contains?: Maybe<Scalars['String']>;
  image_not_contains?: Maybe<Scalars['String']>;
  image_starts_with?: Maybe<Scalars['String']>;
  image_not_starts_with?: Maybe<Scalars['String']>;
  image_ends_with?: Maybe<Scalars['String']>;
  image_not_ends_with?: Maybe<Scalars['String']>;
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  image_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  content?: Maybe<Scalars['String']>;
  content_not?: Maybe<Scalars['String']>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  content_starts_with?: Maybe<Scalars['String']>;
  content_not_starts_with?: Maybe<Scalars['String']>;
  content_ends_with?: Maybe<Scalars['String']>;
  content_not_ends_with?: Maybe<Scalars['String']>;
  content_i?: Maybe<Scalars['String']>;
  content_not_i?: Maybe<Scalars['String']>;
  content_contains_i?: Maybe<Scalars['String']>;
  content_not_contains_i?: Maybe<Scalars['String']>;
  content_starts_with_i?: Maybe<Scalars['String']>;
  content_not_starts_with_i?: Maybe<Scalars['String']>;
  content_ends_with_i?: Maybe<Scalars['String']>;
  content_not_ends_with_i?: Maybe<Scalars['String']>;
  content_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  content_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PostWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<User>>>;
  User?: Maybe<User>;
  _allUsersMeta?: Maybe<_QueryMeta>;
  _UsersMeta?: Maybe<_ListMeta>;
  allPostCategories?: Maybe<Array<Maybe<PostCategory>>>;
  PostCategory?: Maybe<PostCategory>;
  _allPostCategoriesMeta?: Maybe<_QueryMeta>;
  _PostCategoriesMeta?: Maybe<_ListMeta>;
  allPosts?: Maybe<Array<Maybe<Post>>>;
  Post?: Maybe<Post>;
  _allPostsMeta?: Maybe<_QueryMeta>;
  _PostsMeta?: Maybe<_ListMeta>;
  allContacts?: Maybe<Array<Maybe<Contact>>>;
  Contact?: Maybe<Contact>;
  _allContactsMeta?: Maybe<_QueryMeta>;
  _ContactsMeta?: Maybe<_ListMeta>;
  allItemCategories?: Maybe<Array<Maybe<ItemCategory>>>;
  ItemCategory?: Maybe<ItemCategory>;
  _allItemCategoriesMeta?: Maybe<_QueryMeta>;
  _ItemCategoriesMeta?: Maybe<_ListMeta>;
  allItemPrices?: Maybe<Array<Maybe<ItemPrice>>>;
  ItemPrice?: Maybe<ItemPrice>;
  _allItemPricesMeta?: Maybe<_QueryMeta>;
  _ItemPricesMeta?: Maybe<_ListMeta>;
  allItemServiceCategories?: Maybe<Array<Maybe<ItemServiceCategory>>>;
  ItemServiceCategory?: Maybe<ItemServiceCategory>;
  _allItemServiceCategoriesMeta?: Maybe<_QueryMeta>;
  _ItemServiceCategoriesMeta?: Maybe<_ListMeta>;
  allItemServices?: Maybe<Array<Maybe<ItemService>>>;
  ItemService?: Maybe<ItemService>;
  _allItemServicesMeta?: Maybe<_QueryMeta>;
  _ItemServicesMeta?: Maybe<_ListMeta>;
  allItemCars?: Maybe<Array<Maybe<ItemCar>>>;
  ItemCar?: Maybe<ItemCar>;
  _allItemCarsMeta?: Maybe<_QueryMeta>;
  _ItemCarsMeta?: Maybe<_ListMeta>;
  allItemCarCategories?: Maybe<Array<Maybe<ItemCarCategory>>>;
  ItemCarCategory?: Maybe<ItemCarCategory>;
  _allItemCarCategoriesMeta?: Maybe<_QueryMeta>;
  _ItemCarCategoriesMeta?: Maybe<_ListMeta>;
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  appVersion?: Maybe<Scalars['String']>;
  authenticatedUser?: Maybe<User>;
};


export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllPostCategoriesArgs = {
  where?: Maybe<PostCategoryWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPostCategoryArgs = {
  where: PostCategoryWhereUniqueInput;
};


export type Query_AllPostCategoriesMetaArgs = {
  where?: Maybe<PostCategoryWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllPostsArgs = {
  where?: Maybe<PostWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type Query_AllPostsMetaArgs = {
  where?: Maybe<PostWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllContactsArgs = {
  where?: Maybe<ContactWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryContactArgs = {
  where: ContactWhereUniqueInput;
};


export type Query_AllContactsMetaArgs = {
  where?: Maybe<ContactWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllItemCategoriesArgs = {
  where?: Maybe<ItemCategoryWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryItemCategoryArgs = {
  where: ItemCategoryWhereUniqueInput;
};


export type Query_AllItemCategoriesMetaArgs = {
  where?: Maybe<ItemCategoryWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllItemPricesArgs = {
  where?: Maybe<ItemPriceWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryItemPriceArgs = {
  where: ItemPriceWhereUniqueInput;
};


export type Query_AllItemPricesMetaArgs = {
  where?: Maybe<ItemPriceWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllItemServiceCategoriesArgs = {
  where?: Maybe<ItemServiceCategoryWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryItemServiceCategoryArgs = {
  where: ItemServiceCategoryWhereUniqueInput;
};


export type Query_AllItemServiceCategoriesMetaArgs = {
  where?: Maybe<ItemServiceCategoryWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllItemServicesArgs = {
  where?: Maybe<ItemServiceWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryItemServiceArgs = {
  where: ItemServiceWhereUniqueInput;
};


export type Query_AllItemServicesMetaArgs = {
  where?: Maybe<ItemServiceWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllItemCarsArgs = {
  where?: Maybe<ItemCarWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryItemCarArgs = {
  where: ItemCarWhereUniqueInput;
};


export type Query_AllItemCarsMetaArgs = {
  where?: Maybe<ItemCarWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllItemCarCategoriesArgs = {
  where?: Maybe<ItemCarCategoryWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryItemCarCategoryArgs = {
  where: ItemCarCategoryWhereUniqueInput;
};


export type Query_AllItemCarCategoriesMetaArgs = {
  where?: Maybe<ItemCarCategoryWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type UnauthenticateUserOutput = {
  __typename?: 'unauthenticateUserOutput';
  success?: Maybe<Scalars['Boolean']>;
};


export type User = {
  __typename?: 'User';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<File>;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['Upload']>;
};

export type UserRelateToOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['Upload']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization?: Maybe<Scalars['String']>;
  organization_not?: Maybe<Scalars['String']>;
  organization_contains?: Maybe<Scalars['String']>;
  organization_not_contains?: Maybe<Scalars['String']>;
  organization_starts_with?: Maybe<Scalars['String']>;
  organization_not_starts_with?: Maybe<Scalars['String']>;
  organization_ends_with?: Maybe<Scalars['String']>;
  organization_not_ends_with?: Maybe<Scalars['String']>;
  organization_i?: Maybe<Scalars['String']>;
  organization_not_i?: Maybe<Scalars['String']>;
  organization_contains_i?: Maybe<Scalars['String']>;
  organization_not_contains_i?: Maybe<Scalars['String']>;
  organization_starts_with_i?: Maybe<Scalars['String']>;
  organization_not_starts_with_i?: Maybe<Scalars['String']>;
  organization_ends_with_i?: Maybe<Scalars['String']>;
  organization_not_ends_with_i?: Maybe<Scalars['String']>;
  organization_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isAdmin_not?: Maybe<Scalars['Boolean']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  avatar_not?: Maybe<Scalars['String']>;
  avatar_contains?: Maybe<Scalars['String']>;
  avatar_not_contains?: Maybe<Scalars['String']>;
  avatar_starts_with?: Maybe<Scalars['String']>;
  avatar_not_starts_with?: Maybe<Scalars['String']>;
  avatar_ends_with?: Maybe<Scalars['String']>;
  avatar_not_ends_with?: Maybe<Scalars['String']>;
  avatar_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  avatar_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export type CarCategoriesListQueryVariables = Exact<{ [key: string]: never; }>;


export type CarCategoriesListQuery = (
  { __typename?: 'Query' }
  & { allItemCarCategories?: Maybe<Array<Maybe<(
    { __typename?: 'ItemCarCategory' }
    & Pick<ItemCarCategory, 'name' | 'slug' | 'id' | 'description'>
  )>>> }
);

export type ItemCarQueryVariables = Exact<{
  postWhere?: Maybe<ItemCarWhereInput>;
}>;


export type ItemCarQuery = (
  { __typename?: 'Query' }
  & { allItemCars?: Maybe<Array<Maybe<(
    { __typename?: 'ItemCar' }
    & Pick<ItemCar, 'id' | 'name' | 'pricevalue' | 'chassis' | 'isEnabled' | 'description' | 'netweight' | 'engine'>
    & { imagecloud?: Maybe<(
      { __typename?: 'CloudinaryImage_File' }
      & Pick<CloudinaryImage_File, 'publicUrl'>
    )>, photos?: Maybe<(
      { __typename?: 'CloudinaryGallery' }
      & { images?: Maybe<Array<Maybe<(
        { __typename?: 'CloudinaryGalleryImage' }
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrl'>
        )> }
      )>>> }
    )>, categories?: Maybe<(
      { __typename?: 'ItemCarCategory' }
      & Pick<ItemCarCategory, 'name' | 'slug' | 'id'>
    )> }
  )>>>, allItemCarCategories?: Maybe<Array<Maybe<(
    { __typename?: 'ItemCarCategory' }
    & Pick<ItemCarCategory, 'name' | 'slug' | 'id' | 'description'>
  )>>> }
);

export type PriceCategoryListQueryVariables = Exact<{ [key: string]: never; }>;


export type PriceCategoryListQuery = (
  { __typename?: 'Query' }
  & { allItemCategories?: Maybe<Array<Maybe<(
    { __typename?: 'ItemCategory' }
    & Pick<ItemCategory, 'name' | 'slug' | 'id' | 'description'>
  )>>> }
);

export type ItemPriceQueryVariables = Exact<{
  postWhere?: Maybe<ItemPriceWhereInput>;
}>;


export type ItemPriceQuery = (
  { __typename?: 'Query' }
  & { allItemPrices?: Maybe<Array<Maybe<(
    { __typename?: 'ItemPrice' }
    & Pick<ItemPrice, 'id' | 'name' | 'art' | 'pricevalue'>
    & { categories?: Maybe<(
      { __typename?: 'ItemCategory' }
      & Pick<ItemCategory, 'id' | 'name' | 'slug' | 'description'>
    )> }
  )>>> }
);


export const CarCategoriesListDocument = gql`
    query CarCategoriesList {
  allItemCarCategories {
    name
    slug
    id
    description
  }
}
    `;

/**
 * __useCarCategoriesListQuery__
 *
 * To run a query within a React component, call `useCarCategoriesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarCategoriesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarCategoriesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCarCategoriesListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CarCategoriesListQuery, CarCategoriesListQueryVariables>) {
        return ApolloReactHooks.useQuery<CarCategoriesListQuery, CarCategoriesListQueryVariables>(CarCategoriesListDocument, baseOptions);
      }
export function useCarCategoriesListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CarCategoriesListQuery, CarCategoriesListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CarCategoriesListQuery, CarCategoriesListQueryVariables>(CarCategoriesListDocument, baseOptions);
        }
export type CarCategoriesListQueryHookResult = ReturnType<typeof useCarCategoriesListQuery>;
export type CarCategoriesListLazyQueryHookResult = ReturnType<typeof useCarCategoriesListLazyQuery>;
export type CarCategoriesListQueryResult = ApolloReactCommon.QueryResult<CarCategoriesListQuery, CarCategoriesListQueryVariables>;
export const ItemCarDocument = gql`
    query ItemCar($postWhere: ItemCarWhereInput) {
  allItemCars(where: $postWhere) {
    id
    name
    imagecloud {
      publicUrl
    }
    photos {
      images {
        image {
          publicUrl
        }
      }
    }
    pricevalue
    categories {
      name
      slug
      id
    }
    chassis
    isEnabled
    description
    netweight
    engine
  }
  allItemCarCategories {
    name
    slug
    id
    description
  }
}
    `;

/**
 * __useItemCarQuery__
 *
 * To run a query within a React component, call `useItemCarQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemCarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemCarQuery({
 *   variables: {
 *      postWhere: // value for 'postWhere'
 *   },
 * });
 */
export function useItemCarQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ItemCarQuery, ItemCarQueryVariables>) {
        return ApolloReactHooks.useQuery<ItemCarQuery, ItemCarQueryVariables>(ItemCarDocument, baseOptions);
      }
export function useItemCarLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ItemCarQuery, ItemCarQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ItemCarQuery, ItemCarQueryVariables>(ItemCarDocument, baseOptions);
        }
export type ItemCarQueryHookResult = ReturnType<typeof useItemCarQuery>;
export type ItemCarLazyQueryHookResult = ReturnType<typeof useItemCarLazyQuery>;
export type ItemCarQueryResult = ApolloReactCommon.QueryResult<ItemCarQuery, ItemCarQueryVariables>;
export const PriceCategoryListDocument = gql`
    query PriceCategoryList {
  allItemCategories {
    name
    slug
    id
    description
  }
}
    `;

/**
 * __usePriceCategoryListQuery__
 *
 * To run a query within a React component, call `usePriceCategoryListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePriceCategoryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePriceCategoryListQuery({
 *   variables: {
 *   },
 * });
 */
export function usePriceCategoryListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PriceCategoryListQuery, PriceCategoryListQueryVariables>) {
        return ApolloReactHooks.useQuery<PriceCategoryListQuery, PriceCategoryListQueryVariables>(PriceCategoryListDocument, baseOptions);
      }
export function usePriceCategoryListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PriceCategoryListQuery, PriceCategoryListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PriceCategoryListQuery, PriceCategoryListQueryVariables>(PriceCategoryListDocument, baseOptions);
        }
export type PriceCategoryListQueryHookResult = ReturnType<typeof usePriceCategoryListQuery>;
export type PriceCategoryListLazyQueryHookResult = ReturnType<typeof usePriceCategoryListLazyQuery>;
export type PriceCategoryListQueryResult = ApolloReactCommon.QueryResult<PriceCategoryListQuery, PriceCategoryListQueryVariables>;
export const ItemPriceDocument = gql`
    query ItemPrice($postWhere: ItemPriceWhereInput) {
  allItemPrices(where: $postWhere) {
    id
    name
    art
    pricevalue
    categories {
      id
      name
      slug
      description
    }
  }
}
    `;

/**
 * __useItemPriceQuery__
 *
 * To run a query within a React component, call `useItemPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemPriceQuery({
 *   variables: {
 *      postWhere: // value for 'postWhere'
 *   },
 * });
 */
export function useItemPriceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ItemPriceQuery, ItemPriceQueryVariables>) {
        return ApolloReactHooks.useQuery<ItemPriceQuery, ItemPriceQueryVariables>(ItemPriceDocument, baseOptions);
      }
export function useItemPriceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ItemPriceQuery, ItemPriceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ItemPriceQuery, ItemPriceQueryVariables>(ItemPriceDocument, baseOptions);
        }
export type ItemPriceQueryHookResult = ReturnType<typeof useItemPriceQuery>;
export type ItemPriceLazyQueryHookResult = ReturnType<typeof useItemPriceLazyQuery>;
export type ItemPriceQueryResult = ApolloReactCommon.QueryResult<ItemPriceQuery, ItemPriceQueryVariables>;
