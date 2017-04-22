import keyMirror from 'keymirror';

module.exports = {
  ActionTypes: keyMirror({

    /**
     * Common
     */
    COOKIE_ITEM_SET: null,

    /**
     * Sign up
     */
    SIGN_UP_FIELD_CHANGE: null,
    SIGN_UP_REQUEST_START: null,
    SIGN_UP_FAIL: null,
    SIGN_UP_SUCCESS: null,

    /**
     * Sign in
     */
    SIGN_IN_FIELD_CHANGE: null,
    SIGN_IN_REQUEST_START: null,
    SIGN_IN_FAIL: null,
    SIGN_IN_SUCCESS: null,

    /**
     * Logout
     */
    LOGOUT: null,

    /**
     * Header
     */
    CHANGE_NAVBAR_TOGGLE_ICON: null,

    /**
     * User
     */
    GET_CURRENT_USER_PROFILE: null,
    UPDATE_CURRENT_USER_PROFILE_REQUEST_START: null,
    UPDATE_CURRENT_USER_PROFILE_SUCCESS: null,
    UPDATE_CURRENT_USER_PROFILE_FAIL: null,
    EDIT_PROFILE_BUTTON_CLICK: null,
    EDIT_PROFILE_FIELD_CHANGE: null,
    CHANGE_USER_AVATAR_PREVIEW: null,
    GET_USER_TYPES_REQUST_START: null,
    GET_USER_TYPES_SUCCESS: null,
    GET_USER_TYPES_FAIL: null,

    /**
     * FAQ
     */
    GET_FAQ_REQUEST_START: null,
    GET_FAQ_SUCCESS: null,
    GET_FAQ_FAIL: null,

    /**
     * Update password
     */
    UPDATE_PASSWORD_FIELD_CHANGE: null,
    UPDATE_PASSWORD_REQUEST_START: null,
    UPDATE_PASSWORD_SUCCESS: null,
    UPDATE_PASSWORD_FAIL: null,
    
    /**
     * Restore password
     */
    RESTORE_PASSWORD_FIELD_CHANGE: null,
    RESTORE_PASSWORD_REQUEST_START: null,
    RESTORE_PASSWORD_FAIL: null,
    RESTORE_PASSWORD_SUCCESS: null
  }),

  Routes: {
    DEFAULT_ROUTE_FOR_MEMBER: '/myprofile',
    DEFAULT_ROUTE_FOR_GUEST: '/sign-in',
    SIGNIN: '/sign-in',
    SIGNUP: '/sign-up',
    MYPROFILE: '/myprofile',
    UPDATE_PASSWORD: '/update-password',
    RESTORE_PASSWORD: '/restore-password',
    FAQ: '/faq'
  },

  PROJECT_NAME: 'GrainBroker',
  BASE_PRIVATE_URL: 'https://api.veles.trade/v1/producer/',
  BASE_PUBLIC_URL: 'https://api.veles.trade/v1/public/',
  DEFAULT_LANGUAGE: 'en',
  AVAILABLE_LANGUAGES: ['en', 'ru', 'uk'],
  CHANGE_EVENT: 'change',
  UserTypes: {
    DEFAULT: 7,
    GENERIC: 999
  },

  /*
   * Session data
  */
  STORAGE_LANGUAGE_KEY: 'i18nextLng',
  AUTHENTICATION_COOKIE_NAME: 'token',
  USER_ID_COOKIE_NAME: 'uuid',
  USER_OBJECT_STORAGE_NAME: 'user',
  DOMAIN: location.hostname,
  PATH: '/',
  SECURE: !__DEV__
};
