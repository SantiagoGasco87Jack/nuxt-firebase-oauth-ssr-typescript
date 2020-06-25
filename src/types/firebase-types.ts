import { ProviderData } from "~/types/api-types";

export enum FirebaseAuthAction {
  VERIFY_EMAIL = 'verifyEmail',
  RECOVERY_EMAIL = 'recoverEmail',
  RESET_PASSWORD = 'resetPassword'
}

export enum FirebaseAuthActionParams {
  ACTION = 'mode',
  ACTION_CODE = 'oobCode'
}

export interface RegistrationCredentials {
  name: string
  email: string
  password: string
}

export interface LoginCredentials {
  email: string
  password: string
  rememberMe: boolean
}

export interface SocialLoginCredentials {
  providerType: ProviderType
  rememberMe: boolean
}

export enum FirebaseClaimKey {
  USER_ID = 'user_id',
  USERNAME = 'username',
  NAME = 'name',
  EMAIL = 'email',
  EMAIL_VERIFIED = 'email_verified',
  PICTURE = 'picture',
  FIREBASE = 'firebase',
}

export interface FirebaseClaims {
  [FirebaseClaimKey.USERNAME]: string
}

export interface StorageRef {
  folderRef: string
  parameters?: any
}

export const ProfilePhotoStorageRef: StorageRef = {
  folderRef: 'user/:userId/profilePhoto/',
  parameters: {
    userId: ':userId'
  }
}

export const CoverPhotoStorageRef: StorageRef = {
  folderRef: 'user/:userId/coverPhoto/',
  parameters: {
    userId: ':userId'
  }
}

export enum ProviderType {
  PASSWORD = 'password',
  GOOGLE = 'google.com',
  TWITTER = 'twitter.com',
  FACEBOOK = 'facebook.com',
}

export interface ProviderConfig {
  providerType: ProviderType
  colorType: string
  icon: string
  iconPack: string
}

export const SupportedProviders: ProviderConfig[] = [
  {
    providerType: ProviderType.PASSWORD,
    colorType: 'is-primary',
    icon: 'at',
    iconPack: 'fas',
  },
  {
    providerType: ProviderType.GOOGLE,
    colorType: 'is-danger',
    icon: 'google',
    iconPack: 'fab',
  },
  {
    providerType: ProviderType.TWITTER,
    colorType: 'is-info',
    icon: 'twitter',
    iconPack: 'fab',
  },
  {
    providerType: ProviderType.FACEBOOK,
    colorType: 'is-link',
    icon: 'facebook',
    iconPack: 'fab',
  },
];

export interface ProviderLink {
  providerConfig: ProviderConfig
  providerData?: ProviderData
  linked: boolean
  method: () => void
}

export interface Image {
  src: string
  alt: string
  name?: string
  default?: boolean
  preview?: Image
}

export enum PrivacyType {
  PRIVATE = 'private',
  PUBLIC = 'public'
}

export interface PrivacyConfig {
  privacyType: PrivacyType
  colorType: string
  icon: string
  type: string
  iconPack?: string
}

export const PrivacyList: PrivacyConfig[] = [
  {
    privacyType: PrivacyType.PRIVATE,
    colorType: 'is-danger',
    icon: 'account-remove-outline',
    type: 'is-danger'
  },
  {
    privacyType: PrivacyType.PUBLIC,
    colorType: 'is-primary',
    icon: 'earth',
    type: 'is-primary'
  }
]

export interface SearchData {
  name: string,
  username: string,
  profilePhoto: Image
}

export interface PagingResponse<T> {
  totalPage: number,
  data: T[],
}

/**
 * firestore collection models
 */

export enum FirebaseQueryOperator {
  LT = '<',
  LE = '<=',
  EQ = '==',
  GE = '>=',
  GT = '>',
  IN = 'in',
  ARRAY_CONTAINS = 'array-contains',
  ARRAY_CONTAINS_ANY = 'array-contains-any'
}

export interface WhereClause {
  field: string
  operator: FirebaseQueryOperator
  value: any
}


export enum collection {
  USER = 'user',
}

export interface BaseModel {
  id?: string
  createdAt?: Date
  createdBy?: string
  updatedAt?: Date
  updatedBy?: string
}

export interface User extends BaseModel {
  username?: string
  name?: string
  surname?: string
  email?: string
  privacy?: PrivacyType
  biography?: string
  profilePhoto?: Image
  coverPhoto?: Image
}
