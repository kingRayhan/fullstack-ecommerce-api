import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  /*
    |--------------------------------------------------------------------------
    | Application Name
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's name in a notification or
    | any other location as required by the application or its packages.
    |
    */
  name: process.env.APP_NAME || 'NestJS App',
  /*
    |--------------------------------------------------------------------------
    | Application PORT
    |--------------------------------------------------------------------------
    | This value determines the port that the application will run on.
    | Set this in your ".env" file.
    | If not set, the default value is 3000.
    */
  PORT: process.env.PORT || 3000,

  /*
    |--------------------------------------------------------------------------
    | Application Documentation Url suffix (e.g. /docs)
    |--------------------------------------------------------------------------
    | This value determines the suffix of the API documentation url.
    | Set this in your ".env" file.
    | If not set, the default value is "docs".
    */
  doc: process.env.APP_DOC || 'docs',

  /*
    |--------------------------------------------------------------------------
    | Application Cache
    |--------------------------------------------------------------------------
    | This value determines if the application will use cache.
    | Set this in your ".env" file.
    | If not set, the default value is true.
    |
    */
  cache: process.env.APP_CACHE || false,
}));
