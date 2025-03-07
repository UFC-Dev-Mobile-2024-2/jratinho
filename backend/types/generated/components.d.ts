import type { Schema, Struct } from '@strapi/strapi';

export interface OptionOptions extends Struct.ComponentSchema {
  collectionName: 'components_option_options';
  info: {
    description: '';
    displayName: 'options';
    icon: 'check';
  };
  attributes: {
    correct: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'option.options': OptionOptions;
    }
  }
}
