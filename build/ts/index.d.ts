import '@shopify/shopify-api/adapters/node';
import { ShopifyRestResources, Shopify } from '@shopify/shopify-api';
import { SessionStorage } from '@shopify/shopify-app-session-storage';
import { AppConfigInterface, AppConfigParams } from './config-types';
import { AuthMiddleware } from './auth/types';
import { ProcessWebhooksMiddleware } from './webhooks/types';
import { ValidateAuthenticatedSessionMiddleware, CspHeadersMiddleware, EnsureInstalledMiddleware, RedirectToShopifyOrAppRootMiddleware } from './middlewares/types';
export * from './types';
export * from './auth/types';
export * from './middlewares/types';
export * from './webhooks/types';
export interface ShopifyApp<R extends ShopifyRestResources = any, S extends SessionStorage = SessionStorage> {
    config: AppConfigInterface<S>;
    api: Shopify<R>;
    auth: AuthMiddleware;
    processWebhooks: ProcessWebhooksMiddleware;
    validateAuthenticatedSession: ValidateAuthenticatedSessionMiddleware;
    cspHeaders: CspHeadersMiddleware;
    ensureInstalledOnShop: EnsureInstalledMiddleware;
    redirectToShopifyOrAppRoot: RedirectToShopifyOrAppRootMiddleware;
}
export declare function shopifyApp<R extends ShopifyRestResources = any, S extends SessionStorage = SessionStorage>(config: AppConfigParams<R, S>): ShopifyApp<R, S>;
//# sourceMappingURL=index.d.ts.map