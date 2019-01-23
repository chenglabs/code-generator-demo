import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    boards: <T = Array<Board | null>>(args: { where?: BoardWhereInput | null, orderBy?: BoardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cards: <T = Array<Card | null>>(args: { where?: CardWhereInput | null, orderBy?: CardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lists: <T = Array<List | null>>(args: { where?: ListWhereInput | null, orderBy?: ListOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    board: <T = Board | null>(args: { where: BoardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    card: <T = Card | null>(args: { where: CardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    list: <T = List | null>(args: { where: ListWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    boardsConnection: <T = BoardConnection>(args: { where?: BoardWhereInput | null, orderBy?: BoardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cardsConnection: <T = CardConnection>(args: { where?: CardWhereInput | null, orderBy?: CardOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    listsConnection: <T = ListConnection>(args: { where?: ListWhereInput | null, orderBy?: ListOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createBoard: <T = Board>(args: { data: BoardCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCard: <T = Card>(args: { data: CardCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createList: <T = List>(args: { data: ListCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBoard: <T = Board | null>(args: { data: BoardUpdateInput, where: BoardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCard: <T = Card | null>(args: { data: CardUpdateInput, where: CardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateList: <T = List | null>(args: { data: ListUpdateInput, where: ListWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBoard: <T = Board | null>(args: { where: BoardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCard: <T = Card | null>(args: { where: CardWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteList: <T = List | null>(args: { where: ListWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertBoard: <T = Board>(args: { where: BoardWhereUniqueInput, create: BoardCreateInput, update: BoardUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCard: <T = Card>(args: { where: CardWhereUniqueInput, create: CardCreateInput, update: CardUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertList: <T = List>(args: { where: ListWhereUniqueInput, create: ListCreateInput, update: ListUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBoards: <T = BatchPayload>(args: { data: BoardUpdateManyMutationInput, where?: BoardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCards: <T = BatchPayload>(args: { data: CardUpdateManyMutationInput, where?: CardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLists: <T = BatchPayload>(args: { data: ListUpdateManyMutationInput, where?: ListWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBoards: <T = BatchPayload>(args: { where?: BoardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCards: <T = BatchPayload>(args: { where?: CardWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLists: <T = BatchPayload>(args: { where?: ListWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    board: <T = BoardSubscriptionPayload | null>(args: { where?: BoardSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    card: <T = CardSubscriptionPayload | null>(args: { where?: CardSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    list: <T = ListSubscriptionPayload | null>(args: { where?: ListSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Board: (where?: BoardWhereInput) => Promise<boolean>
  Card: (where?: CardWhereInput) => Promise<boolean>
  List: (where?: ListWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateBoard {
  count: Int!
}

type AggregateCard {
  count: Int!
}

type AggregateList {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Board implements Node {
  id: ID!
  lists(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [List!]
  name: String!
  updatedBy: User
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type BoardConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BoardEdge]!
  aggregate: AggregateBoard!
}

input BoardCreateInput {
  name: String!
  lists: ListCreateManyInput
  updatedBy: UserCreateOneWithoutBoardsInput
}

input BoardCreateManyWithoutUpdatedByInput {
  create: [BoardCreateWithoutUpdatedByInput!]
  connect: [BoardWhereUniqueInput!]
}

input BoardCreateWithoutUpdatedByInput {
  name: String!
  lists: ListCreateManyInput
}

"""An edge in a connection."""
type BoardEdge {
  """The item at the end of the edge."""
  node: Board!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BoardOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BoardPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input BoardScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [BoardScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BoardScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BoardScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type BoardSubscriptionPayload {
  mutation: MutationType!
  node: Board
  updatedFields: [String!]
  previousValues: BoardPreviousValues
}

input BoardSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BoardSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BoardSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BoardSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BoardWhereInput
}

input BoardUpdateInput {
  name: String
  lists: ListUpdateManyInput
  updatedBy: UserUpdateOneWithoutBoardsInput
}

input BoardUpdateManyDataInput {
  name: String
}

input BoardUpdateManyMutationInput {
  name: String
}

input BoardUpdateManyWithoutUpdatedByInput {
  create: [BoardCreateWithoutUpdatedByInput!]
  connect: [BoardWhereUniqueInput!]
  set: [BoardWhereUniqueInput!]
  disconnect: [BoardWhereUniqueInput!]
  delete: [BoardWhereUniqueInput!]
  update: [BoardUpdateWithWhereUniqueWithoutUpdatedByInput!]
  updateMany: [BoardUpdateManyWithWhereNestedInput!]
  deleteMany: [BoardScalarWhereInput!]
  upsert: [BoardUpsertWithWhereUniqueWithoutUpdatedByInput!]
}

input BoardUpdateManyWithWhereNestedInput {
  where: BoardScalarWhereInput!
  data: BoardUpdateManyDataInput!
}

input BoardUpdateWithoutUpdatedByDataInput {
  name: String
  lists: ListUpdateManyInput
}

input BoardUpdateWithWhereUniqueWithoutUpdatedByInput {
  where: BoardWhereUniqueInput!
  data: BoardUpdateWithoutUpdatedByDataInput!
}

input BoardUpsertWithWhereUniqueWithoutUpdatedByInput {
  where: BoardWhereUniqueInput!
  update: BoardUpdateWithoutUpdatedByDataInput!
  create: BoardCreateWithoutUpdatedByInput!
}

input BoardWhereInput {
  """Logical AND on all given filters."""
  AND: [BoardWhereInput!]

  """Logical OR on all given filters."""
  OR: [BoardWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BoardWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  lists_every: ListWhereInput
  lists_some: ListWhereInput
  lists_none: ListWhereInput
  updatedBy: UserWhereInput
}

input BoardWhereUniqueInput {
  id: ID
}

type Card implements Node {
  id: ID!
  name: String!
  description: String
  updatedBy: User
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type CardConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CardEdge]!
  aggregate: AggregateCard!
}

input CardCreateInput {
  name: String!
  description: String
  updatedBy: UserCreateOneInput
}

input CardCreateManyInput {
  create: [CardCreateInput!]
  connect: [CardWhereUniqueInput!]
}

"""An edge in a connection."""
type CardEdge {
  """The item at the end of the edge."""
  node: Card!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CardOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CardPreviousValues {
  id: ID!
  name: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CardScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [CardScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type CardSubscriptionPayload {
  mutation: MutationType!
  node: Card
  updatedFields: [String!]
  previousValues: CardPreviousValues
}

input CardSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CardSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CardWhereInput
}

input CardUpdateDataInput {
  name: String
  description: String
  updatedBy: UserUpdateOneInput
}

input CardUpdateInput {
  name: String
  description: String
  updatedBy: UserUpdateOneInput
}

input CardUpdateManyDataInput {
  name: String
  description: String
}

input CardUpdateManyInput {
  create: [CardCreateInput!]
  connect: [CardWhereUniqueInput!]
  set: [CardWhereUniqueInput!]
  disconnect: [CardWhereUniqueInput!]
  delete: [CardWhereUniqueInput!]
  update: [CardUpdateWithWhereUniqueNestedInput!]
  updateMany: [CardUpdateManyWithWhereNestedInput!]
  deleteMany: [CardScalarWhereInput!]
  upsert: [CardUpsertWithWhereUniqueNestedInput!]
}

input CardUpdateManyMutationInput {
  name: String
  description: String
}

input CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput!
  data: CardUpdateManyDataInput!
}

input CardUpdateWithWhereUniqueNestedInput {
  where: CardWhereUniqueInput!
  data: CardUpdateDataInput!
}

input CardUpsertWithWhereUniqueNestedInput {
  where: CardWhereUniqueInput!
  update: CardUpdateDataInput!
  create: CardCreateInput!
}

input CardWhereInput {
  """Logical AND on all given filters."""
  AND: [CardWhereInput!]

  """Logical OR on all given filters."""
  OR: [CardWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CardWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  updatedBy: UserWhereInput
}

input CardWhereUniqueInput {
  id: ID
}

scalar DateTime

"""Raw JSON value"""
scalar Json

type List implements Node {
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
  id: ID!
  name: String!
  updatedBy: User
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type ListConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ListEdge]!
  aggregate: AggregateList!
}

input ListCreateInput {
  name: String!
  cards: CardCreateManyInput
  updatedBy: UserCreateOneInput
}

input ListCreateManyInput {
  create: [ListCreateInput!]
  connect: [ListWhereUniqueInput!]
}

"""An edge in a connection."""
type ListEdge {
  """The item at the end of the edge."""
  node: List!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ListOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ListPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ListScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ListScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ListScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ListScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type ListSubscriptionPayload {
  mutation: MutationType!
  node: List
  updatedFields: [String!]
  previousValues: ListPreviousValues
}

input ListSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ListSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ListSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ListSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ListWhereInput
}

input ListUpdateDataInput {
  name: String
  cards: CardUpdateManyInput
  updatedBy: UserUpdateOneInput
}

input ListUpdateInput {
  name: String
  cards: CardUpdateManyInput
  updatedBy: UserUpdateOneInput
}

input ListUpdateManyDataInput {
  name: String
}

input ListUpdateManyInput {
  create: [ListCreateInput!]
  connect: [ListWhereUniqueInput!]
  set: [ListWhereUniqueInput!]
  disconnect: [ListWhereUniqueInput!]
  delete: [ListWhereUniqueInput!]
  update: [ListUpdateWithWhereUniqueNestedInput!]
  updateMany: [ListUpdateManyWithWhereNestedInput!]
  deleteMany: [ListScalarWhereInput!]
  upsert: [ListUpsertWithWhereUniqueNestedInput!]
}

input ListUpdateManyMutationInput {
  name: String
}

input ListUpdateManyWithWhereNestedInput {
  where: ListScalarWhereInput!
  data: ListUpdateManyDataInput!
}

input ListUpdateWithWhereUniqueNestedInput {
  where: ListWhereUniqueInput!
  data: ListUpdateDataInput!
}

input ListUpsertWithWhereUniqueNestedInput {
  where: ListWhereUniqueInput!
  update: ListUpdateDataInput!
  create: ListCreateInput!
}

input ListWhereInput {
  """Logical AND on all given filters."""
  AND: [ListWhereInput!]

  """Logical OR on all given filters."""
  OR: [ListWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ListWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  cards_every: CardWhereInput
  cards_some: CardWhereInput
  cards_none: CardWhereInput
  updatedBy: UserWhereInput
}

input ListWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createBoard(data: BoardCreateInput!): Board!
  createCard(data: CardCreateInput!): Card!
  createList(data: ListCreateInput!): List!
  createUser(data: UserCreateInput!): User!
  updateBoard(data: BoardUpdateInput!, where: BoardWhereUniqueInput!): Board
  updateCard(data: CardUpdateInput!, where: CardWhereUniqueInput!): Card
  updateList(data: ListUpdateInput!, where: ListWhereUniqueInput!): List
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteBoard(where: BoardWhereUniqueInput!): Board
  deleteCard(where: CardWhereUniqueInput!): Card
  deleteList(where: ListWhereUniqueInput!): List
  deleteUser(where: UserWhereUniqueInput!): User
  upsertBoard(where: BoardWhereUniqueInput!, create: BoardCreateInput!, update: BoardUpdateInput!): Board!
  upsertCard(where: CardWhereUniqueInput!, create: CardCreateInput!, update: CardUpdateInput!): Card!
  upsertList(where: ListWhereUniqueInput!, create: ListCreateInput!, update: ListUpdateInput!): List!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyBoards(data: BoardUpdateManyMutationInput!, where: BoardWhereInput): BatchPayload!
  updateManyCards(data: CardUpdateManyMutationInput!, where: CardWhereInput): BatchPayload!
  updateManyLists(data: ListUpdateManyMutationInput!, where: ListWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyBoards(where: BoardWhereInput): BatchPayload!
  deleteManyCards(where: CardWhereInput): BatchPayload!
  deleteManyLists(where: ListWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PrismaDatabase {
  default
}

type Query {
  boards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board]!
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card]!
  lists(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [List]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  board(where: BoardWhereUniqueInput!): Board
  card(where: CardWhereUniqueInput!): Card
  list(where: ListWhereUniqueInput!): List
  user(where: UserWhereUniqueInput!): User
  boardsConnection(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BoardConnection!
  cardsConnection(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardConnection!
  listsConnection(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ListConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  board(where: BoardSubscriptionWhereInput): BoardSubscriptionPayload
  card(where: CardSubscriptionWhereInput): CardSubscriptionPayload
  list(where: ListSubscriptionWhereInput): ListSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  avatarUrl: String
  boards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  avatarUrl: String
  boards: BoardCreateManyWithoutUpdatedByInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBoardsInput {
  create: UserCreateWithoutBoardsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBoardsInput {
  email: String!
  password: String!
  name: String!
  avatarUrl: String
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  avatarUrl_ASC
  avatarUrl_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  avatarUrl: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
  avatarUrl: String
  boards: BoardUpdateManyWithoutUpdatedByInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  avatarUrl: String
  boards: BoardUpdateManyWithoutUpdatedByInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
  avatarUrl: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutBoardsInput {
  create: UserCreateWithoutBoardsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutBoardsDataInput
  upsert: UserUpsertWithoutBoardsInput
}

input UserUpdateWithoutBoardsDataInput {
  email: String
  password: String
  name: String
  avatarUrl: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutBoardsInput {
  update: UserUpdateWithoutBoardsDataInput!
  create: UserCreateWithoutBoardsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  avatarUrl: String

  """All values that are not equal to given value."""
  avatarUrl_not: String

  """All values that are contained in given list."""
  avatarUrl_in: [String!]

  """All values that are not contained in given list."""
  avatarUrl_not_in: [String!]

  """All values less than the given value."""
  avatarUrl_lt: String

  """All values less than or equal the given value."""
  avatarUrl_lte: String

  """All values greater than the given value."""
  avatarUrl_gt: String

  """All values greater than or equal the given value."""
  avatarUrl_gte: String

  """All values containing the given string."""
  avatarUrl_contains: String

  """All values not containing the given string."""
  avatarUrl_not_contains: String

  """All values starting with the given string."""
  avatarUrl_starts_with: String

  """All values not starting with the given string."""
  avatarUrl_not_starts_with: String

  """All values ending with the given string."""
  avatarUrl_ends_with: String

  """All values not ending with the given string."""
  avatarUrl_not_ends_with: String
  boards_every: BoardWhereInput
  boards_some: BoardWhereInput
  boards_none: BoardWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type BoardOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type CardOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ListOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PrismaDatabase =   'default'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'avatarUrl_ASC' |
  'avatarUrl_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface BoardCreateInput {
  name: String
  lists?: ListCreateManyInput | null
  updatedBy?: UserCreateOneWithoutBoardsInput | null
}

export interface BoardCreateManyWithoutUpdatedByInput {
  create?: BoardCreateWithoutUpdatedByInput[] | BoardCreateWithoutUpdatedByInput | null
  connect?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
}

export interface BoardCreateWithoutUpdatedByInput {
  name: String
  lists?: ListCreateManyInput | null
}

export interface BoardScalarWhereInput {
  AND?: BoardScalarWhereInput[] | BoardScalarWhereInput | null
  OR?: BoardScalarWhereInput[] | BoardScalarWhereInput | null
  NOT?: BoardScalarWhereInput[] | BoardScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BoardSubscriptionWhereInput {
  AND?: BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput | null
  OR?: BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput | null
  NOT?: BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BoardWhereInput | null
}

export interface BoardUpdateInput {
  name?: String | null
  lists?: ListUpdateManyInput | null
  updatedBy?: UserUpdateOneWithoutBoardsInput | null
}

export interface BoardUpdateManyDataInput {
  name?: String | null
}

export interface BoardUpdateManyMutationInput {
  name?: String | null
}

export interface BoardUpdateManyWithoutUpdatedByInput {
  create?: BoardCreateWithoutUpdatedByInput[] | BoardCreateWithoutUpdatedByInput | null
  connect?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
  set?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
  disconnect?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
  delete?: BoardWhereUniqueInput[] | BoardWhereUniqueInput | null
  update?: BoardUpdateWithWhereUniqueWithoutUpdatedByInput[] | BoardUpdateWithWhereUniqueWithoutUpdatedByInput | null
  updateMany?: BoardUpdateManyWithWhereNestedInput[] | BoardUpdateManyWithWhereNestedInput | null
  deleteMany?: BoardScalarWhereInput[] | BoardScalarWhereInput | null
  upsert?: BoardUpsertWithWhereUniqueWithoutUpdatedByInput[] | BoardUpsertWithWhereUniqueWithoutUpdatedByInput | null
}

export interface BoardUpdateManyWithWhereNestedInput {
  where: BoardScalarWhereInput
  data: BoardUpdateManyDataInput
}

export interface BoardUpdateWithoutUpdatedByDataInput {
  name?: String | null
  lists?: ListUpdateManyInput | null
}

export interface BoardUpdateWithWhereUniqueWithoutUpdatedByInput {
  where: BoardWhereUniqueInput
  data: BoardUpdateWithoutUpdatedByDataInput
}

export interface BoardUpsertWithWhereUniqueWithoutUpdatedByInput {
  where: BoardWhereUniqueInput
  update: BoardUpdateWithoutUpdatedByDataInput
  create: BoardCreateWithoutUpdatedByInput
}

export interface BoardWhereInput {
  AND?: BoardWhereInput[] | BoardWhereInput | null
  OR?: BoardWhereInput[] | BoardWhereInput | null
  NOT?: BoardWhereInput[] | BoardWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  lists_every?: ListWhereInput | null
  lists_some?: ListWhereInput | null
  lists_none?: ListWhereInput | null
  updatedBy?: UserWhereInput | null
}

export interface BoardWhereUniqueInput {
  id?: ID_Input | null
}

export interface CardCreateInput {
  name: String
  description?: String | null
  updatedBy?: UserCreateOneInput | null
}

export interface CardCreateManyInput {
  create?: CardCreateInput[] | CardCreateInput | null
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
}

export interface CardScalarWhereInput {
  AND?: CardScalarWhereInput[] | CardScalarWhereInput | null
  OR?: CardScalarWhereInput[] | CardScalarWhereInput | null
  NOT?: CardScalarWhereInput[] | CardScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface CardSubscriptionWhereInput {
  AND?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput | null
  OR?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput | null
  NOT?: CardSubscriptionWhereInput[] | CardSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CardWhereInput | null
}

export interface CardUpdateDataInput {
  name?: String | null
  description?: String | null
  updatedBy?: UserUpdateOneInput | null
}

export interface CardUpdateInput {
  name?: String | null
  description?: String | null
  updatedBy?: UserUpdateOneInput | null
}

export interface CardUpdateManyDataInput {
  name?: String | null
  description?: String | null
}

export interface CardUpdateManyInput {
  create?: CardCreateInput[] | CardCreateInput | null
  connect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  set?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  disconnect?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  delete?: CardWhereUniqueInput[] | CardWhereUniqueInput | null
  update?: CardUpdateWithWhereUniqueNestedInput[] | CardUpdateWithWhereUniqueNestedInput | null
  updateMany?: CardUpdateManyWithWhereNestedInput[] | CardUpdateManyWithWhereNestedInput | null
  deleteMany?: CardScalarWhereInput[] | CardScalarWhereInput | null
  upsert?: CardUpsertWithWhereUniqueNestedInput[] | CardUpsertWithWhereUniqueNestedInput | null
}

export interface CardUpdateManyMutationInput {
  name?: String | null
  description?: String | null
}

export interface CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput
  data: CardUpdateManyDataInput
}

export interface CardUpdateWithWhereUniqueNestedInput {
  where: CardWhereUniqueInput
  data: CardUpdateDataInput
}

export interface CardUpsertWithWhereUniqueNestedInput {
  where: CardWhereUniqueInput
  update: CardUpdateDataInput
  create: CardCreateInput
}

export interface CardWhereInput {
  AND?: CardWhereInput[] | CardWhereInput | null
  OR?: CardWhereInput[] | CardWhereInput | null
  NOT?: CardWhereInput[] | CardWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  updatedBy?: UserWhereInput | null
}

export interface CardWhereUniqueInput {
  id?: ID_Input | null
}

export interface ListCreateInput {
  name: String
  cards?: CardCreateManyInput | null
  updatedBy?: UserCreateOneInput | null
}

export interface ListCreateManyInput {
  create?: ListCreateInput[] | ListCreateInput | null
  connect?: ListWhereUniqueInput[] | ListWhereUniqueInput | null
}

export interface ListScalarWhereInput {
  AND?: ListScalarWhereInput[] | ListScalarWhereInput | null
  OR?: ListScalarWhereInput[] | ListScalarWhereInput | null
  NOT?: ListScalarWhereInput[] | ListScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface ListSubscriptionWhereInput {
  AND?: ListSubscriptionWhereInput[] | ListSubscriptionWhereInput | null
  OR?: ListSubscriptionWhereInput[] | ListSubscriptionWhereInput | null
  NOT?: ListSubscriptionWhereInput[] | ListSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ListWhereInput | null
}

export interface ListUpdateDataInput {
  name?: String | null
  cards?: CardUpdateManyInput | null
  updatedBy?: UserUpdateOneInput | null
}

export interface ListUpdateInput {
  name?: String | null
  cards?: CardUpdateManyInput | null
  updatedBy?: UserUpdateOneInput | null
}

export interface ListUpdateManyDataInput {
  name?: String | null
}

export interface ListUpdateManyInput {
  create?: ListCreateInput[] | ListCreateInput | null
  connect?: ListWhereUniqueInput[] | ListWhereUniqueInput | null
  set?: ListWhereUniqueInput[] | ListWhereUniqueInput | null
  disconnect?: ListWhereUniqueInput[] | ListWhereUniqueInput | null
  delete?: ListWhereUniqueInput[] | ListWhereUniqueInput | null
  update?: ListUpdateWithWhereUniqueNestedInput[] | ListUpdateWithWhereUniqueNestedInput | null
  updateMany?: ListUpdateManyWithWhereNestedInput[] | ListUpdateManyWithWhereNestedInput | null
  deleteMany?: ListScalarWhereInput[] | ListScalarWhereInput | null
  upsert?: ListUpsertWithWhereUniqueNestedInput[] | ListUpsertWithWhereUniqueNestedInput | null
}

export interface ListUpdateManyMutationInput {
  name?: String | null
}

export interface ListUpdateManyWithWhereNestedInput {
  where: ListScalarWhereInput
  data: ListUpdateManyDataInput
}

export interface ListUpdateWithWhereUniqueNestedInput {
  where: ListWhereUniqueInput
  data: ListUpdateDataInput
}

export interface ListUpsertWithWhereUniqueNestedInput {
  where: ListWhereUniqueInput
  update: ListUpdateDataInput
  create: ListCreateInput
}

export interface ListWhereInput {
  AND?: ListWhereInput[] | ListWhereInput | null
  OR?: ListWhereInput[] | ListWhereInput | null
  NOT?: ListWhereInput[] | ListWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  cards_every?: CardWhereInput | null
  cards_some?: CardWhereInput | null
  cards_none?: CardWhereInput | null
  updatedBy?: UserWhereInput | null
}

export interface ListWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  avatarUrl?: String | null
  boards?: BoardCreateManyWithoutUpdatedByInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutBoardsInput {
  create?: UserCreateWithoutBoardsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutBoardsInput {
  email: String
  password: String
  name: String
  avatarUrl?: String | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateDataInput {
  email?: String | null
  password?: String | null
  name?: String | null
  avatarUrl?: String | null
  boards?: BoardUpdateManyWithoutUpdatedByInput | null
}

export interface UserUpdateInput {
  email?: String | null
  password?: String | null
  name?: String | null
  avatarUrl?: String | null
  boards?: BoardUpdateManyWithoutUpdatedByInput | null
}

export interface UserUpdateManyMutationInput {
  email?: String | null
  password?: String | null
  name?: String | null
  avatarUrl?: String | null
}

export interface UserUpdateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
}

export interface UserUpdateOneWithoutBoardsInput {
  create?: UserCreateWithoutBoardsInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutBoardsDataInput | null
  upsert?: UserUpsertWithoutBoardsInput | null
}

export interface UserUpdateWithoutBoardsDataInput {
  email?: String | null
  password?: String | null
  name?: String | null
  avatarUrl?: String | null
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutBoardsInput {
  update: UserUpdateWithoutBoardsDataInput
  create: UserCreateWithoutBoardsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  avatarUrl?: String | null
  avatarUrl_not?: String | null
  avatarUrl_in?: String[] | String | null
  avatarUrl_not_in?: String[] | String | null
  avatarUrl_lt?: String | null
  avatarUrl_lte?: String | null
  avatarUrl_gt?: String | null
  avatarUrl_gte?: String | null
  avatarUrl_contains?: String | null
  avatarUrl_not_contains?: String | null
  avatarUrl_starts_with?: String | null
  avatarUrl_not_starts_with?: String | null
  avatarUrl_ends_with?: String | null
  avatarUrl_not_ends_with?: String | null
  boards_every?: BoardWhereInput | null
  boards_some?: BoardWhereInput | null
  boards_none?: BoardWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateBoard {
  count: Int
}

export interface AggregateCard {
  count: Int
}

export interface AggregateList {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Board extends Node {
  id: ID_Output
  lists?: Array<List> | null
  name: String
  updatedBy?: User | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface BoardConnection {
  pageInfo: PageInfo
  edges: Array<BoardEdge | null>
  aggregate: AggregateBoard
}

/*
 * An edge in a connection.

 */
export interface BoardEdge {
  node: Board
  cursor: String
}

export interface BoardPreviousValues {
  id: ID_Output
  name: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BoardSubscriptionPayload {
  mutation: MutationType
  node?: Board | null
  updatedFields?: Array<String> | null
  previousValues?: BoardPreviousValues | null
}

export interface Card extends Node {
  id: ID_Output
  name: String
  description?: String | null
  updatedBy?: User | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface CardConnection {
  pageInfo: PageInfo
  edges: Array<CardEdge | null>
  aggregate: AggregateCard
}

/*
 * An edge in a connection.

 */
export interface CardEdge {
  node: Card
  cursor: String
}

export interface CardPreviousValues {
  id: ID_Output
  name: String
  description?: String | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface CardSubscriptionPayload {
  mutation: MutationType
  node?: Card | null
  updatedFields?: Array<String> | null
  previousValues?: CardPreviousValues | null
}

export interface List extends Node {
  cards?: Array<Card> | null
  id: ID_Output
  name: String
  updatedBy?: User | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ListConnection {
  pageInfo: PageInfo
  edges: Array<ListEdge | null>
  aggregate: AggregateList
}

/*
 * An edge in a connection.

 */
export interface ListEdge {
  node: List
  cursor: String
}

export interface ListPreviousValues {
  id: ID_Output
  name: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ListSubscriptionPayload {
  mutation: MutationType
  node?: List | null
  updatedFields?: Array<String> | null
  previousValues?: ListPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  avatarUrl?: String | null
  boards?: Array<Board> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
  avatarUrl?: String | null
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
Raw JSON value
*/
export type Json = any

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string