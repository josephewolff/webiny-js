// @flow
import type { Entity } from "@webiny/entity";
import type { PluginsContainer } from "./PluginsContainer";

export type PluginType = Object & {
    name: string,
    type: string
};

export type PluginsContainerType = PluginsContainer;

export type EntityPluginType = PluginType & {
    namespace?: string,
    entity:
        | {
              name: string,
              factory: (context: Object) => Class<Entity>
          }
        | Function
};

export type GraphQLSchemaType = {
    namespace: string,
    typeDefs: *,
    resolvers: Object | (() => Object)
};

export type GraphQLSchemaPluginType = PluginType & {
    schema?: GraphQLSchemaType | (() => GraphQLSchemaType),
    security?: Object | (() => Object)
};

export type GraphQLMiddlewarePluginType = PluginType & {
    middleware: () => Object
};

export type GraphQLContextPluginType = PluginType & {
    apply: (context: Object) => any
};

export type SettingsPluginType = PluginType & {};

export type ApiContext = {
    getDatabase: () => Object,
    config: Object,
    getEntity: (name: string) => ?Object,
    getEntities: () => Array<Object>
};