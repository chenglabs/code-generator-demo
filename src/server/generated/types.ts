export type Maybe<T> = T | null;

export interface ListWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ListWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ListWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ListWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  cards_every?: Maybe<CardWhereInput>;

  cards_some?: Maybe<CardWhereInput>;

  cards_none?: Maybe<CardWhereInput>;

  updatedBy?: Maybe<UserWhereInput>;
}

export interface CardWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CardWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CardWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CardWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  description?: Maybe<string>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<string>;
  /** All values that are contained in given list. */
  description_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  description_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<string>;
  /** All values greater than the given value. */
  description_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<string>;
  /** All values containing the given string. */
  description_contains?: Maybe<string>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  updatedBy?: Maybe<UserWhereInput>;
}

export interface UserWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  password?: Maybe<string>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<string>;
  /** All values that are contained in given list. */
  password_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  password_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<string>;
  /** All values greater than the given value. */
  password_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<string>;
  /** All values containing the given string. */
  password_contains?: Maybe<string>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  avatarUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  avatarUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  avatarUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  avatarUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  avatarUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  avatarUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  avatarUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  avatarUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  avatarUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  avatarUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  avatarUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  avatarUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  avatarUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  avatarUrl_not_ends_with?: Maybe<string>;

  boards_every?: Maybe<BoardWhereInput>;

  boards_some?: Maybe<BoardWhereInput>;

  boards_none?: Maybe<BoardWhereInput>;
}

export interface BoardWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<BoardWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<BoardWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<BoardWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  lists_every?: Maybe<ListWhereInput>;

  lists_some?: Maybe<ListWhereInput>;

  lists_none?: Maybe<ListWhereInput>;

  updatedBy?: Maybe<UserWhereInput>;
}

export interface BoardWhereUniqueInput {
  id?: Maybe<string>;
}

export interface ListWhereUniqueInput {
  id?: Maybe<string>;
}

export interface BoardUpdateInput {
  name?: Maybe<string>;

  lists?: Maybe<ListUpdateManyInput>;

  updatedBy?: Maybe<UserUpdateOneWithoutBoardsInput>;
}

export interface ListUpdateManyInput {
  create?: Maybe<ListCreateInput[]>;

  connect?: Maybe<ListWhereUniqueInput[]>;

  set?: Maybe<ListWhereUniqueInput[]>;

  disconnect?: Maybe<ListWhereUniqueInput[]>;

  delete?: Maybe<ListWhereUniqueInput[]>;

  update?: Maybe<ListUpdateWithWhereUniqueNestedInput[]>;

  updateMany?: Maybe<ListUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<ListScalarWhereInput[]>;

  upsert?: Maybe<ListUpsertWithWhereUniqueNestedInput[]>;
}

export interface ListCreateInput {
  name: string;

  cards?: Maybe<CardCreateManyInput>;

  updatedBy?: Maybe<UserCreateOneInput>;
}

export interface CardCreateManyInput {
  create?: Maybe<CardCreateInput[]>;

  connect?: Maybe<CardWhereUniqueInput[]>;
}

export interface CardCreateInput {
  name: string;

  description?: Maybe<string>;

  updatedBy?: Maybe<UserCreateOneInput>;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;

  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateInput {
  email: string;

  password: string;

  name: string;

  avatarUrl?: Maybe<string>;

  boards?: Maybe<BoardCreateManyWithoutUpdatedByInput>;
}

export interface BoardCreateManyWithoutUpdatedByInput {
  create?: Maybe<BoardCreateWithoutUpdatedByInput[]>;

  connect?: Maybe<BoardWhereUniqueInput[]>;
}

export interface BoardCreateWithoutUpdatedByInput {
  name: string;

  lists?: Maybe<ListCreateManyInput>;
}

export interface ListCreateManyInput {
  create?: Maybe<ListCreateInput[]>;

  connect?: Maybe<ListWhereUniqueInput[]>;
}

export interface UserWhereUniqueInput {
  id?: Maybe<string>;

  email?: Maybe<string>;
}

export interface CardWhereUniqueInput {
  id?: Maybe<string>;
}

export interface ListUpdateWithWhereUniqueNestedInput {
  where: ListWhereUniqueInput;

  data: ListUpdateDataInput;
}

export interface ListUpdateDataInput {
  name?: Maybe<string>;

  cards?: Maybe<CardUpdateManyInput>;

  updatedBy?: Maybe<UserUpdateOneInput>;
}

export interface CardUpdateManyInput {
  create?: Maybe<CardCreateInput[]>;

  connect?: Maybe<CardWhereUniqueInput[]>;

  set?: Maybe<CardWhereUniqueInput[]>;

  disconnect?: Maybe<CardWhereUniqueInput[]>;

  delete?: Maybe<CardWhereUniqueInput[]>;

  update?: Maybe<CardUpdateWithWhereUniqueNestedInput[]>;

  updateMany?: Maybe<CardUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<CardScalarWhereInput[]>;

  upsert?: Maybe<CardUpsertWithWhereUniqueNestedInput[]>;
}

export interface CardUpdateWithWhereUniqueNestedInput {
  where: CardWhereUniqueInput;

  data: CardUpdateDataInput;
}

export interface CardUpdateDataInput {
  name?: Maybe<string>;

  description?: Maybe<string>;

  updatedBy?: Maybe<UserUpdateOneInput>;
}

export interface UserUpdateOneInput {
  create?: Maybe<UserCreateInput>;

  connect?: Maybe<UserWhereUniqueInput>;

  disconnect?: Maybe<boolean>;

  delete?: Maybe<boolean>;

  update?: Maybe<UserUpdateDataInput>;

  upsert?: Maybe<UserUpsertNestedInput>;
}

export interface UserUpdateDataInput {
  email?: Maybe<string>;

  password?: Maybe<string>;

  name?: Maybe<string>;

  avatarUrl?: Maybe<string>;

  boards?: Maybe<BoardUpdateManyWithoutUpdatedByInput>;
}

export interface BoardUpdateManyWithoutUpdatedByInput {
  create?: Maybe<BoardCreateWithoutUpdatedByInput[]>;

  connect?: Maybe<BoardWhereUniqueInput[]>;

  set?: Maybe<BoardWhereUniqueInput[]>;

  disconnect?: Maybe<BoardWhereUniqueInput[]>;

  delete?: Maybe<BoardWhereUniqueInput[]>;

  update?: Maybe<BoardUpdateWithWhereUniqueWithoutUpdatedByInput[]>;

  updateMany?: Maybe<BoardUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<BoardScalarWhereInput[]>;

  upsert?: Maybe<BoardUpsertWithWhereUniqueWithoutUpdatedByInput[]>;
}

export interface BoardUpdateWithWhereUniqueWithoutUpdatedByInput {
  where: BoardWhereUniqueInput;

  data: BoardUpdateWithoutUpdatedByDataInput;
}

export interface BoardUpdateWithoutUpdatedByDataInput {
  name?: Maybe<string>;

  lists?: Maybe<ListUpdateManyInput>;
}

export interface BoardUpdateManyWithWhereNestedInput {
  where: BoardScalarWhereInput;

  data: BoardUpdateManyDataInput;
}

export interface BoardScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<BoardScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<BoardScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<BoardScalarWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;
}

export interface BoardUpdateManyDataInput {
  name?: Maybe<string>;
}

export interface BoardUpsertWithWhereUniqueWithoutUpdatedByInput {
  where: BoardWhereUniqueInput;

  update: BoardUpdateWithoutUpdatedByDataInput;

  create: BoardCreateWithoutUpdatedByInput;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;

  create: UserCreateInput;
}

export interface CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput;

  data: CardUpdateManyDataInput;
}

export interface CardScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CardScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CardScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CardScalarWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  description?: Maybe<string>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<string>;
  /** All values that are contained in given list. */
  description_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  description_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<string>;
  /** All values greater than the given value. */
  description_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<string>;
  /** All values containing the given string. */
  description_contains?: Maybe<string>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;
}

export interface CardUpdateManyDataInput {
  name?: Maybe<string>;

  description?: Maybe<string>;
}

export interface CardUpsertWithWhereUniqueNestedInput {
  where: CardWhereUniqueInput;

  update: CardUpdateDataInput;

  create: CardCreateInput;
}

export interface ListUpdateManyWithWhereNestedInput {
  where: ListScalarWhereInput;

  data: ListUpdateManyDataInput;
}

export interface ListScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ListScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ListScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ListScalarWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;
}

export interface ListUpdateManyDataInput {
  name?: Maybe<string>;
}

export interface ListUpsertWithWhereUniqueNestedInput {
  where: ListWhereUniqueInput;

  update: ListUpdateDataInput;

  create: ListCreateInput;
}

export interface UserUpdateOneWithoutBoardsInput {
  create?: Maybe<UserCreateWithoutBoardsInput>;

  connect?: Maybe<UserWhereUniqueInput>;

  disconnect?: Maybe<boolean>;

  delete?: Maybe<boolean>;

  update?: Maybe<UserUpdateWithoutBoardsDataInput>;

  upsert?: Maybe<UserUpsertWithoutBoardsInput>;
}

export interface UserCreateWithoutBoardsInput {
  email: string;

  password: string;

  name: string;

  avatarUrl?: Maybe<string>;
}

export interface UserUpdateWithoutBoardsDataInput {
  email?: Maybe<string>;

  password?: Maybe<string>;

  name?: Maybe<string>;

  avatarUrl?: Maybe<string>;
}

export interface UserUpsertWithoutBoardsInput {
  update: UserUpdateWithoutBoardsDataInput;

  create: UserCreateWithoutBoardsInput;
}

export interface ListUpdateInput {
  name?: Maybe<string>;

  cards?: Maybe<CardUpdateManyInput>;

  updatedBy?: Maybe<UserUpdateOneInput>;
}

export interface CardUpdateInput {
  name?: Maybe<string>;

  description?: Maybe<string>;

  updatedBy?: Maybe<UserUpdateOneInput>;
}

export interface BoardSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<BoardSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<BoardSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<BoardSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<BoardWhereInput>;
}

export interface ListSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ListSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ListSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ListSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<ListWhereInput>;
}

export interface CardSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<CardSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<CardSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<CardSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<CardWhereInput>;
}

export interface UserSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<UserWhereInput>;
}

export enum ListOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export enum CardOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export enum MutationType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED"
}

export type DateTime = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** An object with an ID */
export interface Node {
  /** The id of the object. */
  id: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  me?: Maybe<User>;

  board?: Maybe<Board>;

  list?: Maybe<List>;
}

export interface User {
  id: string;

  email: string;

  name: string;

  avatarUrl?: Maybe<string>;

  boards?: Maybe<Board[]>;
}

export interface Board extends Node {
  id: string;

  lists?: Maybe<List[]>;

  name: string;

  updatedBy?: Maybe<User>;

  createdAt: DateTime;

  updatedAt: DateTime;
}

export interface List extends Node {
  cards?: Maybe<Card[]>;

  id: string;

  name: string;

  updatedBy?: Maybe<User>;

  createdAt: DateTime;

  updatedAt: DateTime;
}

export interface Card extends Node {
  id: string;

  name: string;

  description?: Maybe<string>;

  updatedBy?: Maybe<User>;

  createdAt: DateTime;

  updatedAt: DateTime;
}

export interface Mutation {
  createBoard: User;

  deleteBoard: Board;

  signup: AuthPayload;

  login: AuthPayload;

  updateBoard?: Maybe<Board>;

  updateList?: Maybe<List>;

  updateCard: Card;

  deleteList?: Maybe<List>;
}

export interface AuthPayload {
  token: string;

  user: User;
}

export interface Subscription {
  board?: Maybe<BoardSubscriptionPayload>;

  list?: Maybe<ListSubscriptionPayload>;

  card?: Maybe<CardSubscriptionPayload>;

  user?: Maybe<UserSubscriptionPayload>;
}

export interface BoardSubscriptionPayload {
  mutation: MutationType;

  node?: Maybe<Board>;

  updatedFields?: Maybe<string[]>;

  previousValues?: Maybe<BoardPreviousValues>;
}

export interface BoardPreviousValues {
  id: string;

  name: string;

  createdAt: DateTime;

  updatedAt: DateTime;
}

export interface ListSubscriptionPayload {
  mutation: MutationType;

  node?: Maybe<List>;

  updatedFields?: Maybe<string[]>;

  previousValues?: Maybe<ListPreviousValues>;
}

export interface ListPreviousValues {
  id: string;

  name: string;

  createdAt: DateTime;

  updatedAt: DateTime;
}

export interface CardSubscriptionPayload {
  mutation: MutationType;

  node?: Maybe<Card>;

  updatedFields?: Maybe<string[]>;

  previousValues?: Maybe<CardPreviousValues>;
}

export interface CardPreviousValues {
  id: string;

  name: string;

  description?: Maybe<string>;

  createdAt: DateTime;

  updatedAt: DateTime;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;

  node?: Maybe<User>;

  updatedFields?: Maybe<string[]>;

  previousValues?: Maybe<UserPreviousValues>;
}

export interface UserPreviousValues {
  id: string;

  email: string;

  password: string;

  name: string;

  avatarUrl?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface BoardQueryArgs {
  where: BoardWhereUniqueInput;
}
export interface ListQueryArgs {
  where: ListWhereUniqueInput;
}
export interface ListsBoardArgs {
  where?: Maybe<ListWhereInput>;

  orderBy?: Maybe<ListOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface CardsListArgs {
  where?: Maybe<CardWhereInput>;

  orderBy?: Maybe<CardOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface CreateBoardMutationArgs {
  name: string;
}
export interface DeleteBoardMutationArgs {
  id: string;
}
export interface SignupMutationArgs {
  email: string;

  password: string;

  name: string;

  avatarUrl?: Maybe<string>;
}
export interface LoginMutationArgs {
  email: string;

  password: string;
}
export interface UpdateBoardMutationArgs {
  data: BoardUpdateInput;

  where: BoardWhereUniqueInput;
}
export interface UpdateListMutationArgs {
  data: ListUpdateInput;

  where: ListWhereUniqueInput;
}
export interface UpdateCardMutationArgs {
  data: CardUpdateInput;

  where: CardWhereUniqueInput;
}
export interface DeleteListMutationArgs {
  where: ListWhereUniqueInput;
}
export interface BoardSubscriptionArgs {
  where?: Maybe<BoardSubscriptionWhereInput>;
}
export interface ListSubscriptionArgs {
  where?: Maybe<ListSubscriptionWhereInput>;
}
export interface CardSubscriptionArgs {
  where?: Maybe<CardSubscriptionWhereInput>;
}
export interface UserSubscriptionArgs {
  where?: Maybe<UserSubscriptionWhereInput>;
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

import { Board, Card, List, User } from "./../prisma";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface QueryResolvers<Context = {}, TypeParent = {}> {
  me?: QueryMeResolver<Maybe<User>, TypeParent, Context>;

  board?: QueryBoardResolver<Maybe<Board>, TypeParent, Context>;

  list?: QueryListResolver<Maybe<List>, TypeParent, Context>;
}

export type QueryMeResolver<
  R = Maybe<User>,
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context>;
export type QueryBoardResolver<
  R = Maybe<Board>,
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context, QueryBoardArgs>;
export interface QueryBoardArgs {
  where: BoardWhereUniqueInput;
}

export type QueryListResolver<
  R = Maybe<List>,
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context, QueryListArgs>;
export interface QueryListArgs {
  where: ListWhereUniqueInput;
}

export interface UserResolvers<Context = {}, TypeParent = User> {
  id?: UserIdResolver<string, TypeParent, Context>;

  email?: UserEmailResolver<string, TypeParent, Context>;

  name?: UserNameResolver<string, TypeParent, Context>;

  avatarUrl?: UserAvatarUrlResolver<Maybe<string>, TypeParent, Context>;

  boards?: UserBoardsResolver<Maybe<Board[]>, TypeParent, Context>;
}

export type UserIdResolver<R = string, Parent = User, Context = {}> = Resolver<
  R,
  Parent,
  Context
>;
export type UserEmailResolver<
  R = string,
  Parent = User,
  Context = {}
> = Resolver<R, Parent, Context>;
export type UserNameResolver<
  R = string,
  Parent = User,
  Context = {}
> = Resolver<R, Parent, Context>;
export type UserAvatarUrlResolver<
  R = Maybe<string>,
  Parent = User,
  Context = {}
> = Resolver<R, Parent, Context>;
export type UserBoardsResolver<
  R = Maybe<Board[]>,
  Parent = User,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface BoardResolvers<Context = {}, TypeParent = Board> {
  id?: BoardIdResolver<string, TypeParent, Context>;

  lists?: BoardListsResolver<Maybe<List[]>, TypeParent, Context>;

  name?: BoardNameResolver<string, TypeParent, Context>;

  updatedBy?: BoardUpdatedByResolver<Maybe<User>, TypeParent, Context>;

  createdAt?: BoardCreatedAtResolver<DateTime, TypeParent, Context>;

  updatedAt?: BoardUpdatedAtResolver<DateTime, TypeParent, Context>;
}

export type BoardIdResolver<
  R = string,
  Parent = Board,
  Context = {}
> = Resolver<R, Parent, Context>;
export type BoardListsResolver<
  R = Maybe<List[]>,
  Parent = Board,
  Context = {}
> = Resolver<R, Parent, Context, BoardListsArgs>;
export interface BoardListsArgs {
  where?: Maybe<ListWhereInput>;

  orderBy?: Maybe<ListOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}

export type BoardNameResolver<
  R = string,
  Parent = Board,
  Context = {}
> = Resolver<R, Parent, Context>;
export type BoardUpdatedByResolver<
  R = Maybe<User>,
  Parent = Board,
  Context = {}
> = Resolver<R, Parent, Context>;
export type BoardCreatedAtResolver<
  R = DateTime,
  Parent = Board,
  Context = {}
> = Resolver<R, Parent, Context>;
export type BoardUpdatedAtResolver<
  R = DateTime,
  Parent = Board,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface ListResolvers<Context = {}, TypeParent = List> {
  cards?: ListCardsResolver<Maybe<Card[]>, TypeParent, Context>;

  id?: ListIdResolver<string, TypeParent, Context>;

  name?: ListNameResolver<string, TypeParent, Context>;

  updatedBy?: ListUpdatedByResolver<Maybe<User>, TypeParent, Context>;

  createdAt?: ListCreatedAtResolver<DateTime, TypeParent, Context>;

  updatedAt?: ListUpdatedAtResolver<DateTime, TypeParent, Context>;
}

export type ListCardsResolver<
  R = Maybe<Card[]>,
  Parent = List,
  Context = {}
> = Resolver<R, Parent, Context, ListCardsArgs>;
export interface ListCardsArgs {
  where?: Maybe<CardWhereInput>;

  orderBy?: Maybe<CardOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}

export type ListIdResolver<R = string, Parent = List, Context = {}> = Resolver<
  R,
  Parent,
  Context
>;
export type ListNameResolver<
  R = string,
  Parent = List,
  Context = {}
> = Resolver<R, Parent, Context>;
export type ListUpdatedByResolver<
  R = Maybe<User>,
  Parent = List,
  Context = {}
> = Resolver<R, Parent, Context>;
export type ListCreatedAtResolver<
  R = DateTime,
  Parent = List,
  Context = {}
> = Resolver<R, Parent, Context>;
export type ListUpdatedAtResolver<
  R = DateTime,
  Parent = List,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface CardResolvers<Context = {}, TypeParent = Card> {
  id?: CardIdResolver<string, TypeParent, Context>;

  name?: CardNameResolver<string, TypeParent, Context>;

  description?: CardDescriptionResolver<Maybe<string>, TypeParent, Context>;

  updatedBy?: CardUpdatedByResolver<Maybe<User>, TypeParent, Context>;

  createdAt?: CardCreatedAtResolver<DateTime, TypeParent, Context>;

  updatedAt?: CardUpdatedAtResolver<DateTime, TypeParent, Context>;
}

export type CardIdResolver<R = string, Parent = Card, Context = {}> = Resolver<
  R,
  Parent,
  Context
>;
export type CardNameResolver<
  R = string,
  Parent = Card,
  Context = {}
> = Resolver<R, Parent, Context>;
export type CardDescriptionResolver<
  R = Maybe<string>,
  Parent = Card,
  Context = {}
> = Resolver<R, Parent, Context>;
export type CardUpdatedByResolver<
  R = Maybe<User>,
  Parent = Card,
  Context = {}
> = Resolver<R, Parent, Context>;
export type CardCreatedAtResolver<
  R = DateTime,
  Parent = Card,
  Context = {}
> = Resolver<R, Parent, Context>;
export type CardUpdatedAtResolver<
  R = DateTime,
  Parent = Card,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface MutationResolvers<Context = {}, TypeParent = {}> {
  createBoard?: MutationCreateBoardResolver<User, TypeParent, Context>;

  deleteBoard?: MutationDeleteBoardResolver<Board, TypeParent, Context>;

  signup?: MutationSignupResolver<AuthPayload, TypeParent, Context>;

  login?: MutationLoginResolver<AuthPayload, TypeParent, Context>;

  updateBoard?: MutationUpdateBoardResolver<Maybe<Board>, TypeParent, Context>;

  updateList?: MutationUpdateListResolver<Maybe<List>, TypeParent, Context>;

  updateCard?: MutationUpdateCardResolver<Card, TypeParent, Context>;

  deleteList?: MutationDeleteListResolver<Maybe<List>, TypeParent, Context>;
}

export type MutationCreateBoardResolver<
  R = User,
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context, MutationCreateBoardArgs>;
export interface MutationCreateBoardArgs {
  name: string;
}

export type MutationDeleteBoardResolver<
  R = Board,
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context, MutationDeleteBoardArgs>;
export interface MutationDeleteBoardArgs {
  id: string;
}

export type MutationSignupResolver<
  R = AuthPayload,
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context, MutationSignupArgs>;
export interface MutationSignupArgs {
  email: string;

  password: string;

  name: string;

  avatarUrl?: Maybe<string>;
}

export type MutationLoginResolver<
  R = AuthPayload,
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context, MutationLoginArgs>;
export interface MutationLoginArgs {
  email: string;

  password: string;
}

export type MutationUpdateBoardResolver<
  R = Maybe<Board>,
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context, MutationUpdateBoardArgs>;
export interface MutationUpdateBoardArgs {
  data: BoardUpdateInput;

  where: BoardWhereUniqueInput;
}

export type MutationUpdateListResolver<
  R = Maybe<List>,
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context, MutationUpdateListArgs>;
export interface MutationUpdateListArgs {
  data: ListUpdateInput;

  where: ListWhereUniqueInput;
}

export type MutationUpdateCardResolver<
  R = Card,
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context, MutationUpdateCardArgs>;
export interface MutationUpdateCardArgs {
  data: CardUpdateInput;

  where: CardWhereUniqueInput;
}

export type MutationDeleteListResolver<
  R = Maybe<List>,
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context, MutationDeleteListArgs>;
export interface MutationDeleteListArgs {
  where: ListWhereUniqueInput;
}

export interface AuthPayloadResolvers<Context = {}, TypeParent = AuthPayload> {
  token?: AuthPayloadTokenResolver<string, TypeParent, Context>;

  user?: AuthPayloadUserResolver<User, TypeParent, Context>;
}

export type AuthPayloadTokenResolver<
  R = string,
  Parent = AuthPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type AuthPayloadUserResolver<
  R = User,
  Parent = AuthPayload,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface SubscriptionResolvers<Context = {}, TypeParent = {}> {
  board?: SubscriptionBoardResolver<
    Maybe<BoardSubscriptionPayload>,
    TypeParent,
    Context
  >;

  list?: SubscriptionListResolver<
    Maybe<ListSubscriptionPayload>,
    TypeParent,
    Context
  >;

  card?: SubscriptionCardResolver<
    Maybe<CardSubscriptionPayload>,
    TypeParent,
    Context
  >;

  user?: SubscriptionUserResolver<
    Maybe<UserSubscriptionPayload>,
    TypeParent,
    Context
  >;
}

export type SubscriptionBoardResolver<
  R = Maybe<BoardSubscriptionPayload>,
  Parent = {},
  Context = {}
> = SubscriptionResolver<R, Parent, Context, SubscriptionBoardArgs>;
export interface SubscriptionBoardArgs {
  where?: Maybe<BoardSubscriptionWhereInput>;
}

export type SubscriptionListResolver<
  R = Maybe<ListSubscriptionPayload>,
  Parent = {},
  Context = {}
> = SubscriptionResolver<R, Parent, Context, SubscriptionListArgs>;
export interface SubscriptionListArgs {
  where?: Maybe<ListSubscriptionWhereInput>;
}

export type SubscriptionCardResolver<
  R = Maybe<CardSubscriptionPayload>,
  Parent = {},
  Context = {}
> = SubscriptionResolver<R, Parent, Context, SubscriptionCardArgs>;
export interface SubscriptionCardArgs {
  where?: Maybe<CardSubscriptionWhereInput>;
}

export type SubscriptionUserResolver<
  R = Maybe<UserSubscriptionPayload>,
  Parent = {},
  Context = {}
> = SubscriptionResolver<R, Parent, Context, SubscriptionUserArgs>;
export interface SubscriptionUserArgs {
  where?: Maybe<UserSubscriptionWhereInput>;
}

export interface BoardSubscriptionPayloadResolvers<
  Context = {},
  TypeParent = BoardSubscriptionPayload
> {
  mutation?: BoardSubscriptionPayloadMutationResolver<
    MutationType,
    TypeParent,
    Context
  >;

  node?: BoardSubscriptionPayloadNodeResolver<
    Maybe<Board>,
    TypeParent,
    Context
  >;

  updatedFields?: BoardSubscriptionPayloadUpdatedFieldsResolver<
    Maybe<string[]>,
    TypeParent,
    Context
  >;

  previousValues?: BoardSubscriptionPayloadPreviousValuesResolver<
    Maybe<BoardPreviousValues>,
    TypeParent,
    Context
  >;
}

export type BoardSubscriptionPayloadMutationResolver<
  R = MutationType,
  Parent = BoardSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type BoardSubscriptionPayloadNodeResolver<
  R = Maybe<Board>,
  Parent = BoardSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type BoardSubscriptionPayloadUpdatedFieldsResolver<
  R = Maybe<string[]>,
  Parent = BoardSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type BoardSubscriptionPayloadPreviousValuesResolver<
  R = Maybe<BoardPreviousValues>,
  Parent = BoardSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface BoardPreviousValuesResolvers<
  Context = {},
  TypeParent = BoardPreviousValues
> {
  id?: BoardPreviousValuesIdResolver<string, TypeParent, Context>;

  name?: BoardPreviousValuesNameResolver<string, TypeParent, Context>;

  createdAt?: BoardPreviousValuesCreatedAtResolver<
    DateTime,
    TypeParent,
    Context
  >;

  updatedAt?: BoardPreviousValuesUpdatedAtResolver<
    DateTime,
    TypeParent,
    Context
  >;
}

export type BoardPreviousValuesIdResolver<
  R = string,
  Parent = BoardPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type BoardPreviousValuesNameResolver<
  R = string,
  Parent = BoardPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type BoardPreviousValuesCreatedAtResolver<
  R = DateTime,
  Parent = BoardPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type BoardPreviousValuesUpdatedAtResolver<
  R = DateTime,
  Parent = BoardPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface ListSubscriptionPayloadResolvers<
  Context = {},
  TypeParent = ListSubscriptionPayload
> {
  mutation?: ListSubscriptionPayloadMutationResolver<
    MutationType,
    TypeParent,
    Context
  >;

  node?: ListSubscriptionPayloadNodeResolver<Maybe<List>, TypeParent, Context>;

  updatedFields?: ListSubscriptionPayloadUpdatedFieldsResolver<
    Maybe<string[]>,
    TypeParent,
    Context
  >;

  previousValues?: ListSubscriptionPayloadPreviousValuesResolver<
    Maybe<ListPreviousValues>,
    TypeParent,
    Context
  >;
}

export type ListSubscriptionPayloadMutationResolver<
  R = MutationType,
  Parent = ListSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type ListSubscriptionPayloadNodeResolver<
  R = Maybe<List>,
  Parent = ListSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type ListSubscriptionPayloadUpdatedFieldsResolver<
  R = Maybe<string[]>,
  Parent = ListSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type ListSubscriptionPayloadPreviousValuesResolver<
  R = Maybe<ListPreviousValues>,
  Parent = ListSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface ListPreviousValuesResolvers<
  Context = {},
  TypeParent = ListPreviousValues
> {
  id?: ListPreviousValuesIdResolver<string, TypeParent, Context>;

  name?: ListPreviousValuesNameResolver<string, TypeParent, Context>;

  createdAt?: ListPreviousValuesCreatedAtResolver<
    DateTime,
    TypeParent,
    Context
  >;

  updatedAt?: ListPreviousValuesUpdatedAtResolver<
    DateTime,
    TypeParent,
    Context
  >;
}

export type ListPreviousValuesIdResolver<
  R = string,
  Parent = ListPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type ListPreviousValuesNameResolver<
  R = string,
  Parent = ListPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type ListPreviousValuesCreatedAtResolver<
  R = DateTime,
  Parent = ListPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type ListPreviousValuesUpdatedAtResolver<
  R = DateTime,
  Parent = ListPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface CardSubscriptionPayloadResolvers<
  Context = {},
  TypeParent = CardSubscriptionPayload
> {
  mutation?: CardSubscriptionPayloadMutationResolver<
    MutationType,
    TypeParent,
    Context
  >;

  node?: CardSubscriptionPayloadNodeResolver<Maybe<Card>, TypeParent, Context>;

  updatedFields?: CardSubscriptionPayloadUpdatedFieldsResolver<
    Maybe<string[]>,
    TypeParent,
    Context
  >;

  previousValues?: CardSubscriptionPayloadPreviousValuesResolver<
    Maybe<CardPreviousValues>,
    TypeParent,
    Context
  >;
}

export type CardSubscriptionPayloadMutationResolver<
  R = MutationType,
  Parent = CardSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type CardSubscriptionPayloadNodeResolver<
  R = Maybe<Card>,
  Parent = CardSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type CardSubscriptionPayloadUpdatedFieldsResolver<
  R = Maybe<string[]>,
  Parent = CardSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type CardSubscriptionPayloadPreviousValuesResolver<
  R = Maybe<CardPreviousValues>,
  Parent = CardSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface CardPreviousValuesResolvers<
  Context = {},
  TypeParent = CardPreviousValues
> {
  id?: CardPreviousValuesIdResolver<string, TypeParent, Context>;

  name?: CardPreviousValuesNameResolver<string, TypeParent, Context>;

  description?: CardPreviousValuesDescriptionResolver<
    Maybe<string>,
    TypeParent,
    Context
  >;

  createdAt?: CardPreviousValuesCreatedAtResolver<
    DateTime,
    TypeParent,
    Context
  >;

  updatedAt?: CardPreviousValuesUpdatedAtResolver<
    DateTime,
    TypeParent,
    Context
  >;
}

export type CardPreviousValuesIdResolver<
  R = string,
  Parent = CardPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type CardPreviousValuesNameResolver<
  R = string,
  Parent = CardPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type CardPreviousValuesDescriptionResolver<
  R = Maybe<string>,
  Parent = CardPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type CardPreviousValuesCreatedAtResolver<
  R = DateTime,
  Parent = CardPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type CardPreviousValuesUpdatedAtResolver<
  R = DateTime,
  Parent = CardPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface UserSubscriptionPayloadResolvers<
  Context = {},
  TypeParent = UserSubscriptionPayload
> {
  mutation?: UserSubscriptionPayloadMutationResolver<
    MutationType,
    TypeParent,
    Context
  >;

  node?: UserSubscriptionPayloadNodeResolver<Maybe<User>, TypeParent, Context>;

  updatedFields?: UserSubscriptionPayloadUpdatedFieldsResolver<
    Maybe<string[]>,
    TypeParent,
    Context
  >;

  previousValues?: UserSubscriptionPayloadPreviousValuesResolver<
    Maybe<UserPreviousValues>,
    TypeParent,
    Context
  >;
}

export type UserSubscriptionPayloadMutationResolver<
  R = MutationType,
  Parent = UserSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type UserSubscriptionPayloadNodeResolver<
  R = Maybe<User>,
  Parent = UserSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type UserSubscriptionPayloadUpdatedFieldsResolver<
  R = Maybe<string[]>,
  Parent = UserSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;
export type UserSubscriptionPayloadPreviousValuesResolver<
  R = Maybe<UserPreviousValues>,
  Parent = UserSubscriptionPayload,
  Context = {}
> = Resolver<R, Parent, Context>;

export interface UserPreviousValuesResolvers<
  Context = {},
  TypeParent = UserPreviousValues
> {
  id?: UserPreviousValuesIdResolver<string, TypeParent, Context>;

  email?: UserPreviousValuesEmailResolver<string, TypeParent, Context>;

  password?: UserPreviousValuesPasswordResolver<string, TypeParent, Context>;

  name?: UserPreviousValuesNameResolver<string, TypeParent, Context>;

  avatarUrl?: UserPreviousValuesAvatarUrlResolver<
    Maybe<string>,
    TypeParent,
    Context
  >;
}

export type UserPreviousValuesIdResolver<
  R = string,
  Parent = UserPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type UserPreviousValuesEmailResolver<
  R = string,
  Parent = UserPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type UserPreviousValuesPasswordResolver<
  R = string,
  Parent = UserPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type UserPreviousValuesNameResolver<
  R = string,
  Parent = UserPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;
export type UserPreviousValuesAvatarUrlResolver<
  R = Maybe<string>,
  Parent = UserPreviousValues,
  Context = {}
> = Resolver<R, Parent, Context>;

/** An object with an ID */
export interface NodeResolvers {
  __resolveType: NodeResolveType;
}
export type NodeResolveType<
  R = "Board" | "List" | "Card",
  Parent = Board | List | Card,
  Context = {}
> = TypeResolveFn<R, Parent, Context>;

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  {}
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  {}
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<DateTime, any> {
  name: "DateTime";
}

export interface IResolvers<Context = {}> {
  Query?: QueryResolvers<Context>;
  User?: UserResolvers<Context>;
  Board?: BoardResolvers<Context>;
  List?: ListResolvers<Context>;
  Card?: CardResolvers<Context>;
  Mutation?: MutationResolvers<Context>;
  AuthPayload?: AuthPayloadResolvers<Context>;
  Subscription?: SubscriptionResolvers<Context>;
  BoardSubscriptionPayload?: BoardSubscriptionPayloadResolvers<Context>;
  BoardPreviousValues?: BoardPreviousValuesResolvers<Context>;
  ListSubscriptionPayload?: ListSubscriptionPayloadResolvers<Context>;
  ListPreviousValues?: ListPreviousValuesResolvers<Context>;
  CardSubscriptionPayload?: CardSubscriptionPayloadResolvers<Context>;
  CardPreviousValues?: CardPreviousValuesResolvers<Context>;
  UserSubscriptionPayload?: UserSubscriptionPayloadResolvers<Context>;
  UserPreviousValues?: UserPreviousValuesResolvers<Context>;
  Node?: NodeResolvers<Context>;
  DateTime?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
