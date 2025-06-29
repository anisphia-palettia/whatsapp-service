
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model WhatsappSession
 * 
 */
export type WhatsappSession = $Result.DefaultSelection<Prisma.$WhatsappSessionPayload>
/**
 * Model WhatsappChat
 * 
 */
export type WhatsappChat = $Result.DefaultSelection<Prisma.$WhatsappChatPayload>
/**
 * Model WhatsappMessage
 * 
 */
export type WhatsappMessage = $Result.DefaultSelection<Prisma.$WhatsappMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SessionStatus: {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]

}

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more WhatsappSessions
 * const whatsappSessions = await prisma.whatsappSession.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more WhatsappSessions
   * const whatsappSessions = await prisma.whatsappSession.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.whatsappSession`: Exposes CRUD operations for the **WhatsappSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsappSessions
    * const whatsappSessions = await prisma.whatsappSession.findMany()
    * ```
    */
  get whatsappSession(): Prisma.WhatsappSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsappChat`: Exposes CRUD operations for the **WhatsappChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsappChats
    * const whatsappChats = await prisma.whatsappChat.findMany()
    * ```
    */
  get whatsappChat(): Prisma.WhatsappChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsappMessage`: Exposes CRUD operations for the **WhatsappMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsappMessages
    * const whatsappMessages = await prisma.whatsappMessage.findMany()
    * ```
    */
  get whatsappMessage(): Prisma.WhatsappMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    WhatsappSession: 'WhatsappSession',
    WhatsappChat: 'WhatsappChat',
    WhatsappMessage: 'WhatsappMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "whatsappSession" | "whatsappChat" | "whatsappMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      WhatsappSession: {
        payload: Prisma.$WhatsappSessionPayload<ExtArgs>
        fields: Prisma.WhatsappSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsappSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsappSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappSessionPayload>
          }
          findFirst: {
            args: Prisma.WhatsappSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsappSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappSessionPayload>
          }
          findMany: {
            args: Prisma.WhatsappSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappSessionPayload>[]
          }
          create: {
            args: Prisma.WhatsappSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappSessionPayload>
          }
          createMany: {
            args: Prisma.WhatsappSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhatsappSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappSessionPayload>[]
          }
          delete: {
            args: Prisma.WhatsappSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappSessionPayload>
          }
          update: {
            args: Prisma.WhatsappSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappSessionPayload>
          }
          deleteMany: {
            args: Prisma.WhatsappSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsappSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhatsappSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappSessionPayload>[]
          }
          upsert: {
            args: Prisma.WhatsappSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappSessionPayload>
          }
          aggregate: {
            args: Prisma.WhatsappSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsappSession>
          }
          groupBy: {
            args: Prisma.WhatsappSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsappSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsappSessionCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsappSessionCountAggregateOutputType> | number
          }
        }
      }
      WhatsappChat: {
        payload: Prisma.$WhatsappChatPayload<ExtArgs>
        fields: Prisma.WhatsappChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsappChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsappChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappChatPayload>
          }
          findFirst: {
            args: Prisma.WhatsappChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsappChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappChatPayload>
          }
          findMany: {
            args: Prisma.WhatsappChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappChatPayload>[]
          }
          create: {
            args: Prisma.WhatsappChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappChatPayload>
          }
          createMany: {
            args: Prisma.WhatsappChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhatsappChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappChatPayload>[]
          }
          delete: {
            args: Prisma.WhatsappChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappChatPayload>
          }
          update: {
            args: Prisma.WhatsappChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappChatPayload>
          }
          deleteMany: {
            args: Prisma.WhatsappChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsappChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhatsappChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappChatPayload>[]
          }
          upsert: {
            args: Prisma.WhatsappChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappChatPayload>
          }
          aggregate: {
            args: Prisma.WhatsappChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsappChat>
          }
          groupBy: {
            args: Prisma.WhatsappChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsappChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsappChatCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsappChatCountAggregateOutputType> | number
          }
        }
      }
      WhatsappMessage: {
        payload: Prisma.$WhatsappMessagePayload<ExtArgs>
        fields: Prisma.WhatsappMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsappMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsappMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>
          }
          findFirst: {
            args: Prisma.WhatsappMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsappMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>
          }
          findMany: {
            args: Prisma.WhatsappMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>[]
          }
          create: {
            args: Prisma.WhatsappMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>
          }
          createMany: {
            args: Prisma.WhatsappMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhatsappMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>[]
          }
          delete: {
            args: Prisma.WhatsappMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>
          }
          update: {
            args: Prisma.WhatsappMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>
          }
          deleteMany: {
            args: Prisma.WhatsappMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsappMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhatsappMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>[]
          }
          upsert: {
            args: Prisma.WhatsappMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappMessagePayload>
          }
          aggregate: {
            args: Prisma.WhatsappMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsappMessage>
          }
          groupBy: {
            args: Prisma.WhatsappMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsappMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsappMessageCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsappMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    whatsappSession?: WhatsappSessionOmit
    whatsappChat?: WhatsappChatOmit
    whatsappMessage?: WhatsappMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WhatsappSessionCountOutputType
   */

  export type WhatsappSessionCountOutputType = {
    chats: number
    messages: number
  }

  export type WhatsappSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | WhatsappSessionCountOutputTypeCountChatsArgs
    messages?: boolean | WhatsappSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * WhatsappSessionCountOutputType without action
   */
  export type WhatsappSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSessionCountOutputType
     */
    select?: WhatsappSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WhatsappSessionCountOutputType without action
   */
  export type WhatsappSessionCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappChatWhereInput
  }

  /**
   * WhatsappSessionCountOutputType without action
   */
  export type WhatsappSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappMessageWhereInput
  }


  /**
   * Count Type WhatsappChatCountOutputType
   */

  export type WhatsappChatCountOutputType = {
    messages: number
  }

  export type WhatsappChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | WhatsappChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * WhatsappChatCountOutputType without action
   */
  export type WhatsappChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChatCountOutputType
     */
    select?: WhatsappChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WhatsappChatCountOutputType without action
   */
  export type WhatsappChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model WhatsappSession
   */

  export type AggregateWhatsappSession = {
    _count: WhatsappSessionCountAggregateOutputType | null
    _min: WhatsappSessionMinAggregateOutputType | null
    _max: WhatsappSessionMaxAggregateOutputType | null
  }

  export type WhatsappSessionMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    status: $Enums.SessionStatus | null
    lastConnectedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsappSessionMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    status: $Enums.SessionStatus | null
    lastConnectedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsappSessionCountAggregateOutputType = {
    id: number
    phoneNumber: number
    status: number
    lastConnectedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WhatsappSessionMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    status?: true
    lastConnectedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsappSessionMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    status?: true
    lastConnectedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsappSessionCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    status?: true
    lastConnectedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WhatsappSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappSession to aggregate.
     */
    where?: WhatsappSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappSessions to fetch.
     */
    orderBy?: WhatsappSessionOrderByWithRelationInput | WhatsappSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsappSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsappSessions
    **/
    _count?: true | WhatsappSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsappSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsappSessionMaxAggregateInputType
  }

  export type GetWhatsappSessionAggregateType<T extends WhatsappSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsappSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsappSession[P]>
      : GetScalarType<T[P], AggregateWhatsappSession[P]>
  }




  export type WhatsappSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappSessionWhereInput
    orderBy?: WhatsappSessionOrderByWithAggregationInput | WhatsappSessionOrderByWithAggregationInput[]
    by: WhatsappSessionScalarFieldEnum[] | WhatsappSessionScalarFieldEnum
    having?: WhatsappSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsappSessionCountAggregateInputType | true
    _min?: WhatsappSessionMinAggregateInputType
    _max?: WhatsappSessionMaxAggregateInputType
  }

  export type WhatsappSessionGroupByOutputType = {
    id: string
    phoneNumber: string
    status: $Enums.SessionStatus
    lastConnectedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WhatsappSessionCountAggregateOutputType | null
    _min: WhatsappSessionMinAggregateOutputType | null
    _max: WhatsappSessionMaxAggregateOutputType | null
  }

  type GetWhatsappSessionGroupByPayload<T extends WhatsappSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsappSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsappSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsappSessionGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsappSessionGroupByOutputType[P]>
        }
      >
    >


  export type WhatsappSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    status?: boolean
    lastConnectedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chats?: boolean | WhatsappSession$chatsArgs<ExtArgs>
    messages?: boolean | WhatsappSession$messagesArgs<ExtArgs>
    _count?: boolean | WhatsappSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappSession"]>

  export type WhatsappSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    status?: boolean
    lastConnectedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["whatsappSession"]>

  export type WhatsappSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    status?: boolean
    lastConnectedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["whatsappSession"]>

  export type WhatsappSessionSelectScalar = {
    id?: boolean
    phoneNumber?: boolean
    status?: boolean
    lastConnectedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WhatsappSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phoneNumber" | "status" | "lastConnectedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["whatsappSession"]>
  export type WhatsappSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | WhatsappSession$chatsArgs<ExtArgs>
    messages?: boolean | WhatsappSession$messagesArgs<ExtArgs>
    _count?: boolean | WhatsappSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WhatsappSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WhatsappSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WhatsappSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsappSession"
    objects: {
      chats: Prisma.$WhatsappChatPayload<ExtArgs>[]
      messages: Prisma.$WhatsappMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneNumber: string
      status: $Enums.SessionStatus
      lastConnectedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["whatsappSession"]>
    composites: {}
  }

  type WhatsappSessionGetPayload<S extends boolean | null | undefined | WhatsappSessionDefaultArgs> = $Result.GetResult<Prisma.$WhatsappSessionPayload, S>

  type WhatsappSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsappSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsappSessionCountAggregateInputType | true
    }

  export interface WhatsappSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsappSession'], meta: { name: 'WhatsappSession' } }
    /**
     * Find zero or one WhatsappSession that matches the filter.
     * @param {WhatsappSessionFindUniqueArgs} args - Arguments to find a WhatsappSession
     * @example
     * // Get one WhatsappSession
     * const whatsappSession = await prisma.whatsappSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsappSessionFindUniqueArgs>(args: SelectSubset<T, WhatsappSessionFindUniqueArgs<ExtArgs>>): Prisma__WhatsappSessionClient<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsappSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsappSessionFindUniqueOrThrowArgs} args - Arguments to find a WhatsappSession
     * @example
     * // Get one WhatsappSession
     * const whatsappSession = await prisma.whatsappSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsappSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsappSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsappSessionClient<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappSessionFindFirstArgs} args - Arguments to find a WhatsappSession
     * @example
     * // Get one WhatsappSession
     * const whatsappSession = await prisma.whatsappSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsappSessionFindFirstArgs>(args?: SelectSubset<T, WhatsappSessionFindFirstArgs<ExtArgs>>): Prisma__WhatsappSessionClient<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappSessionFindFirstOrThrowArgs} args - Arguments to find a WhatsappSession
     * @example
     * // Get one WhatsappSession
     * const whatsappSession = await prisma.whatsappSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsappSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsappSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsappSessionClient<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsappSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsappSessions
     * const whatsappSessions = await prisma.whatsappSession.findMany()
     * 
     * // Get first 10 WhatsappSessions
     * const whatsappSessions = await prisma.whatsappSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsappSessionWithIdOnly = await prisma.whatsappSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsappSessionFindManyArgs>(args?: SelectSubset<T, WhatsappSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsappSession.
     * @param {WhatsappSessionCreateArgs} args - Arguments to create a WhatsappSession.
     * @example
     * // Create one WhatsappSession
     * const WhatsappSession = await prisma.whatsappSession.create({
     *   data: {
     *     // ... data to create a WhatsappSession
     *   }
     * })
     * 
     */
    create<T extends WhatsappSessionCreateArgs>(args: SelectSubset<T, WhatsappSessionCreateArgs<ExtArgs>>): Prisma__WhatsappSessionClient<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsappSessions.
     * @param {WhatsappSessionCreateManyArgs} args - Arguments to create many WhatsappSessions.
     * @example
     * // Create many WhatsappSessions
     * const whatsappSession = await prisma.whatsappSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsappSessionCreateManyArgs>(args?: SelectSubset<T, WhatsappSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhatsappSessions and returns the data saved in the database.
     * @param {WhatsappSessionCreateManyAndReturnArgs} args - Arguments to create many WhatsappSessions.
     * @example
     * // Create many WhatsappSessions
     * const whatsappSession = await prisma.whatsappSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhatsappSessions and only return the `id`
     * const whatsappSessionWithIdOnly = await prisma.whatsappSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhatsappSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, WhatsappSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WhatsappSession.
     * @param {WhatsappSessionDeleteArgs} args - Arguments to delete one WhatsappSession.
     * @example
     * // Delete one WhatsappSession
     * const WhatsappSession = await prisma.whatsappSession.delete({
     *   where: {
     *     // ... filter to delete one WhatsappSession
     *   }
     * })
     * 
     */
    delete<T extends WhatsappSessionDeleteArgs>(args: SelectSubset<T, WhatsappSessionDeleteArgs<ExtArgs>>): Prisma__WhatsappSessionClient<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsappSession.
     * @param {WhatsappSessionUpdateArgs} args - Arguments to update one WhatsappSession.
     * @example
     * // Update one WhatsappSession
     * const whatsappSession = await prisma.whatsappSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsappSessionUpdateArgs>(args: SelectSubset<T, WhatsappSessionUpdateArgs<ExtArgs>>): Prisma__WhatsappSessionClient<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsappSessions.
     * @param {WhatsappSessionDeleteManyArgs} args - Arguments to filter WhatsappSessions to delete.
     * @example
     * // Delete a few WhatsappSessions
     * const { count } = await prisma.whatsappSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsappSessionDeleteManyArgs>(args?: SelectSubset<T, WhatsappSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsappSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsappSessions
     * const whatsappSession = await prisma.whatsappSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsappSessionUpdateManyArgs>(args: SelectSubset<T, WhatsappSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsappSessions and returns the data updated in the database.
     * @param {WhatsappSessionUpdateManyAndReturnArgs} args - Arguments to update many WhatsappSessions.
     * @example
     * // Update many WhatsappSessions
     * const whatsappSession = await prisma.whatsappSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhatsappSessions and only return the `id`
     * const whatsappSessionWithIdOnly = await prisma.whatsappSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WhatsappSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, WhatsappSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WhatsappSession.
     * @param {WhatsappSessionUpsertArgs} args - Arguments to update or create a WhatsappSession.
     * @example
     * // Update or create a WhatsappSession
     * const whatsappSession = await prisma.whatsappSession.upsert({
     *   create: {
     *     // ... data to create a WhatsappSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsappSession we want to update
     *   }
     * })
     */
    upsert<T extends WhatsappSessionUpsertArgs>(args: SelectSubset<T, WhatsappSessionUpsertArgs<ExtArgs>>): Prisma__WhatsappSessionClient<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsappSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappSessionCountArgs} args - Arguments to filter WhatsappSessions to count.
     * @example
     * // Count the number of WhatsappSessions
     * const count = await prisma.whatsappSession.count({
     *   where: {
     *     // ... the filter for the WhatsappSessions we want to count
     *   }
     * })
    **/
    count<T extends WhatsappSessionCountArgs>(
      args?: Subset<T, WhatsappSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsappSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsappSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsappSessionAggregateArgs>(args: Subset<T, WhatsappSessionAggregateArgs>): Prisma.PrismaPromise<GetWhatsappSessionAggregateType<T>>

    /**
     * Group by WhatsappSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsappSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsappSessionGroupByArgs['orderBy'] }
        : { orderBy?: WhatsappSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsappSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsappSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsappSession model
   */
  readonly fields: WhatsappSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsappSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsappSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends WhatsappSession$chatsArgs<ExtArgs> = {}>(args?: Subset<T, WhatsappSession$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends WhatsappSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, WhatsappSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsappSession model
   */
  interface WhatsappSessionFieldRefs {
    readonly id: FieldRef<"WhatsappSession", 'String'>
    readonly phoneNumber: FieldRef<"WhatsappSession", 'String'>
    readonly status: FieldRef<"WhatsappSession", 'SessionStatus'>
    readonly lastConnectedAt: FieldRef<"WhatsappSession", 'DateTime'>
    readonly createdAt: FieldRef<"WhatsappSession", 'DateTime'>
    readonly updatedAt: FieldRef<"WhatsappSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsappSession findUnique
   */
  export type WhatsappSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSession
     */
    select?: WhatsappSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappSession
     */
    omit?: WhatsappSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappSession to fetch.
     */
    where: WhatsappSessionWhereUniqueInput
  }

  /**
   * WhatsappSession findUniqueOrThrow
   */
  export type WhatsappSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSession
     */
    select?: WhatsappSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappSession
     */
    omit?: WhatsappSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappSession to fetch.
     */
    where: WhatsappSessionWhereUniqueInput
  }

  /**
   * WhatsappSession findFirst
   */
  export type WhatsappSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSession
     */
    select?: WhatsappSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappSession
     */
    omit?: WhatsappSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappSession to fetch.
     */
    where?: WhatsappSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappSessions to fetch.
     */
    orderBy?: WhatsappSessionOrderByWithRelationInput | WhatsappSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappSessions.
     */
    cursor?: WhatsappSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappSessions.
     */
    distinct?: WhatsappSessionScalarFieldEnum | WhatsappSessionScalarFieldEnum[]
  }

  /**
   * WhatsappSession findFirstOrThrow
   */
  export type WhatsappSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSession
     */
    select?: WhatsappSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappSession
     */
    omit?: WhatsappSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappSession to fetch.
     */
    where?: WhatsappSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappSessions to fetch.
     */
    orderBy?: WhatsappSessionOrderByWithRelationInput | WhatsappSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappSessions.
     */
    cursor?: WhatsappSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappSessions.
     */
    distinct?: WhatsappSessionScalarFieldEnum | WhatsappSessionScalarFieldEnum[]
  }

  /**
   * WhatsappSession findMany
   */
  export type WhatsappSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSession
     */
    select?: WhatsappSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappSession
     */
    omit?: WhatsappSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappSessions to fetch.
     */
    where?: WhatsappSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappSessions to fetch.
     */
    orderBy?: WhatsappSessionOrderByWithRelationInput | WhatsappSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsappSessions.
     */
    cursor?: WhatsappSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappSessions.
     */
    skip?: number
    distinct?: WhatsappSessionScalarFieldEnum | WhatsappSessionScalarFieldEnum[]
  }

  /**
   * WhatsappSession create
   */
  export type WhatsappSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSession
     */
    select?: WhatsappSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappSession
     */
    omit?: WhatsappSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsappSession.
     */
    data: XOR<WhatsappSessionCreateInput, WhatsappSessionUncheckedCreateInput>
  }

  /**
   * WhatsappSession createMany
   */
  export type WhatsappSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsappSessions.
     */
    data: WhatsappSessionCreateManyInput | WhatsappSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsappSession createManyAndReturn
   */
  export type WhatsappSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSession
     */
    select?: WhatsappSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappSession
     */
    omit?: WhatsappSessionOmit<ExtArgs> | null
    /**
     * The data used to create many WhatsappSessions.
     */
    data: WhatsappSessionCreateManyInput | WhatsappSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsappSession update
   */
  export type WhatsappSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSession
     */
    select?: WhatsappSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappSession
     */
    omit?: WhatsappSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsappSession.
     */
    data: XOR<WhatsappSessionUpdateInput, WhatsappSessionUncheckedUpdateInput>
    /**
     * Choose, which WhatsappSession to update.
     */
    where: WhatsappSessionWhereUniqueInput
  }

  /**
   * WhatsappSession updateMany
   */
  export type WhatsappSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsappSessions.
     */
    data: XOR<WhatsappSessionUpdateManyMutationInput, WhatsappSessionUncheckedUpdateManyInput>
    /**
     * Filter which WhatsappSessions to update
     */
    where?: WhatsappSessionWhereInput
    /**
     * Limit how many WhatsappSessions to update.
     */
    limit?: number
  }

  /**
   * WhatsappSession updateManyAndReturn
   */
  export type WhatsappSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSession
     */
    select?: WhatsappSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappSession
     */
    omit?: WhatsappSessionOmit<ExtArgs> | null
    /**
     * The data used to update WhatsappSessions.
     */
    data: XOR<WhatsappSessionUpdateManyMutationInput, WhatsappSessionUncheckedUpdateManyInput>
    /**
     * Filter which WhatsappSessions to update
     */
    where?: WhatsappSessionWhereInput
    /**
     * Limit how many WhatsappSessions to update.
     */
    limit?: number
  }

  /**
   * WhatsappSession upsert
   */
  export type WhatsappSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSession
     */
    select?: WhatsappSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappSession
     */
    omit?: WhatsappSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsappSession to update in case it exists.
     */
    where: WhatsappSessionWhereUniqueInput
    /**
     * In case the WhatsappSession found by the `where` argument doesn't exist, create a new WhatsappSession with this data.
     */
    create: XOR<WhatsappSessionCreateInput, WhatsappSessionUncheckedCreateInput>
    /**
     * In case the WhatsappSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsappSessionUpdateInput, WhatsappSessionUncheckedUpdateInput>
  }

  /**
   * WhatsappSession delete
   */
  export type WhatsappSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSession
     */
    select?: WhatsappSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappSession
     */
    omit?: WhatsappSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappSessionInclude<ExtArgs> | null
    /**
     * Filter which WhatsappSession to delete.
     */
    where: WhatsappSessionWhereUniqueInput
  }

  /**
   * WhatsappSession deleteMany
   */
  export type WhatsappSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappSessions to delete
     */
    where?: WhatsappSessionWhereInput
    /**
     * Limit how many WhatsappSessions to delete.
     */
    limit?: number
  }

  /**
   * WhatsappSession.chats
   */
  export type WhatsappSession$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatInclude<ExtArgs> | null
    where?: WhatsappChatWhereInput
    orderBy?: WhatsappChatOrderByWithRelationInput | WhatsappChatOrderByWithRelationInput[]
    cursor?: WhatsappChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsappChatScalarFieldEnum | WhatsappChatScalarFieldEnum[]
  }

  /**
   * WhatsappSession.messages
   */
  export type WhatsappSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageInclude<ExtArgs> | null
    where?: WhatsappMessageWhereInput
    orderBy?: WhatsappMessageOrderByWithRelationInput | WhatsappMessageOrderByWithRelationInput[]
    cursor?: WhatsappMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsappMessageScalarFieldEnum | WhatsappMessageScalarFieldEnum[]
  }

  /**
   * WhatsappSession without action
   */
  export type WhatsappSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappSession
     */
    select?: WhatsappSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappSession
     */
    omit?: WhatsappSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappSessionInclude<ExtArgs> | null
  }


  /**
   * Model WhatsappChat
   */

  export type AggregateWhatsappChat = {
    _count: WhatsappChatCountAggregateOutputType | null
    _avg: WhatsappChatAvgAggregateOutputType | null
    _sum: WhatsappChatSumAggregateOutputType | null
    _min: WhatsappChatMinAggregateOutputType | null
    _max: WhatsappChatMaxAggregateOutputType | null
  }

  export type WhatsappChatAvgAggregateOutputType = {
    unreadCount: number | null
  }

  export type WhatsappChatSumAggregateOutputType = {
    unreadCount: number | null
  }

  export type WhatsappChatMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    chatId: string | null
    name: string | null
    isGroup: boolean | null
    unreadCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsappChatMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    chatId: string | null
    name: string | null
    isGroup: boolean | null
    unreadCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsappChatCountAggregateOutputType = {
    id: number
    sessionId: number
    chatId: number
    name: number
    isGroup: number
    unreadCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WhatsappChatAvgAggregateInputType = {
    unreadCount?: true
  }

  export type WhatsappChatSumAggregateInputType = {
    unreadCount?: true
  }

  export type WhatsappChatMinAggregateInputType = {
    id?: true
    sessionId?: true
    chatId?: true
    name?: true
    isGroup?: true
    unreadCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsappChatMaxAggregateInputType = {
    id?: true
    sessionId?: true
    chatId?: true
    name?: true
    isGroup?: true
    unreadCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsappChatCountAggregateInputType = {
    id?: true
    sessionId?: true
    chatId?: true
    name?: true
    isGroup?: true
    unreadCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WhatsappChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappChat to aggregate.
     */
    where?: WhatsappChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappChats to fetch.
     */
    orderBy?: WhatsappChatOrderByWithRelationInput | WhatsappChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsappChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsappChats
    **/
    _count?: true | WhatsappChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhatsappChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhatsappChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsappChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsappChatMaxAggregateInputType
  }

  export type GetWhatsappChatAggregateType<T extends WhatsappChatAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsappChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsappChat[P]>
      : GetScalarType<T[P], AggregateWhatsappChat[P]>
  }




  export type WhatsappChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappChatWhereInput
    orderBy?: WhatsappChatOrderByWithAggregationInput | WhatsappChatOrderByWithAggregationInput[]
    by: WhatsappChatScalarFieldEnum[] | WhatsappChatScalarFieldEnum
    having?: WhatsappChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsappChatCountAggregateInputType | true
    _avg?: WhatsappChatAvgAggregateInputType
    _sum?: WhatsappChatSumAggregateInputType
    _min?: WhatsappChatMinAggregateInputType
    _max?: WhatsappChatMaxAggregateInputType
  }

  export type WhatsappChatGroupByOutputType = {
    id: string
    sessionId: string
    chatId: string
    name: string
    isGroup: boolean
    unreadCount: number
    createdAt: Date
    updatedAt: Date
    _count: WhatsappChatCountAggregateOutputType | null
    _avg: WhatsappChatAvgAggregateOutputType | null
    _sum: WhatsappChatSumAggregateOutputType | null
    _min: WhatsappChatMinAggregateOutputType | null
    _max: WhatsappChatMaxAggregateOutputType | null
  }

  type GetWhatsappChatGroupByPayload<T extends WhatsappChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsappChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsappChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsappChatGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsappChatGroupByOutputType[P]>
        }
      >
    >


  export type WhatsappChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    chatId?: boolean
    name?: boolean
    isGroup?: boolean
    unreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | WhatsappSessionDefaultArgs<ExtArgs>
    messages?: boolean | WhatsappChat$messagesArgs<ExtArgs>
    _count?: boolean | WhatsappChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappChat"]>

  export type WhatsappChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    chatId?: boolean
    name?: boolean
    isGroup?: boolean
    unreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | WhatsappSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappChat"]>

  export type WhatsappChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    chatId?: boolean
    name?: boolean
    isGroup?: boolean
    unreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | WhatsappSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappChat"]>

  export type WhatsappChatSelectScalar = {
    id?: boolean
    sessionId?: boolean
    chatId?: boolean
    name?: boolean
    isGroup?: boolean
    unreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WhatsappChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "chatId" | "name" | "isGroup" | "unreadCount" | "createdAt" | "updatedAt", ExtArgs["result"]["whatsappChat"]>
  export type WhatsappChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WhatsappSessionDefaultArgs<ExtArgs>
    messages?: boolean | WhatsappChat$messagesArgs<ExtArgs>
    _count?: boolean | WhatsappChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WhatsappChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WhatsappSessionDefaultArgs<ExtArgs>
  }
  export type WhatsappChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WhatsappSessionDefaultArgs<ExtArgs>
  }

  export type $WhatsappChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsappChat"
    objects: {
      session: Prisma.$WhatsappSessionPayload<ExtArgs>
      messages: Prisma.$WhatsappMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      chatId: string
      name: string
      isGroup: boolean
      unreadCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["whatsappChat"]>
    composites: {}
  }

  type WhatsappChatGetPayload<S extends boolean | null | undefined | WhatsappChatDefaultArgs> = $Result.GetResult<Prisma.$WhatsappChatPayload, S>

  type WhatsappChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsappChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsappChatCountAggregateInputType | true
    }

  export interface WhatsappChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsappChat'], meta: { name: 'WhatsappChat' } }
    /**
     * Find zero or one WhatsappChat that matches the filter.
     * @param {WhatsappChatFindUniqueArgs} args - Arguments to find a WhatsappChat
     * @example
     * // Get one WhatsappChat
     * const whatsappChat = await prisma.whatsappChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsappChatFindUniqueArgs>(args: SelectSubset<T, WhatsappChatFindUniqueArgs<ExtArgs>>): Prisma__WhatsappChatClient<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsappChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsappChatFindUniqueOrThrowArgs} args - Arguments to find a WhatsappChat
     * @example
     * // Get one WhatsappChat
     * const whatsappChat = await prisma.whatsappChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsappChatFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsappChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsappChatClient<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappChatFindFirstArgs} args - Arguments to find a WhatsappChat
     * @example
     * // Get one WhatsappChat
     * const whatsappChat = await prisma.whatsappChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsappChatFindFirstArgs>(args?: SelectSubset<T, WhatsappChatFindFirstArgs<ExtArgs>>): Prisma__WhatsappChatClient<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappChatFindFirstOrThrowArgs} args - Arguments to find a WhatsappChat
     * @example
     * // Get one WhatsappChat
     * const whatsappChat = await prisma.whatsappChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsappChatFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsappChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsappChatClient<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsappChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsappChats
     * const whatsappChats = await prisma.whatsappChat.findMany()
     * 
     * // Get first 10 WhatsappChats
     * const whatsappChats = await prisma.whatsappChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsappChatWithIdOnly = await prisma.whatsappChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsappChatFindManyArgs>(args?: SelectSubset<T, WhatsappChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsappChat.
     * @param {WhatsappChatCreateArgs} args - Arguments to create a WhatsappChat.
     * @example
     * // Create one WhatsappChat
     * const WhatsappChat = await prisma.whatsappChat.create({
     *   data: {
     *     // ... data to create a WhatsappChat
     *   }
     * })
     * 
     */
    create<T extends WhatsappChatCreateArgs>(args: SelectSubset<T, WhatsappChatCreateArgs<ExtArgs>>): Prisma__WhatsappChatClient<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsappChats.
     * @param {WhatsappChatCreateManyArgs} args - Arguments to create many WhatsappChats.
     * @example
     * // Create many WhatsappChats
     * const whatsappChat = await prisma.whatsappChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsappChatCreateManyArgs>(args?: SelectSubset<T, WhatsappChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhatsappChats and returns the data saved in the database.
     * @param {WhatsappChatCreateManyAndReturnArgs} args - Arguments to create many WhatsappChats.
     * @example
     * // Create many WhatsappChats
     * const whatsappChat = await prisma.whatsappChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhatsappChats and only return the `id`
     * const whatsappChatWithIdOnly = await prisma.whatsappChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhatsappChatCreateManyAndReturnArgs>(args?: SelectSubset<T, WhatsappChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WhatsappChat.
     * @param {WhatsappChatDeleteArgs} args - Arguments to delete one WhatsappChat.
     * @example
     * // Delete one WhatsappChat
     * const WhatsappChat = await prisma.whatsappChat.delete({
     *   where: {
     *     // ... filter to delete one WhatsappChat
     *   }
     * })
     * 
     */
    delete<T extends WhatsappChatDeleteArgs>(args: SelectSubset<T, WhatsappChatDeleteArgs<ExtArgs>>): Prisma__WhatsappChatClient<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsappChat.
     * @param {WhatsappChatUpdateArgs} args - Arguments to update one WhatsappChat.
     * @example
     * // Update one WhatsappChat
     * const whatsappChat = await prisma.whatsappChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsappChatUpdateArgs>(args: SelectSubset<T, WhatsappChatUpdateArgs<ExtArgs>>): Prisma__WhatsappChatClient<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsappChats.
     * @param {WhatsappChatDeleteManyArgs} args - Arguments to filter WhatsappChats to delete.
     * @example
     * // Delete a few WhatsappChats
     * const { count } = await prisma.whatsappChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsappChatDeleteManyArgs>(args?: SelectSubset<T, WhatsappChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsappChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsappChats
     * const whatsappChat = await prisma.whatsappChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsappChatUpdateManyArgs>(args: SelectSubset<T, WhatsappChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsappChats and returns the data updated in the database.
     * @param {WhatsappChatUpdateManyAndReturnArgs} args - Arguments to update many WhatsappChats.
     * @example
     * // Update many WhatsappChats
     * const whatsappChat = await prisma.whatsappChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhatsappChats and only return the `id`
     * const whatsappChatWithIdOnly = await prisma.whatsappChat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WhatsappChatUpdateManyAndReturnArgs>(args: SelectSubset<T, WhatsappChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WhatsappChat.
     * @param {WhatsappChatUpsertArgs} args - Arguments to update or create a WhatsappChat.
     * @example
     * // Update or create a WhatsappChat
     * const whatsappChat = await prisma.whatsappChat.upsert({
     *   create: {
     *     // ... data to create a WhatsappChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsappChat we want to update
     *   }
     * })
     */
    upsert<T extends WhatsappChatUpsertArgs>(args: SelectSubset<T, WhatsappChatUpsertArgs<ExtArgs>>): Prisma__WhatsappChatClient<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsappChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappChatCountArgs} args - Arguments to filter WhatsappChats to count.
     * @example
     * // Count the number of WhatsappChats
     * const count = await prisma.whatsappChat.count({
     *   where: {
     *     // ... the filter for the WhatsappChats we want to count
     *   }
     * })
    **/
    count<T extends WhatsappChatCountArgs>(
      args?: Subset<T, WhatsappChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsappChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsappChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsappChatAggregateArgs>(args: Subset<T, WhatsappChatAggregateArgs>): Prisma.PrismaPromise<GetWhatsappChatAggregateType<T>>

    /**
     * Group by WhatsappChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsappChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsappChatGroupByArgs['orderBy'] }
        : { orderBy?: WhatsappChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsappChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsappChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsappChat model
   */
  readonly fields: WhatsappChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsappChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsappChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends WhatsappSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsappSessionDefaultArgs<ExtArgs>>): Prisma__WhatsappSessionClient<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends WhatsappChat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, WhatsappChat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsappChat model
   */
  interface WhatsappChatFieldRefs {
    readonly id: FieldRef<"WhatsappChat", 'String'>
    readonly sessionId: FieldRef<"WhatsappChat", 'String'>
    readonly chatId: FieldRef<"WhatsappChat", 'String'>
    readonly name: FieldRef<"WhatsappChat", 'String'>
    readonly isGroup: FieldRef<"WhatsappChat", 'Boolean'>
    readonly unreadCount: FieldRef<"WhatsappChat", 'Int'>
    readonly createdAt: FieldRef<"WhatsappChat", 'DateTime'>
    readonly updatedAt: FieldRef<"WhatsappChat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsappChat findUnique
   */
  export type WhatsappChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappChat to fetch.
     */
    where: WhatsappChatWhereUniqueInput
  }

  /**
   * WhatsappChat findUniqueOrThrow
   */
  export type WhatsappChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappChat to fetch.
     */
    where: WhatsappChatWhereUniqueInput
  }

  /**
   * WhatsappChat findFirst
   */
  export type WhatsappChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappChat to fetch.
     */
    where?: WhatsappChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappChats to fetch.
     */
    orderBy?: WhatsappChatOrderByWithRelationInput | WhatsappChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappChats.
     */
    cursor?: WhatsappChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappChats.
     */
    distinct?: WhatsappChatScalarFieldEnum | WhatsappChatScalarFieldEnum[]
  }

  /**
   * WhatsappChat findFirstOrThrow
   */
  export type WhatsappChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappChat to fetch.
     */
    where?: WhatsappChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappChats to fetch.
     */
    orderBy?: WhatsappChatOrderByWithRelationInput | WhatsappChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappChats.
     */
    cursor?: WhatsappChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappChats.
     */
    distinct?: WhatsappChatScalarFieldEnum | WhatsappChatScalarFieldEnum[]
  }

  /**
   * WhatsappChat findMany
   */
  export type WhatsappChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappChats to fetch.
     */
    where?: WhatsappChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappChats to fetch.
     */
    orderBy?: WhatsappChatOrderByWithRelationInput | WhatsappChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsappChats.
     */
    cursor?: WhatsappChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappChats.
     */
    skip?: number
    distinct?: WhatsappChatScalarFieldEnum | WhatsappChatScalarFieldEnum[]
  }

  /**
   * WhatsappChat create
   */
  export type WhatsappChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsappChat.
     */
    data: XOR<WhatsappChatCreateInput, WhatsappChatUncheckedCreateInput>
  }

  /**
   * WhatsappChat createMany
   */
  export type WhatsappChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsappChats.
     */
    data: WhatsappChatCreateManyInput | WhatsappChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsappChat createManyAndReturn
   */
  export type WhatsappChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * The data used to create many WhatsappChats.
     */
    data: WhatsappChatCreateManyInput | WhatsappChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsappChat update
   */
  export type WhatsappChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsappChat.
     */
    data: XOR<WhatsappChatUpdateInput, WhatsappChatUncheckedUpdateInput>
    /**
     * Choose, which WhatsappChat to update.
     */
    where: WhatsappChatWhereUniqueInput
  }

  /**
   * WhatsappChat updateMany
   */
  export type WhatsappChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsappChats.
     */
    data: XOR<WhatsappChatUpdateManyMutationInput, WhatsappChatUncheckedUpdateManyInput>
    /**
     * Filter which WhatsappChats to update
     */
    where?: WhatsappChatWhereInput
    /**
     * Limit how many WhatsappChats to update.
     */
    limit?: number
  }

  /**
   * WhatsappChat updateManyAndReturn
   */
  export type WhatsappChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * The data used to update WhatsappChats.
     */
    data: XOR<WhatsappChatUpdateManyMutationInput, WhatsappChatUncheckedUpdateManyInput>
    /**
     * Filter which WhatsappChats to update
     */
    where?: WhatsappChatWhereInput
    /**
     * Limit how many WhatsappChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsappChat upsert
   */
  export type WhatsappChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsappChat to update in case it exists.
     */
    where: WhatsappChatWhereUniqueInput
    /**
     * In case the WhatsappChat found by the `where` argument doesn't exist, create a new WhatsappChat with this data.
     */
    create: XOR<WhatsappChatCreateInput, WhatsappChatUncheckedCreateInput>
    /**
     * In case the WhatsappChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsappChatUpdateInput, WhatsappChatUncheckedUpdateInput>
  }

  /**
   * WhatsappChat delete
   */
  export type WhatsappChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatInclude<ExtArgs> | null
    /**
     * Filter which WhatsappChat to delete.
     */
    where: WhatsappChatWhereUniqueInput
  }

  /**
   * WhatsappChat deleteMany
   */
  export type WhatsappChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappChats to delete
     */
    where?: WhatsappChatWhereInput
    /**
     * Limit how many WhatsappChats to delete.
     */
    limit?: number
  }

  /**
   * WhatsappChat.messages
   */
  export type WhatsappChat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageInclude<ExtArgs> | null
    where?: WhatsappMessageWhereInput
    orderBy?: WhatsappMessageOrderByWithRelationInput | WhatsappMessageOrderByWithRelationInput[]
    cursor?: WhatsappMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsappMessageScalarFieldEnum | WhatsappMessageScalarFieldEnum[]
  }

  /**
   * WhatsappChat without action
   */
  export type WhatsappChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappChat
     */
    select?: WhatsappChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappChat
     */
    omit?: WhatsappChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappChatInclude<ExtArgs> | null
  }


  /**
   * Model WhatsappMessage
   */

  export type AggregateWhatsappMessage = {
    _count: WhatsappMessageCountAggregateOutputType | null
    _avg: WhatsappMessageAvgAggregateOutputType | null
    _sum: WhatsappMessageSumAggregateOutputType | null
    _min: WhatsappMessageMinAggregateOutputType | null
    _max: WhatsappMessageMaxAggregateOutputType | null
  }

  export type WhatsappMessageAvgAggregateOutputType = {
    timestamp: number | null
  }

  export type WhatsappMessageSumAggregateOutputType = {
    timestamp: bigint | null
  }

  export type WhatsappMessageMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    chatId: string | null
    messageId: string | null
    fromMe: boolean | null
    senderId: string | null
    messageType: string | null
    text: string | null
    caption: string | null
    mediaPath: string | null
    timestamp: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsappMessageMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    chatId: string | null
    messageId: string | null
    fromMe: boolean | null
    senderId: string | null
    messageType: string | null
    text: string | null
    caption: string | null
    mediaPath: string | null
    timestamp: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsappMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    chatId: number
    messageId: number
    fromMe: number
    senderId: number
    messageType: number
    text: number
    caption: number
    mediaPath: number
    timestamp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WhatsappMessageAvgAggregateInputType = {
    timestamp?: true
  }

  export type WhatsappMessageSumAggregateInputType = {
    timestamp?: true
  }

  export type WhatsappMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    chatId?: true
    messageId?: true
    fromMe?: true
    senderId?: true
    messageType?: true
    text?: true
    caption?: true
    mediaPath?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsappMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    chatId?: true
    messageId?: true
    fromMe?: true
    senderId?: true
    messageType?: true
    text?: true
    caption?: true
    mediaPath?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsappMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    chatId?: true
    messageId?: true
    fromMe?: true
    senderId?: true
    messageType?: true
    text?: true
    caption?: true
    mediaPath?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WhatsappMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappMessage to aggregate.
     */
    where?: WhatsappMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappMessages to fetch.
     */
    orderBy?: WhatsappMessageOrderByWithRelationInput | WhatsappMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsappMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsappMessages
    **/
    _count?: true | WhatsappMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhatsappMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhatsappMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsappMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsappMessageMaxAggregateInputType
  }

  export type GetWhatsappMessageAggregateType<T extends WhatsappMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsappMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsappMessage[P]>
      : GetScalarType<T[P], AggregateWhatsappMessage[P]>
  }




  export type WhatsappMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappMessageWhereInput
    orderBy?: WhatsappMessageOrderByWithAggregationInput | WhatsappMessageOrderByWithAggregationInput[]
    by: WhatsappMessageScalarFieldEnum[] | WhatsappMessageScalarFieldEnum
    having?: WhatsappMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsappMessageCountAggregateInputType | true
    _avg?: WhatsappMessageAvgAggregateInputType
    _sum?: WhatsappMessageSumAggregateInputType
    _min?: WhatsappMessageMinAggregateInputType
    _max?: WhatsappMessageMaxAggregateInputType
  }

  export type WhatsappMessageGroupByOutputType = {
    id: string
    sessionId: string
    chatId: string
    messageId: string
    fromMe: boolean
    senderId: string | null
    messageType: string | null
    text: string | null
    caption: string | null
    mediaPath: string | null
    timestamp: bigint
    createdAt: Date
    updatedAt: Date
    _count: WhatsappMessageCountAggregateOutputType | null
    _avg: WhatsappMessageAvgAggregateOutputType | null
    _sum: WhatsappMessageSumAggregateOutputType | null
    _min: WhatsappMessageMinAggregateOutputType | null
    _max: WhatsappMessageMaxAggregateOutputType | null
  }

  type GetWhatsappMessageGroupByPayload<T extends WhatsappMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsappMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsappMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsappMessageGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsappMessageGroupByOutputType[P]>
        }
      >
    >


  export type WhatsappMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    chatId?: boolean
    messageId?: boolean
    fromMe?: boolean
    senderId?: boolean
    messageType?: boolean
    text?: boolean
    caption?: boolean
    mediaPath?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | WhatsappSessionDefaultArgs<ExtArgs>
    chat?: boolean | WhatsappChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappMessage"]>

  export type WhatsappMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    chatId?: boolean
    messageId?: boolean
    fromMe?: boolean
    senderId?: boolean
    messageType?: boolean
    text?: boolean
    caption?: boolean
    mediaPath?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | WhatsappSessionDefaultArgs<ExtArgs>
    chat?: boolean | WhatsappChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappMessage"]>

  export type WhatsappMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    chatId?: boolean
    messageId?: boolean
    fromMe?: boolean
    senderId?: boolean
    messageType?: boolean
    text?: boolean
    caption?: boolean
    mediaPath?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | WhatsappSessionDefaultArgs<ExtArgs>
    chat?: boolean | WhatsappChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappMessage"]>

  export type WhatsappMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    chatId?: boolean
    messageId?: boolean
    fromMe?: boolean
    senderId?: boolean
    messageType?: boolean
    text?: boolean
    caption?: boolean
    mediaPath?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WhatsappMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "chatId" | "messageId" | "fromMe" | "senderId" | "messageType" | "text" | "caption" | "mediaPath" | "timestamp" | "createdAt" | "updatedAt", ExtArgs["result"]["whatsappMessage"]>
  export type WhatsappMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WhatsappSessionDefaultArgs<ExtArgs>
    chat?: boolean | WhatsappChatDefaultArgs<ExtArgs>
  }
  export type WhatsappMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WhatsappSessionDefaultArgs<ExtArgs>
    chat?: boolean | WhatsappChatDefaultArgs<ExtArgs>
  }
  export type WhatsappMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | WhatsappSessionDefaultArgs<ExtArgs>
    chat?: boolean | WhatsappChatDefaultArgs<ExtArgs>
  }

  export type $WhatsappMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsappMessage"
    objects: {
      session: Prisma.$WhatsappSessionPayload<ExtArgs>
      chat: Prisma.$WhatsappChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      chatId: string
      messageId: string
      fromMe: boolean
      senderId: string | null
      messageType: string | null
      text: string | null
      caption: string | null
      mediaPath: string | null
      timestamp: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["whatsappMessage"]>
    composites: {}
  }

  type WhatsappMessageGetPayload<S extends boolean | null | undefined | WhatsappMessageDefaultArgs> = $Result.GetResult<Prisma.$WhatsappMessagePayload, S>

  type WhatsappMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsappMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsappMessageCountAggregateInputType | true
    }

  export interface WhatsappMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsappMessage'], meta: { name: 'WhatsappMessage' } }
    /**
     * Find zero or one WhatsappMessage that matches the filter.
     * @param {WhatsappMessageFindUniqueArgs} args - Arguments to find a WhatsappMessage
     * @example
     * // Get one WhatsappMessage
     * const whatsappMessage = await prisma.whatsappMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsappMessageFindUniqueArgs>(args: SelectSubset<T, WhatsappMessageFindUniqueArgs<ExtArgs>>): Prisma__WhatsappMessageClient<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsappMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsappMessageFindUniqueOrThrowArgs} args - Arguments to find a WhatsappMessage
     * @example
     * // Get one WhatsappMessage
     * const whatsappMessage = await prisma.whatsappMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsappMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsappMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsappMessageClient<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappMessageFindFirstArgs} args - Arguments to find a WhatsappMessage
     * @example
     * // Get one WhatsappMessage
     * const whatsappMessage = await prisma.whatsappMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsappMessageFindFirstArgs>(args?: SelectSubset<T, WhatsappMessageFindFirstArgs<ExtArgs>>): Prisma__WhatsappMessageClient<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappMessageFindFirstOrThrowArgs} args - Arguments to find a WhatsappMessage
     * @example
     * // Get one WhatsappMessage
     * const whatsappMessage = await prisma.whatsappMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsappMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsappMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsappMessageClient<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsappMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsappMessages
     * const whatsappMessages = await prisma.whatsappMessage.findMany()
     * 
     * // Get first 10 WhatsappMessages
     * const whatsappMessages = await prisma.whatsappMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsappMessageWithIdOnly = await prisma.whatsappMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsappMessageFindManyArgs>(args?: SelectSubset<T, WhatsappMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsappMessage.
     * @param {WhatsappMessageCreateArgs} args - Arguments to create a WhatsappMessage.
     * @example
     * // Create one WhatsappMessage
     * const WhatsappMessage = await prisma.whatsappMessage.create({
     *   data: {
     *     // ... data to create a WhatsappMessage
     *   }
     * })
     * 
     */
    create<T extends WhatsappMessageCreateArgs>(args: SelectSubset<T, WhatsappMessageCreateArgs<ExtArgs>>): Prisma__WhatsappMessageClient<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsappMessages.
     * @param {WhatsappMessageCreateManyArgs} args - Arguments to create many WhatsappMessages.
     * @example
     * // Create many WhatsappMessages
     * const whatsappMessage = await prisma.whatsappMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsappMessageCreateManyArgs>(args?: SelectSubset<T, WhatsappMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhatsappMessages and returns the data saved in the database.
     * @param {WhatsappMessageCreateManyAndReturnArgs} args - Arguments to create many WhatsappMessages.
     * @example
     * // Create many WhatsappMessages
     * const whatsappMessage = await prisma.whatsappMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhatsappMessages and only return the `id`
     * const whatsappMessageWithIdOnly = await prisma.whatsappMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhatsappMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, WhatsappMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WhatsappMessage.
     * @param {WhatsappMessageDeleteArgs} args - Arguments to delete one WhatsappMessage.
     * @example
     * // Delete one WhatsappMessage
     * const WhatsappMessage = await prisma.whatsappMessage.delete({
     *   where: {
     *     // ... filter to delete one WhatsappMessage
     *   }
     * })
     * 
     */
    delete<T extends WhatsappMessageDeleteArgs>(args: SelectSubset<T, WhatsappMessageDeleteArgs<ExtArgs>>): Prisma__WhatsappMessageClient<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsappMessage.
     * @param {WhatsappMessageUpdateArgs} args - Arguments to update one WhatsappMessage.
     * @example
     * // Update one WhatsappMessage
     * const whatsappMessage = await prisma.whatsappMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsappMessageUpdateArgs>(args: SelectSubset<T, WhatsappMessageUpdateArgs<ExtArgs>>): Prisma__WhatsappMessageClient<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsappMessages.
     * @param {WhatsappMessageDeleteManyArgs} args - Arguments to filter WhatsappMessages to delete.
     * @example
     * // Delete a few WhatsappMessages
     * const { count } = await prisma.whatsappMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsappMessageDeleteManyArgs>(args?: SelectSubset<T, WhatsappMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsappMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsappMessages
     * const whatsappMessage = await prisma.whatsappMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsappMessageUpdateManyArgs>(args: SelectSubset<T, WhatsappMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsappMessages and returns the data updated in the database.
     * @param {WhatsappMessageUpdateManyAndReturnArgs} args - Arguments to update many WhatsappMessages.
     * @example
     * // Update many WhatsappMessages
     * const whatsappMessage = await prisma.whatsappMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhatsappMessages and only return the `id`
     * const whatsappMessageWithIdOnly = await prisma.whatsappMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WhatsappMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, WhatsappMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WhatsappMessage.
     * @param {WhatsappMessageUpsertArgs} args - Arguments to update or create a WhatsappMessage.
     * @example
     * // Update or create a WhatsappMessage
     * const whatsappMessage = await prisma.whatsappMessage.upsert({
     *   create: {
     *     // ... data to create a WhatsappMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsappMessage we want to update
     *   }
     * })
     */
    upsert<T extends WhatsappMessageUpsertArgs>(args: SelectSubset<T, WhatsappMessageUpsertArgs<ExtArgs>>): Prisma__WhatsappMessageClient<$Result.GetResult<Prisma.$WhatsappMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsappMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappMessageCountArgs} args - Arguments to filter WhatsappMessages to count.
     * @example
     * // Count the number of WhatsappMessages
     * const count = await prisma.whatsappMessage.count({
     *   where: {
     *     // ... the filter for the WhatsappMessages we want to count
     *   }
     * })
    **/
    count<T extends WhatsappMessageCountArgs>(
      args?: Subset<T, WhatsappMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsappMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsappMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsappMessageAggregateArgs>(args: Subset<T, WhatsappMessageAggregateArgs>): Prisma.PrismaPromise<GetWhatsappMessageAggregateType<T>>

    /**
     * Group by WhatsappMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsappMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsappMessageGroupByArgs['orderBy'] }
        : { orderBy?: WhatsappMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsappMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsappMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsappMessage model
   */
  readonly fields: WhatsappMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsappMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsappMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends WhatsappSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsappSessionDefaultArgs<ExtArgs>>): Prisma__WhatsappSessionClient<$Result.GetResult<Prisma.$WhatsappSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends WhatsappChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsappChatDefaultArgs<ExtArgs>>): Prisma__WhatsappChatClient<$Result.GetResult<Prisma.$WhatsappChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsappMessage model
   */
  interface WhatsappMessageFieldRefs {
    readonly id: FieldRef<"WhatsappMessage", 'String'>
    readonly sessionId: FieldRef<"WhatsappMessage", 'String'>
    readonly chatId: FieldRef<"WhatsappMessage", 'String'>
    readonly messageId: FieldRef<"WhatsappMessage", 'String'>
    readonly fromMe: FieldRef<"WhatsappMessage", 'Boolean'>
    readonly senderId: FieldRef<"WhatsappMessage", 'String'>
    readonly messageType: FieldRef<"WhatsappMessage", 'String'>
    readonly text: FieldRef<"WhatsappMessage", 'String'>
    readonly caption: FieldRef<"WhatsappMessage", 'String'>
    readonly mediaPath: FieldRef<"WhatsappMessage", 'String'>
    readonly timestamp: FieldRef<"WhatsappMessage", 'BigInt'>
    readonly createdAt: FieldRef<"WhatsappMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"WhatsappMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsappMessage findUnique
   */
  export type WhatsappMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappMessage to fetch.
     */
    where: WhatsappMessageWhereUniqueInput
  }

  /**
   * WhatsappMessage findUniqueOrThrow
   */
  export type WhatsappMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappMessage to fetch.
     */
    where: WhatsappMessageWhereUniqueInput
  }

  /**
   * WhatsappMessage findFirst
   */
  export type WhatsappMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappMessage to fetch.
     */
    where?: WhatsappMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappMessages to fetch.
     */
    orderBy?: WhatsappMessageOrderByWithRelationInput | WhatsappMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappMessages.
     */
    cursor?: WhatsappMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappMessages.
     */
    distinct?: WhatsappMessageScalarFieldEnum | WhatsappMessageScalarFieldEnum[]
  }

  /**
   * WhatsappMessage findFirstOrThrow
   */
  export type WhatsappMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappMessage to fetch.
     */
    where?: WhatsappMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappMessages to fetch.
     */
    orderBy?: WhatsappMessageOrderByWithRelationInput | WhatsappMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappMessages.
     */
    cursor?: WhatsappMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappMessages.
     */
    distinct?: WhatsappMessageScalarFieldEnum | WhatsappMessageScalarFieldEnum[]
  }

  /**
   * WhatsappMessage findMany
   */
  export type WhatsappMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappMessages to fetch.
     */
    where?: WhatsappMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappMessages to fetch.
     */
    orderBy?: WhatsappMessageOrderByWithRelationInput | WhatsappMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsappMessages.
     */
    cursor?: WhatsappMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappMessages.
     */
    skip?: number
    distinct?: WhatsappMessageScalarFieldEnum | WhatsappMessageScalarFieldEnum[]
  }

  /**
   * WhatsappMessage create
   */
  export type WhatsappMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsappMessage.
     */
    data: XOR<WhatsappMessageCreateInput, WhatsappMessageUncheckedCreateInput>
  }

  /**
   * WhatsappMessage createMany
   */
  export type WhatsappMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsappMessages.
     */
    data: WhatsappMessageCreateManyInput | WhatsappMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsappMessage createManyAndReturn
   */
  export type WhatsappMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * The data used to create many WhatsappMessages.
     */
    data: WhatsappMessageCreateManyInput | WhatsappMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsappMessage update
   */
  export type WhatsappMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsappMessage.
     */
    data: XOR<WhatsappMessageUpdateInput, WhatsappMessageUncheckedUpdateInput>
    /**
     * Choose, which WhatsappMessage to update.
     */
    where: WhatsappMessageWhereUniqueInput
  }

  /**
   * WhatsappMessage updateMany
   */
  export type WhatsappMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsappMessages.
     */
    data: XOR<WhatsappMessageUpdateManyMutationInput, WhatsappMessageUncheckedUpdateManyInput>
    /**
     * Filter which WhatsappMessages to update
     */
    where?: WhatsappMessageWhereInput
    /**
     * Limit how many WhatsappMessages to update.
     */
    limit?: number
  }

  /**
   * WhatsappMessage updateManyAndReturn
   */
  export type WhatsappMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * The data used to update WhatsappMessages.
     */
    data: XOR<WhatsappMessageUpdateManyMutationInput, WhatsappMessageUncheckedUpdateManyInput>
    /**
     * Filter which WhatsappMessages to update
     */
    where?: WhatsappMessageWhereInput
    /**
     * Limit how many WhatsappMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsappMessage upsert
   */
  export type WhatsappMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsappMessage to update in case it exists.
     */
    where: WhatsappMessageWhereUniqueInput
    /**
     * In case the WhatsappMessage found by the `where` argument doesn't exist, create a new WhatsappMessage with this data.
     */
    create: XOR<WhatsappMessageCreateInput, WhatsappMessageUncheckedCreateInput>
    /**
     * In case the WhatsappMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsappMessageUpdateInput, WhatsappMessageUncheckedUpdateInput>
  }

  /**
   * WhatsappMessage delete
   */
  export type WhatsappMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageInclude<ExtArgs> | null
    /**
     * Filter which WhatsappMessage to delete.
     */
    where: WhatsappMessageWhereUniqueInput
  }

  /**
   * WhatsappMessage deleteMany
   */
  export type WhatsappMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappMessages to delete
     */
    where?: WhatsappMessageWhereInput
    /**
     * Limit how many WhatsappMessages to delete.
     */
    limit?: number
  }

  /**
   * WhatsappMessage without action
   */
  export type WhatsappMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappMessage
     */
    select?: WhatsappMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappMessage
     */
    omit?: WhatsappMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WhatsappSessionScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    status: 'status',
    lastConnectedAt: 'lastConnectedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WhatsappSessionScalarFieldEnum = (typeof WhatsappSessionScalarFieldEnum)[keyof typeof WhatsappSessionScalarFieldEnum]


  export const WhatsappChatScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    chatId: 'chatId',
    name: 'name',
    isGroup: 'isGroup',
    unreadCount: 'unreadCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WhatsappChatScalarFieldEnum = (typeof WhatsappChatScalarFieldEnum)[keyof typeof WhatsappChatScalarFieldEnum]


  export const WhatsappMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    chatId: 'chatId',
    messageId: 'messageId',
    fromMe: 'fromMe',
    senderId: 'senderId',
    messageType: 'messageType',
    text: 'text',
    caption: 'caption',
    mediaPath: 'mediaPath',
    timestamp: 'timestamp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WhatsappMessageScalarFieldEnum = (typeof WhatsappMessageScalarFieldEnum)[keyof typeof WhatsappMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WhatsappSessionWhereInput = {
    AND?: WhatsappSessionWhereInput | WhatsappSessionWhereInput[]
    OR?: WhatsappSessionWhereInput[]
    NOT?: WhatsappSessionWhereInput | WhatsappSessionWhereInput[]
    id?: StringFilter<"WhatsappSession"> | string
    phoneNumber?: StringFilter<"WhatsappSession"> | string
    status?: EnumSessionStatusFilter<"WhatsappSession"> | $Enums.SessionStatus
    lastConnectedAt?: DateTimeNullableFilter<"WhatsappSession"> | Date | string | null
    createdAt?: DateTimeFilter<"WhatsappSession"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappSession"> | Date | string
    chats?: WhatsappChatListRelationFilter
    messages?: WhatsappMessageListRelationFilter
  }

  export type WhatsappSessionOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    lastConnectedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chats?: WhatsappChatOrderByRelationAggregateInput
    messages?: WhatsappMessageOrderByRelationAggregateInput
  }

  export type WhatsappSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    AND?: WhatsappSessionWhereInput | WhatsappSessionWhereInput[]
    OR?: WhatsappSessionWhereInput[]
    NOT?: WhatsappSessionWhereInput | WhatsappSessionWhereInput[]
    status?: EnumSessionStatusFilter<"WhatsappSession"> | $Enums.SessionStatus
    lastConnectedAt?: DateTimeNullableFilter<"WhatsappSession"> | Date | string | null
    createdAt?: DateTimeFilter<"WhatsappSession"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappSession"> | Date | string
    chats?: WhatsappChatListRelationFilter
    messages?: WhatsappMessageListRelationFilter
  }, "id" | "phoneNumber">

  export type WhatsappSessionOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    lastConnectedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WhatsappSessionCountOrderByAggregateInput
    _max?: WhatsappSessionMaxOrderByAggregateInput
    _min?: WhatsappSessionMinOrderByAggregateInput
  }

  export type WhatsappSessionScalarWhereWithAggregatesInput = {
    AND?: WhatsappSessionScalarWhereWithAggregatesInput | WhatsappSessionScalarWhereWithAggregatesInput[]
    OR?: WhatsappSessionScalarWhereWithAggregatesInput[]
    NOT?: WhatsappSessionScalarWhereWithAggregatesInput | WhatsappSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsappSession"> | string
    phoneNumber?: StringWithAggregatesFilter<"WhatsappSession"> | string
    status?: EnumSessionStatusWithAggregatesFilter<"WhatsappSession"> | $Enums.SessionStatus
    lastConnectedAt?: DateTimeNullableWithAggregatesFilter<"WhatsappSession"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WhatsappSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhatsappSession"> | Date | string
  }

  export type WhatsappChatWhereInput = {
    AND?: WhatsappChatWhereInput | WhatsappChatWhereInput[]
    OR?: WhatsappChatWhereInput[]
    NOT?: WhatsappChatWhereInput | WhatsappChatWhereInput[]
    id?: StringFilter<"WhatsappChat"> | string
    sessionId?: StringFilter<"WhatsappChat"> | string
    chatId?: StringFilter<"WhatsappChat"> | string
    name?: StringFilter<"WhatsappChat"> | string
    isGroup?: BoolFilter<"WhatsappChat"> | boolean
    unreadCount?: IntFilter<"WhatsappChat"> | number
    createdAt?: DateTimeFilter<"WhatsappChat"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappChat"> | Date | string
    session?: XOR<WhatsappSessionScalarRelationFilter, WhatsappSessionWhereInput>
    messages?: WhatsappMessageListRelationFilter
  }

  export type WhatsappChatOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    chatId?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: WhatsappSessionOrderByWithRelationInput
    messages?: WhatsappMessageOrderByRelationAggregateInput
  }

  export type WhatsappChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId_chatId?: WhatsappChatSessionIdChatIdCompoundUniqueInput
    AND?: WhatsappChatWhereInput | WhatsappChatWhereInput[]
    OR?: WhatsappChatWhereInput[]
    NOT?: WhatsappChatWhereInput | WhatsappChatWhereInput[]
    sessionId?: StringFilter<"WhatsappChat"> | string
    chatId?: StringFilter<"WhatsappChat"> | string
    name?: StringFilter<"WhatsappChat"> | string
    isGroup?: BoolFilter<"WhatsappChat"> | boolean
    unreadCount?: IntFilter<"WhatsappChat"> | number
    createdAt?: DateTimeFilter<"WhatsappChat"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappChat"> | Date | string
    session?: XOR<WhatsappSessionScalarRelationFilter, WhatsappSessionWhereInput>
    messages?: WhatsappMessageListRelationFilter
  }, "id" | "sessionId_chatId">

  export type WhatsappChatOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    chatId?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WhatsappChatCountOrderByAggregateInput
    _avg?: WhatsappChatAvgOrderByAggregateInput
    _max?: WhatsappChatMaxOrderByAggregateInput
    _min?: WhatsappChatMinOrderByAggregateInput
    _sum?: WhatsappChatSumOrderByAggregateInput
  }

  export type WhatsappChatScalarWhereWithAggregatesInput = {
    AND?: WhatsappChatScalarWhereWithAggregatesInput | WhatsappChatScalarWhereWithAggregatesInput[]
    OR?: WhatsappChatScalarWhereWithAggregatesInput[]
    NOT?: WhatsappChatScalarWhereWithAggregatesInput | WhatsappChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsappChat"> | string
    sessionId?: StringWithAggregatesFilter<"WhatsappChat"> | string
    chatId?: StringWithAggregatesFilter<"WhatsappChat"> | string
    name?: StringWithAggregatesFilter<"WhatsappChat"> | string
    isGroup?: BoolWithAggregatesFilter<"WhatsappChat"> | boolean
    unreadCount?: IntWithAggregatesFilter<"WhatsappChat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WhatsappChat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhatsappChat"> | Date | string
  }

  export type WhatsappMessageWhereInput = {
    AND?: WhatsappMessageWhereInput | WhatsappMessageWhereInput[]
    OR?: WhatsappMessageWhereInput[]
    NOT?: WhatsappMessageWhereInput | WhatsappMessageWhereInput[]
    id?: StringFilter<"WhatsappMessage"> | string
    sessionId?: StringFilter<"WhatsappMessage"> | string
    chatId?: StringFilter<"WhatsappMessage"> | string
    messageId?: StringFilter<"WhatsappMessage"> | string
    fromMe?: BoolFilter<"WhatsappMessage"> | boolean
    senderId?: StringNullableFilter<"WhatsappMessage"> | string | null
    messageType?: StringNullableFilter<"WhatsappMessage"> | string | null
    text?: StringNullableFilter<"WhatsappMessage"> | string | null
    caption?: StringNullableFilter<"WhatsappMessage"> | string | null
    mediaPath?: StringNullableFilter<"WhatsappMessage"> | string | null
    timestamp?: BigIntFilter<"WhatsappMessage"> | bigint | number
    createdAt?: DateTimeFilter<"WhatsappMessage"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappMessage"> | Date | string
    session?: XOR<WhatsappSessionScalarRelationFilter, WhatsappSessionWhereInput>
    chat?: XOR<WhatsappChatScalarRelationFilter, WhatsappChatWhereInput>
  }

  export type WhatsappMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    fromMe?: SortOrder
    senderId?: SortOrderInput | SortOrder
    messageType?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    mediaPath?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: WhatsappSessionOrderByWithRelationInput
    chat?: WhatsappChatOrderByWithRelationInput
  }

  export type WhatsappMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId_messageId?: WhatsappMessageSessionIdMessageIdCompoundUniqueInput
    AND?: WhatsappMessageWhereInput | WhatsappMessageWhereInput[]
    OR?: WhatsappMessageWhereInput[]
    NOT?: WhatsappMessageWhereInput | WhatsappMessageWhereInput[]
    sessionId?: StringFilter<"WhatsappMessage"> | string
    chatId?: StringFilter<"WhatsappMessage"> | string
    messageId?: StringFilter<"WhatsappMessage"> | string
    fromMe?: BoolFilter<"WhatsappMessage"> | boolean
    senderId?: StringNullableFilter<"WhatsappMessage"> | string | null
    messageType?: StringNullableFilter<"WhatsappMessage"> | string | null
    text?: StringNullableFilter<"WhatsappMessage"> | string | null
    caption?: StringNullableFilter<"WhatsappMessage"> | string | null
    mediaPath?: StringNullableFilter<"WhatsappMessage"> | string | null
    timestamp?: BigIntFilter<"WhatsappMessage"> | bigint | number
    createdAt?: DateTimeFilter<"WhatsappMessage"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappMessage"> | Date | string
    session?: XOR<WhatsappSessionScalarRelationFilter, WhatsappSessionWhereInput>
    chat?: XOR<WhatsappChatScalarRelationFilter, WhatsappChatWhereInput>
  }, "id" | "sessionId_messageId">

  export type WhatsappMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    fromMe?: SortOrder
    senderId?: SortOrderInput | SortOrder
    messageType?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    mediaPath?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WhatsappMessageCountOrderByAggregateInput
    _avg?: WhatsappMessageAvgOrderByAggregateInput
    _max?: WhatsappMessageMaxOrderByAggregateInput
    _min?: WhatsappMessageMinOrderByAggregateInput
    _sum?: WhatsappMessageSumOrderByAggregateInput
  }

  export type WhatsappMessageScalarWhereWithAggregatesInput = {
    AND?: WhatsappMessageScalarWhereWithAggregatesInput | WhatsappMessageScalarWhereWithAggregatesInput[]
    OR?: WhatsappMessageScalarWhereWithAggregatesInput[]
    NOT?: WhatsappMessageScalarWhereWithAggregatesInput | WhatsappMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsappMessage"> | string
    sessionId?: StringWithAggregatesFilter<"WhatsappMessage"> | string
    chatId?: StringWithAggregatesFilter<"WhatsappMessage"> | string
    messageId?: StringWithAggregatesFilter<"WhatsappMessage"> | string
    fromMe?: BoolWithAggregatesFilter<"WhatsappMessage"> | boolean
    senderId?: StringNullableWithAggregatesFilter<"WhatsappMessage"> | string | null
    messageType?: StringNullableWithAggregatesFilter<"WhatsappMessage"> | string | null
    text?: StringNullableWithAggregatesFilter<"WhatsappMessage"> | string | null
    caption?: StringNullableWithAggregatesFilter<"WhatsappMessage"> | string | null
    mediaPath?: StringNullableWithAggregatesFilter<"WhatsappMessage"> | string | null
    timestamp?: BigIntWithAggregatesFilter<"WhatsappMessage"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"WhatsappMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhatsappMessage"> | Date | string
  }

  export type WhatsappSessionCreateInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.SessionStatus
    lastConnectedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: WhatsappChatCreateNestedManyWithoutSessionInput
    messages?: WhatsappMessageCreateNestedManyWithoutSessionInput
  }

  export type WhatsappSessionUncheckedCreateInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.SessionStatus
    lastConnectedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: WhatsappChatUncheckedCreateNestedManyWithoutSessionInput
    messages?: WhatsappMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type WhatsappSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: WhatsappChatUpdateManyWithoutSessionNestedInput
    messages?: WhatsappMessageUpdateManyWithoutSessionNestedInput
  }

  export type WhatsappSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: WhatsappChatUncheckedUpdateManyWithoutSessionNestedInput
    messages?: WhatsappMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type WhatsappSessionCreateManyInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.SessionStatus
    lastConnectedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappChatCreateInput = {
    id?: string
    chatId: string
    name: string
    isGroup: boolean
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    session: WhatsappSessionCreateNestedOneWithoutChatsInput
    messages?: WhatsappMessageCreateNestedManyWithoutChatInput
  }

  export type WhatsappChatUncheckedCreateInput = {
    id?: string
    sessionId: string
    chatId: string
    name: string
    isGroup: boolean
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: WhatsappMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type WhatsappChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: WhatsappSessionUpdateOneRequiredWithoutChatsNestedInput
    messages?: WhatsappMessageUpdateManyWithoutChatNestedInput
  }

  export type WhatsappChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: WhatsappMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type WhatsappChatCreateManyInput = {
    id?: string
    sessionId: string
    chatId: string
    name: string
    isGroup: boolean
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappMessageCreateInput = {
    id?: string
    messageId: string
    fromMe: boolean
    senderId?: string | null
    messageType?: string | null
    text?: string | null
    caption?: string | null
    mediaPath?: string | null
    timestamp: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    session: WhatsappSessionCreateNestedOneWithoutMessagesInput
    chat: WhatsappChatCreateNestedOneWithoutMessagesInput
  }

  export type WhatsappMessageUncheckedCreateInput = {
    id?: string
    sessionId: string
    chatId: string
    messageId: string
    fromMe: boolean
    senderId?: string | null
    messageType?: string | null
    text?: string | null
    caption?: string | null
    mediaPath?: string | null
    timestamp: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mediaPath?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: WhatsappSessionUpdateOneRequiredWithoutMessagesNestedInput
    chat?: WhatsappChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type WhatsappMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mediaPath?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappMessageCreateManyInput = {
    id?: string
    sessionId: string
    chatId: string
    messageId: string
    fromMe: boolean
    senderId?: string | null
    messageType?: string | null
    text?: string | null
    caption?: string | null
    mediaPath?: string | null
    timestamp: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mediaPath?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mediaPath?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WhatsappChatListRelationFilter = {
    every?: WhatsappChatWhereInput
    some?: WhatsappChatWhereInput
    none?: WhatsappChatWhereInput
  }

  export type WhatsappMessageListRelationFilter = {
    every?: WhatsappMessageWhereInput
    some?: WhatsappMessageWhereInput
    none?: WhatsappMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WhatsappChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsappMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsappSessionCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    lastConnectedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    lastConnectedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappSessionMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    lastConnectedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WhatsappSessionScalarRelationFilter = {
    is?: WhatsappSessionWhereInput
    isNot?: WhatsappSessionWhereInput
  }

  export type WhatsappChatSessionIdChatIdCompoundUniqueInput = {
    sessionId: string
    chatId: string
  }

  export type WhatsappChatCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    chatId?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappChatAvgOrderByAggregateInput = {
    unreadCount?: SortOrder
  }

  export type WhatsappChatMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    chatId?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappChatMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    chatId?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappChatSumOrderByAggregateInput = {
    unreadCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type WhatsappChatScalarRelationFilter = {
    is?: WhatsappChatWhereInput
    isNot?: WhatsappChatWhereInput
  }

  export type WhatsappMessageSessionIdMessageIdCompoundUniqueInput = {
    sessionId: string
    messageId: string
  }

  export type WhatsappMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    fromMe?: SortOrder
    senderId?: SortOrder
    messageType?: SortOrder
    text?: SortOrder
    caption?: SortOrder
    mediaPath?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappMessageAvgOrderByAggregateInput = {
    timestamp?: SortOrder
  }

  export type WhatsappMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    fromMe?: SortOrder
    senderId?: SortOrder
    messageType?: SortOrder
    text?: SortOrder
    caption?: SortOrder
    mediaPath?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    fromMe?: SortOrder
    senderId?: SortOrder
    messageType?: SortOrder
    text?: SortOrder
    caption?: SortOrder
    mediaPath?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappMessageSumOrderByAggregateInput = {
    timestamp?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type WhatsappChatCreateNestedManyWithoutSessionInput = {
    create?: XOR<WhatsappChatCreateWithoutSessionInput, WhatsappChatUncheckedCreateWithoutSessionInput> | WhatsappChatCreateWithoutSessionInput[] | WhatsappChatUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: WhatsappChatCreateOrConnectWithoutSessionInput | WhatsappChatCreateOrConnectWithoutSessionInput[]
    createMany?: WhatsappChatCreateManySessionInputEnvelope
    connect?: WhatsappChatWhereUniqueInput | WhatsappChatWhereUniqueInput[]
  }

  export type WhatsappMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<WhatsappMessageCreateWithoutSessionInput, WhatsappMessageUncheckedCreateWithoutSessionInput> | WhatsappMessageCreateWithoutSessionInput[] | WhatsappMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: WhatsappMessageCreateOrConnectWithoutSessionInput | WhatsappMessageCreateOrConnectWithoutSessionInput[]
    createMany?: WhatsappMessageCreateManySessionInputEnvelope
    connect?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
  }

  export type WhatsappChatUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<WhatsappChatCreateWithoutSessionInput, WhatsappChatUncheckedCreateWithoutSessionInput> | WhatsappChatCreateWithoutSessionInput[] | WhatsappChatUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: WhatsappChatCreateOrConnectWithoutSessionInput | WhatsappChatCreateOrConnectWithoutSessionInput[]
    createMany?: WhatsappChatCreateManySessionInputEnvelope
    connect?: WhatsappChatWhereUniqueInput | WhatsappChatWhereUniqueInput[]
  }

  export type WhatsappMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<WhatsappMessageCreateWithoutSessionInput, WhatsappMessageUncheckedCreateWithoutSessionInput> | WhatsappMessageCreateWithoutSessionInput[] | WhatsappMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: WhatsappMessageCreateOrConnectWithoutSessionInput | WhatsappMessageCreateOrConnectWithoutSessionInput[]
    createMany?: WhatsappMessageCreateManySessionInputEnvelope
    connect?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WhatsappChatUpdateManyWithoutSessionNestedInput = {
    create?: XOR<WhatsappChatCreateWithoutSessionInput, WhatsappChatUncheckedCreateWithoutSessionInput> | WhatsappChatCreateWithoutSessionInput[] | WhatsappChatUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: WhatsappChatCreateOrConnectWithoutSessionInput | WhatsappChatCreateOrConnectWithoutSessionInput[]
    upsert?: WhatsappChatUpsertWithWhereUniqueWithoutSessionInput | WhatsappChatUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: WhatsappChatCreateManySessionInputEnvelope
    set?: WhatsappChatWhereUniqueInput | WhatsappChatWhereUniqueInput[]
    disconnect?: WhatsappChatWhereUniqueInput | WhatsappChatWhereUniqueInput[]
    delete?: WhatsappChatWhereUniqueInput | WhatsappChatWhereUniqueInput[]
    connect?: WhatsappChatWhereUniqueInput | WhatsappChatWhereUniqueInput[]
    update?: WhatsappChatUpdateWithWhereUniqueWithoutSessionInput | WhatsappChatUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: WhatsappChatUpdateManyWithWhereWithoutSessionInput | WhatsappChatUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: WhatsappChatScalarWhereInput | WhatsappChatScalarWhereInput[]
  }

  export type WhatsappMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<WhatsappMessageCreateWithoutSessionInput, WhatsappMessageUncheckedCreateWithoutSessionInput> | WhatsappMessageCreateWithoutSessionInput[] | WhatsappMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: WhatsappMessageCreateOrConnectWithoutSessionInput | WhatsappMessageCreateOrConnectWithoutSessionInput[]
    upsert?: WhatsappMessageUpsertWithWhereUniqueWithoutSessionInput | WhatsappMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: WhatsappMessageCreateManySessionInputEnvelope
    set?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    disconnect?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    delete?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    connect?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    update?: WhatsappMessageUpdateWithWhereUniqueWithoutSessionInput | WhatsappMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: WhatsappMessageUpdateManyWithWhereWithoutSessionInput | WhatsappMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: WhatsappMessageScalarWhereInput | WhatsappMessageScalarWhereInput[]
  }

  export type WhatsappChatUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<WhatsappChatCreateWithoutSessionInput, WhatsappChatUncheckedCreateWithoutSessionInput> | WhatsappChatCreateWithoutSessionInput[] | WhatsappChatUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: WhatsappChatCreateOrConnectWithoutSessionInput | WhatsappChatCreateOrConnectWithoutSessionInput[]
    upsert?: WhatsappChatUpsertWithWhereUniqueWithoutSessionInput | WhatsappChatUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: WhatsappChatCreateManySessionInputEnvelope
    set?: WhatsappChatWhereUniqueInput | WhatsappChatWhereUniqueInput[]
    disconnect?: WhatsappChatWhereUniqueInput | WhatsappChatWhereUniqueInput[]
    delete?: WhatsappChatWhereUniqueInput | WhatsappChatWhereUniqueInput[]
    connect?: WhatsappChatWhereUniqueInput | WhatsappChatWhereUniqueInput[]
    update?: WhatsappChatUpdateWithWhereUniqueWithoutSessionInput | WhatsappChatUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: WhatsappChatUpdateManyWithWhereWithoutSessionInput | WhatsappChatUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: WhatsappChatScalarWhereInput | WhatsappChatScalarWhereInput[]
  }

  export type WhatsappMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<WhatsappMessageCreateWithoutSessionInput, WhatsappMessageUncheckedCreateWithoutSessionInput> | WhatsappMessageCreateWithoutSessionInput[] | WhatsappMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: WhatsappMessageCreateOrConnectWithoutSessionInput | WhatsappMessageCreateOrConnectWithoutSessionInput[]
    upsert?: WhatsappMessageUpsertWithWhereUniqueWithoutSessionInput | WhatsappMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: WhatsappMessageCreateManySessionInputEnvelope
    set?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    disconnect?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    delete?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    connect?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    update?: WhatsappMessageUpdateWithWhereUniqueWithoutSessionInput | WhatsappMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: WhatsappMessageUpdateManyWithWhereWithoutSessionInput | WhatsappMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: WhatsappMessageScalarWhereInput | WhatsappMessageScalarWhereInput[]
  }

  export type WhatsappSessionCreateNestedOneWithoutChatsInput = {
    create?: XOR<WhatsappSessionCreateWithoutChatsInput, WhatsappSessionUncheckedCreateWithoutChatsInput>
    connectOrCreate?: WhatsappSessionCreateOrConnectWithoutChatsInput
    connect?: WhatsappSessionWhereUniqueInput
  }

  export type WhatsappMessageCreateNestedManyWithoutChatInput = {
    create?: XOR<WhatsappMessageCreateWithoutChatInput, WhatsappMessageUncheckedCreateWithoutChatInput> | WhatsappMessageCreateWithoutChatInput[] | WhatsappMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: WhatsappMessageCreateOrConnectWithoutChatInput | WhatsappMessageCreateOrConnectWithoutChatInput[]
    createMany?: WhatsappMessageCreateManyChatInputEnvelope
    connect?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
  }

  export type WhatsappMessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<WhatsappMessageCreateWithoutChatInput, WhatsappMessageUncheckedCreateWithoutChatInput> | WhatsappMessageCreateWithoutChatInput[] | WhatsappMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: WhatsappMessageCreateOrConnectWithoutChatInput | WhatsappMessageCreateOrConnectWithoutChatInput[]
    createMany?: WhatsappMessageCreateManyChatInputEnvelope
    connect?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WhatsappSessionUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<WhatsappSessionCreateWithoutChatsInput, WhatsappSessionUncheckedCreateWithoutChatsInput>
    connectOrCreate?: WhatsappSessionCreateOrConnectWithoutChatsInput
    upsert?: WhatsappSessionUpsertWithoutChatsInput
    connect?: WhatsappSessionWhereUniqueInput
    update?: XOR<XOR<WhatsappSessionUpdateToOneWithWhereWithoutChatsInput, WhatsappSessionUpdateWithoutChatsInput>, WhatsappSessionUncheckedUpdateWithoutChatsInput>
  }

  export type WhatsappMessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<WhatsappMessageCreateWithoutChatInput, WhatsappMessageUncheckedCreateWithoutChatInput> | WhatsappMessageCreateWithoutChatInput[] | WhatsappMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: WhatsappMessageCreateOrConnectWithoutChatInput | WhatsappMessageCreateOrConnectWithoutChatInput[]
    upsert?: WhatsappMessageUpsertWithWhereUniqueWithoutChatInput | WhatsappMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: WhatsappMessageCreateManyChatInputEnvelope
    set?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    disconnect?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    delete?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    connect?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    update?: WhatsappMessageUpdateWithWhereUniqueWithoutChatInput | WhatsappMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: WhatsappMessageUpdateManyWithWhereWithoutChatInput | WhatsappMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: WhatsappMessageScalarWhereInput | WhatsappMessageScalarWhereInput[]
  }

  export type WhatsappMessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<WhatsappMessageCreateWithoutChatInput, WhatsappMessageUncheckedCreateWithoutChatInput> | WhatsappMessageCreateWithoutChatInput[] | WhatsappMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: WhatsappMessageCreateOrConnectWithoutChatInput | WhatsappMessageCreateOrConnectWithoutChatInput[]
    upsert?: WhatsappMessageUpsertWithWhereUniqueWithoutChatInput | WhatsappMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: WhatsappMessageCreateManyChatInputEnvelope
    set?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    disconnect?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    delete?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    connect?: WhatsappMessageWhereUniqueInput | WhatsappMessageWhereUniqueInput[]
    update?: WhatsappMessageUpdateWithWhereUniqueWithoutChatInput | WhatsappMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: WhatsappMessageUpdateManyWithWhereWithoutChatInput | WhatsappMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: WhatsappMessageScalarWhereInput | WhatsappMessageScalarWhereInput[]
  }

  export type WhatsappSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<WhatsappSessionCreateWithoutMessagesInput, WhatsappSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: WhatsappSessionCreateOrConnectWithoutMessagesInput
    connect?: WhatsappSessionWhereUniqueInput
  }

  export type WhatsappChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<WhatsappChatCreateWithoutMessagesInput, WhatsappChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: WhatsappChatCreateOrConnectWithoutMessagesInput
    connect?: WhatsappChatWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type WhatsappSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<WhatsappSessionCreateWithoutMessagesInput, WhatsappSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: WhatsappSessionCreateOrConnectWithoutMessagesInput
    upsert?: WhatsappSessionUpsertWithoutMessagesInput
    connect?: WhatsappSessionWhereUniqueInput
    update?: XOR<XOR<WhatsappSessionUpdateToOneWithWhereWithoutMessagesInput, WhatsappSessionUpdateWithoutMessagesInput>, WhatsappSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type WhatsappChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<WhatsappChatCreateWithoutMessagesInput, WhatsappChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: WhatsappChatCreateOrConnectWithoutMessagesInput
    upsert?: WhatsappChatUpsertWithoutMessagesInput
    connect?: WhatsappChatWhereUniqueInput
    update?: XOR<XOR<WhatsappChatUpdateToOneWithWhereWithoutMessagesInput, WhatsappChatUpdateWithoutMessagesInput>, WhatsappChatUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type WhatsappChatCreateWithoutSessionInput = {
    id?: string
    chatId: string
    name: string
    isGroup: boolean
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: WhatsappMessageCreateNestedManyWithoutChatInput
  }

  export type WhatsappChatUncheckedCreateWithoutSessionInput = {
    id?: string
    chatId: string
    name: string
    isGroup: boolean
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: WhatsappMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type WhatsappChatCreateOrConnectWithoutSessionInput = {
    where: WhatsappChatWhereUniqueInput
    create: XOR<WhatsappChatCreateWithoutSessionInput, WhatsappChatUncheckedCreateWithoutSessionInput>
  }

  export type WhatsappChatCreateManySessionInputEnvelope = {
    data: WhatsappChatCreateManySessionInput | WhatsappChatCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type WhatsappMessageCreateWithoutSessionInput = {
    id?: string
    messageId: string
    fromMe: boolean
    senderId?: string | null
    messageType?: string | null
    text?: string | null
    caption?: string | null
    mediaPath?: string | null
    timestamp: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    chat: WhatsappChatCreateNestedOneWithoutMessagesInput
  }

  export type WhatsappMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    chatId: string
    messageId: string
    fromMe: boolean
    senderId?: string | null
    messageType?: string | null
    text?: string | null
    caption?: string | null
    mediaPath?: string | null
    timestamp: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappMessageCreateOrConnectWithoutSessionInput = {
    where: WhatsappMessageWhereUniqueInput
    create: XOR<WhatsappMessageCreateWithoutSessionInput, WhatsappMessageUncheckedCreateWithoutSessionInput>
  }

  export type WhatsappMessageCreateManySessionInputEnvelope = {
    data: WhatsappMessageCreateManySessionInput | WhatsappMessageCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type WhatsappChatUpsertWithWhereUniqueWithoutSessionInput = {
    where: WhatsappChatWhereUniqueInput
    update: XOR<WhatsappChatUpdateWithoutSessionInput, WhatsappChatUncheckedUpdateWithoutSessionInput>
    create: XOR<WhatsappChatCreateWithoutSessionInput, WhatsappChatUncheckedCreateWithoutSessionInput>
  }

  export type WhatsappChatUpdateWithWhereUniqueWithoutSessionInput = {
    where: WhatsappChatWhereUniqueInput
    data: XOR<WhatsappChatUpdateWithoutSessionInput, WhatsappChatUncheckedUpdateWithoutSessionInput>
  }

  export type WhatsappChatUpdateManyWithWhereWithoutSessionInput = {
    where: WhatsappChatScalarWhereInput
    data: XOR<WhatsappChatUpdateManyMutationInput, WhatsappChatUncheckedUpdateManyWithoutSessionInput>
  }

  export type WhatsappChatScalarWhereInput = {
    AND?: WhatsappChatScalarWhereInput | WhatsappChatScalarWhereInput[]
    OR?: WhatsappChatScalarWhereInput[]
    NOT?: WhatsappChatScalarWhereInput | WhatsappChatScalarWhereInput[]
    id?: StringFilter<"WhatsappChat"> | string
    sessionId?: StringFilter<"WhatsappChat"> | string
    chatId?: StringFilter<"WhatsappChat"> | string
    name?: StringFilter<"WhatsappChat"> | string
    isGroup?: BoolFilter<"WhatsappChat"> | boolean
    unreadCount?: IntFilter<"WhatsappChat"> | number
    createdAt?: DateTimeFilter<"WhatsappChat"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappChat"> | Date | string
  }

  export type WhatsappMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: WhatsappMessageWhereUniqueInput
    update: XOR<WhatsappMessageUpdateWithoutSessionInput, WhatsappMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<WhatsappMessageCreateWithoutSessionInput, WhatsappMessageUncheckedCreateWithoutSessionInput>
  }

  export type WhatsappMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: WhatsappMessageWhereUniqueInput
    data: XOR<WhatsappMessageUpdateWithoutSessionInput, WhatsappMessageUncheckedUpdateWithoutSessionInput>
  }

  export type WhatsappMessageUpdateManyWithWhereWithoutSessionInput = {
    where: WhatsappMessageScalarWhereInput
    data: XOR<WhatsappMessageUpdateManyMutationInput, WhatsappMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type WhatsappMessageScalarWhereInput = {
    AND?: WhatsappMessageScalarWhereInput | WhatsappMessageScalarWhereInput[]
    OR?: WhatsappMessageScalarWhereInput[]
    NOT?: WhatsappMessageScalarWhereInput | WhatsappMessageScalarWhereInput[]
    id?: StringFilter<"WhatsappMessage"> | string
    sessionId?: StringFilter<"WhatsappMessage"> | string
    chatId?: StringFilter<"WhatsappMessage"> | string
    messageId?: StringFilter<"WhatsappMessage"> | string
    fromMe?: BoolFilter<"WhatsappMessage"> | boolean
    senderId?: StringNullableFilter<"WhatsappMessage"> | string | null
    messageType?: StringNullableFilter<"WhatsappMessage"> | string | null
    text?: StringNullableFilter<"WhatsappMessage"> | string | null
    caption?: StringNullableFilter<"WhatsappMessage"> | string | null
    mediaPath?: StringNullableFilter<"WhatsappMessage"> | string | null
    timestamp?: BigIntFilter<"WhatsappMessage"> | bigint | number
    createdAt?: DateTimeFilter<"WhatsappMessage"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappMessage"> | Date | string
  }

  export type WhatsappSessionCreateWithoutChatsInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.SessionStatus
    lastConnectedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: WhatsappMessageCreateNestedManyWithoutSessionInput
  }

  export type WhatsappSessionUncheckedCreateWithoutChatsInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.SessionStatus
    lastConnectedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: WhatsappMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type WhatsappSessionCreateOrConnectWithoutChatsInput = {
    where: WhatsappSessionWhereUniqueInput
    create: XOR<WhatsappSessionCreateWithoutChatsInput, WhatsappSessionUncheckedCreateWithoutChatsInput>
  }

  export type WhatsappMessageCreateWithoutChatInput = {
    id?: string
    messageId: string
    fromMe: boolean
    senderId?: string | null
    messageType?: string | null
    text?: string | null
    caption?: string | null
    mediaPath?: string | null
    timestamp: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    session: WhatsappSessionCreateNestedOneWithoutMessagesInput
  }

  export type WhatsappMessageUncheckedCreateWithoutChatInput = {
    id?: string
    sessionId: string
    messageId: string
    fromMe: boolean
    senderId?: string | null
    messageType?: string | null
    text?: string | null
    caption?: string | null
    mediaPath?: string | null
    timestamp: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappMessageCreateOrConnectWithoutChatInput = {
    where: WhatsappMessageWhereUniqueInput
    create: XOR<WhatsappMessageCreateWithoutChatInput, WhatsappMessageUncheckedCreateWithoutChatInput>
  }

  export type WhatsappMessageCreateManyChatInputEnvelope = {
    data: WhatsappMessageCreateManyChatInput | WhatsappMessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type WhatsappSessionUpsertWithoutChatsInput = {
    update: XOR<WhatsappSessionUpdateWithoutChatsInput, WhatsappSessionUncheckedUpdateWithoutChatsInput>
    create: XOR<WhatsappSessionCreateWithoutChatsInput, WhatsappSessionUncheckedCreateWithoutChatsInput>
    where?: WhatsappSessionWhereInput
  }

  export type WhatsappSessionUpdateToOneWithWhereWithoutChatsInput = {
    where?: WhatsappSessionWhereInput
    data: XOR<WhatsappSessionUpdateWithoutChatsInput, WhatsappSessionUncheckedUpdateWithoutChatsInput>
  }

  export type WhatsappSessionUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: WhatsappMessageUpdateManyWithoutSessionNestedInput
  }

  export type WhatsappSessionUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: WhatsappMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type WhatsappMessageUpsertWithWhereUniqueWithoutChatInput = {
    where: WhatsappMessageWhereUniqueInput
    update: XOR<WhatsappMessageUpdateWithoutChatInput, WhatsappMessageUncheckedUpdateWithoutChatInput>
    create: XOR<WhatsappMessageCreateWithoutChatInput, WhatsappMessageUncheckedCreateWithoutChatInput>
  }

  export type WhatsappMessageUpdateWithWhereUniqueWithoutChatInput = {
    where: WhatsappMessageWhereUniqueInput
    data: XOR<WhatsappMessageUpdateWithoutChatInput, WhatsappMessageUncheckedUpdateWithoutChatInput>
  }

  export type WhatsappMessageUpdateManyWithWhereWithoutChatInput = {
    where: WhatsappMessageScalarWhereInput
    data: XOR<WhatsappMessageUpdateManyMutationInput, WhatsappMessageUncheckedUpdateManyWithoutChatInput>
  }

  export type WhatsappSessionCreateWithoutMessagesInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.SessionStatus
    lastConnectedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: WhatsappChatCreateNestedManyWithoutSessionInput
  }

  export type WhatsappSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.SessionStatus
    lastConnectedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: WhatsappChatUncheckedCreateNestedManyWithoutSessionInput
  }

  export type WhatsappSessionCreateOrConnectWithoutMessagesInput = {
    where: WhatsappSessionWhereUniqueInput
    create: XOR<WhatsappSessionCreateWithoutMessagesInput, WhatsappSessionUncheckedCreateWithoutMessagesInput>
  }

  export type WhatsappChatCreateWithoutMessagesInput = {
    id?: string
    chatId: string
    name: string
    isGroup: boolean
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    session: WhatsappSessionCreateNestedOneWithoutChatsInput
  }

  export type WhatsappChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    sessionId: string
    chatId: string
    name: string
    isGroup: boolean
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappChatCreateOrConnectWithoutMessagesInput = {
    where: WhatsappChatWhereUniqueInput
    create: XOR<WhatsappChatCreateWithoutMessagesInput, WhatsappChatUncheckedCreateWithoutMessagesInput>
  }

  export type WhatsappSessionUpsertWithoutMessagesInput = {
    update: XOR<WhatsappSessionUpdateWithoutMessagesInput, WhatsappSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<WhatsappSessionCreateWithoutMessagesInput, WhatsappSessionUncheckedCreateWithoutMessagesInput>
    where?: WhatsappSessionWhereInput
  }

  export type WhatsappSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: WhatsappSessionWhereInput
    data: XOR<WhatsappSessionUpdateWithoutMessagesInput, WhatsappSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type WhatsappSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: WhatsappChatUpdateManyWithoutSessionNestedInput
  }

  export type WhatsappSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    lastConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: WhatsappChatUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type WhatsappChatUpsertWithoutMessagesInput = {
    update: XOR<WhatsappChatUpdateWithoutMessagesInput, WhatsappChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<WhatsappChatCreateWithoutMessagesInput, WhatsappChatUncheckedCreateWithoutMessagesInput>
    where?: WhatsappChatWhereInput
  }

  export type WhatsappChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: WhatsappChatWhereInput
    data: XOR<WhatsappChatUpdateWithoutMessagesInput, WhatsappChatUncheckedUpdateWithoutMessagesInput>
  }

  export type WhatsappChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: WhatsappSessionUpdateOneRequiredWithoutChatsNestedInput
  }

  export type WhatsappChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappChatCreateManySessionInput = {
    id?: string
    chatId: string
    name: string
    isGroup: boolean
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappMessageCreateManySessionInput = {
    id?: string
    chatId: string
    messageId: string
    fromMe: boolean
    senderId?: string | null
    messageType?: string | null
    text?: string | null
    caption?: string | null
    mediaPath?: string | null
    timestamp: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappChatUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: WhatsappMessageUpdateManyWithoutChatNestedInput
  }

  export type WhatsappChatUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: WhatsappMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type WhatsappChatUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mediaPath?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: WhatsappChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type WhatsappMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mediaPath?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mediaPath?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappMessageCreateManyChatInput = {
    id?: string
    sessionId: string
    messageId: string
    fromMe: boolean
    senderId?: string | null
    messageType?: string | null
    text?: string | null
    caption?: string | null
    mediaPath?: string | null
    timestamp: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappMessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mediaPath?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: WhatsappSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type WhatsappMessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mediaPath?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappMessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    mediaPath?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}