/* eslint sort-keys: error */

export const presetLoaderMap = {
  'import-types': () => import('@graphql-codegen/import-types-preset'),
  'java-apollo-android': () => import('@graphql-codegen/java-apollo-android'),
  'near-operation-file': () => import('@graphql-codegen/near-operation-file-preset'),
  client: () => import('@graphql-codegen/client-preset'),
};

export const pluginLoaderMap = {
  add: () => import('@graphql-codegen/add'),
  'c-sharp': () => import('@graphql-codegen/c-sharp'),
  'c-sharp-operations': () => import('@graphql-codegen/c-sharp-operations'),
  'flutter-freezed': () => import('@graphql-codegen/flutter-freezed'),
  flow: () => import('@graphql-codegen/flow'),
  'flow-operations': () => import('@graphql-codegen/flow-operations'),
  'flow-resolvers': () => import('@graphql-codegen/flow-resolvers'),
  'fragment-matcher': () => import('@graphql-codegen/fragment-matcher'),
  introspection: () => import('@graphql-codegen/introspection'),
  java: () => import('@graphql-codegen/java'),
  'java-apollo-android': () => import('@graphql-codegen/java-apollo-android'),
  'java-resolvers': () => import('@graphql-codegen/java-resolvers'),
  jsdoc: () => import('@graphql-codegen/jsdoc'),
  'schema-ast': () => import('@graphql-codegen/schema-ast'),
  time: () => import('@graphql-codegen/time'),
  'typed-document-node': () => import('@graphql-codegen/typed-document-node'),
  typescript: () => import('@graphql-codegen/typescript'),
  'typescript-apollo-angular': () => import('@graphql-codegen/typescript-apollo-angular'),
  'typescript-apollo-client-helpers': () =>
    import('@graphql-codegen/typescript-apollo-client-helpers'),
  'typescript-generic-sdk': () => import('@graphql-codegen/typescript-generic-sdk'),
  'typescript-graphql-files-modules': () =>
    import('@graphql-codegen/typescript-graphql-files-modules'),
  'typescript-graphql-request': () => import('@graphql-codegen/typescript-graphql-request'),
  'typescript-mongodb': () => import('@graphql-codegen/typescript-mongodb'),
  'typescript-operations': () => import('@graphql-codegen/typescript-operations'),
  'typescript-react-apollo': () => import('@graphql-codegen/typescript-react-apollo'),
  'typescript-react-query': () => import('@graphql-codegen/typescript-react-query'),
  'typescript-resolvers': () => import('@graphql-codegen/typescript-resolvers'),
  'typescript-rtk-query': () => import('@graphql-codegen/typescript-rtk-query'),
  'typescript-stencil-apollo': () => import('@graphql-codegen/typescript-stencil-apollo'),
  'typescript-type-graphql': () => import('@graphql-codegen/typescript-type-graphql'),
  'typescript-urql': () => import('@graphql-codegen/typescript-urql'),
  'typescript-vue-apollo': () => import('@graphql-codegen/typescript-vue-apollo'),
  'typescript-vue-apollo-smart-ops': () =>
    import('@graphql-codegen/typescript-vue-apollo-smart-ops'),
  'typescript-vue-urql': () => import('@graphql-codegen/typescript-vue-urql'),
};
