// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for feedbacks documents
 */
interface FeedbacksDocumentData {
  /**
   * Feedbacks field in *feedbacks*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Número de feedbacks do card do instagram
   * - **API ID Path**: feedbacks.feedbacks
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  feedbacks: prismic.KeyTextField;
}

/**
 * feedbacks document from Prismic
 *
 * - **API ID**: `feedbacks`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FeedbacksDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FeedbacksDocumentData>,
    "feedbacks",
    Lang
  >;

/**
 * Content for followers documents
 */
interface FollowersDocumentData {
  /**
   * seguidores do instagram field in *followers*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Número de seguidores do card do instagram
   * - **API ID Path**: followers.followers
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  followers: prismic.KeyTextField;
}

/**
 * followers document from Prismic
 *
 * - **API ID**: `followers`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FollowersDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FollowersDocumentData>,
    "followers",
    Lang
  >;

export type AllDocumentTypes = FeedbacksDocument | FollowersDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FeedbacksDocument,
      FeedbacksDocumentData,
      FollowersDocument,
      FollowersDocumentData,
      AllDocumentTypes,
    };
  }
}
