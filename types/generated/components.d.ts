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

export interface ElementsServiceRow extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_rows';
  info: {
    displayName: 'ServiceRow';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    juniorPrice: Schema.Attribute.String;
    middlePrice: Schema.Attribute.String;
    seniorPrice: Schema.Attribute.String;
  };
}

export interface ElementsServicePrice extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_prices';
  info: {
    displayName: 'ServicePrice';
  };
  attributes: {};
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

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsBaberCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_baber_cards';
  info: {
    displayName: 'BaberCard';
    icon: 'user';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    position: Schema.Attribute.Enumeration<['junior', 'middle', 'senior']>;
  };
}

export interface BlocksServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    service: Schema.Attribute.Component<'elements.service-row', true>;
    backgroundImg: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksSalons extends Struct.ComponentSchema {
  collectionName: 'components_blocks_salons';
  info: {
    displayName: 'Salons';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    backgroundImg: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    location: Schema.Attribute.String;
    backgroundImg: Schema.Attribute.Media<'images'>;
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

export interface BlocksFranchise extends Struct.ComponentSchema {
  collectionName: 'components_blocks_franchises';
  info: {
    displayName: 'Franchise';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    button: Schema.Attribute.Component<'elements.button', false>;
    backgroundImg: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksBarbers extends Struct.ComponentSchema {
  collectionName: 'components_blocks_barbers';
  info: {
    displayName: 'Barbers';
    description: '';
  };
  attributes: {
    Card: Schema.Attribute.Component<'elements.baber-card', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.meta-data': SeoMetaData;
      'elements.service-row': ElementsServiceRow;
      'elements.service-price': ElementsServicePrice;
      'elements.menu-button': ElementsMenuButton;
      'elements.button': ElementsButton;
      'elements.baber-card': ElementsBaberCard;
      'blocks.services': BlocksServices;
      'blocks.salons': BlocksSalons;
      'blocks.hero': BlocksHero;
      'blocks.header': BlocksHeader;
      'blocks.franchise': BlocksFranchise;
      'blocks.barbers': BlocksBarbers;
    }
  }
}
