import type { Struct, Schema } from '@strapi/strapi';

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    location: Schema.Attribute.String;
    background: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksHeader extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    schedule: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    instagramLink: Schema.Attribute.String;
    navLink: Schema.Attribute.Component<'elements.menu-button', true>;
  };
}

export interface ElementsMenuButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_menu_buttons';
  info: {
    displayName: 'MenuButton';
  };
  attributes: {
    title: Schema.Attribute.String;
    section: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.meta-data': SeoMetaData;
      'blocks.hero': BlocksHero;
      'blocks.header': BlocksHeader;
      'elements.menu-button': ElementsMenuButton;
    }
  }
}
