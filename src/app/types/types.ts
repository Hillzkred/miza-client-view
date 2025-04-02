type NumberFormat =
  | "number"
  | "number_with_commas"
  | "percent"
  | "dollar"
  | "australian_dollar"
  | "canadian_dollar"
  | "singapore_dollar"
  | "euro"
  | "pound"
  | "yen"
  | "ruble"
  | "rupee"
  | "won"
  | "yuan"
  | "real"
  | "lira"
  | "rupiah"
  | "franc"
  | "hong_kong_dollar"
  | "new_zealand_dollar"
  | "krona"
  | "norwegian_krone"
  | "mexican_peso"
  | "rand"
  | "new_taiwan_dollar"
  | "danish_krone"
  | "zloty"
  | "baht"
  | "forint"
  | "koruna"
  | "shekel"
  | "chilean_peso"
  | "philippine_peso"
  | "dirham"
  | "colombian_peso"
  | "riyal"
  | "ringgit"
  | "leu"
  | "argentine_peso"
  | "uruguayan_peso"
  | "peruvian_sol";

type PropertyDescriptionRequest = string;

type NumberDatabasePropertyConfigResponse = {
  type: "number";
  number: {
    format: NumberFormat;
  };
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type FormulaDatabasePropertyConfigResponse = {
  type: "formula";
  formula: {
    expression: string;
  };
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type StringRequest = string;

type SelectColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";

type RollupFunction =
  | "count"
  | "count_values"
  | "empty"
  | "not_empty"
  | "unique"
  | "show_unique"
  | "percent_empty"
  | "percent_not_empty"
  | "sum"
  | "average"
  | "median"
  | "min"
  | "max"
  | "range"
  | "earliest_date"
  | "latest_date"
  | "date_range"
  | "checked"
  | "unchecked"
  | "percent_checked"
  | "percent_unchecked"
  | "count_per_group"
  | "percent_per_group"
  | "show_original";

type IdRequest = string | string;

type SelectPropertyResponse = {
  id: StringRequest;
  name: StringRequest;
  color: SelectColor;
  description: StringRequest | null;
};

type SelectDatabasePropertyConfigResponse = {
  type: "select";
  select: {
    options: Array<SelectPropertyResponse>;
  };
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type MultiSelectDatabasePropertyConfigResponse = {
  type: "multi_select";
  multi_select: {
    options: Array<SelectPropertyResponse>;
  };
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type StatusPropertyResponse = {
  id: StringRequest;
  name: StringRequest;
  color: SelectColor;
  description: StringRequest | null;
};

type StatusDatabasePropertyConfigResponse = {
  type: "status";
  status: {
    options: Array<StatusPropertyResponse>;
    groups: Array<{
      id: StringRequest;
      name: StringRequest;
      color: SelectColor;
      option_ids: Array<string>;
    }>;
  };
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type SinglePropertyDatabasePropertyRelationConfigResponse = {
  type: "single_property";
  single_property: unknown;
  database_id: IdRequest;
};

type DualPropertyDatabasePropertyRelationConfigResponse = {
  type: "dual_property";
  dual_property: {
    synced_property_id: StringRequest;
    synced_property_name: StringRequest;
  };
  database_id: IdRequest;
};

type DatabasePropertyRelationConfigResponse =
  | SinglePropertyDatabasePropertyRelationConfigResponse
  | DualPropertyDatabasePropertyRelationConfigResponse;

type RelationDatabasePropertyConfigResponse = {
  type: "relation";
  relation: DatabasePropertyRelationConfigResponse;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type RollupDatabasePropertyConfigResponse = {
  type: "rollup";
  rollup: {
    rollup_property_name: string;
    relation_property_name: string;
    rollup_property_id: string;
    relation_property_id: string;
    function: RollupFunction;
  };
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type UniqueIdDatabasePropertyConfigResponse = {
  type: "unique_id";
  unique_id: {
    prefix: string | null;
  };
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type TitleDatabasePropertyConfigResponse = {
  type: "title";
  title: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type RichTextDatabasePropertyConfigResponse = {
  type: "rich_text";
  rich_text: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type UrlDatabasePropertyConfigResponse = {
  type: "url";
  url: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type PeopleDatabasePropertyConfigResponse = {
  type: "people";
  people: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type FilesDatabasePropertyConfigResponse = {
  type: "files";
  files: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type EmailDatabasePropertyConfigResponse = {
  type: "email";
  email: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type PhoneNumberDatabasePropertyConfigResponse = {
  type: "phone_number";
  phone_number: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type DateDatabasePropertyConfigResponse = {
  type: "date";
  date: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type CheckboxDatabasePropertyConfigResponse = {
  type: "checkbox";
  checkbox: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type CreatedByDatabasePropertyConfigResponse = {
  type: "created_by";
  created_by: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type CreatedTimeDatabasePropertyConfigResponse = {
  type: "created_time";
  created_time: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type LastEditedByDatabasePropertyConfigResponse = {
  type: "last_edited_by";
  last_edited_by: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

type LastEditedTimeDatabasePropertyConfigResponse = {
  type: "last_edited_time";
  last_edited_time: unknown;
  id: string;
  name: string;
  description: PropertyDescriptionRequest | null;
};

export type DatabasePropertyConfigResponse =
  | NumberDatabasePropertyConfigResponse
  | FormulaDatabasePropertyConfigResponse
  | SelectDatabasePropertyConfigResponse
  | MultiSelectDatabasePropertyConfigResponse
  | StatusDatabasePropertyConfigResponse
  | RelationDatabasePropertyConfigResponse
  | RollupDatabasePropertyConfigResponse
  | UniqueIdDatabasePropertyConfigResponse
  | TitleDatabasePropertyConfigResponse
  | RichTextDatabasePropertyConfigResponse
  | UrlDatabasePropertyConfigResponse
  | PeopleDatabasePropertyConfigResponse
  | FilesDatabasePropertyConfigResponse
  | EmailDatabasePropertyConfigResponse
  | PhoneNumberDatabasePropertyConfigResponse
  | DateDatabasePropertyConfigResponse
  | CheckboxDatabasePropertyConfigResponse
  | CreatedByDatabasePropertyConfigResponse
  | CreatedTimeDatabasePropertyConfigResponse
  | LastEditedByDatabasePropertyConfigResponse
  | LastEditedTimeDatabasePropertyConfigResponse;

// type DatabasePropertyConfigResponse<T> = {
//   [key: string]: T;
// };

// export type PropertiesObject = Record<string, DatabasePropertyConfigResponse>;
// export type PropertiesObject = DatabasePropertyConfigResponse;
