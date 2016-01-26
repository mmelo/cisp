<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'cisp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Sh>+h27|1It8kOOS19gf5S0F>k-TYeX1%S;}s/m7(l57}NW0vQ>4Hg}yz&i~O<Q/');
define('SECURE_AUTH_KEY',  'g|@lI|?w6K~5fOHcZY3+GlI8]D3wq$K|sGX&a;)n.S!d+A/H{mj!bt;6rgsv;:&C');
define('LOGGED_IN_KEY',    'KE-fune56m^(XFllRu}+W/P&d-0vY|Kxg^B1+=L*zg|pWY+[^w|N-@|wqd?RHxX>');
define('NONCE_KEY',        'C{nD)sS,r>&VY[YZjp)$t*pX3h+MUwLc| 2)fe!kEg8y=L|Mi~O3TC+-lL*+;>0T');
define('AUTH_SALT',        'a;QRc+Qkd/4n44_}P$blw+0D=:Hs0Z[Lo8@3]-_M{#Y<VT$xOv_7%7fQcj~hX.9_');
define('SECURE_AUTH_SALT', '.b*d2%rx*XNNJiQcEbL~~VOAmyPuPBfLGIh;s0wSc-%RSbxJ{-AUs}`HJoB)4lu[');
define('LOGGED_IN_SALT',   '6Pe6zJ-l2IPL9L$nlyp[#/l>;/(w~kNP |IC;l9w<Cn861DDFcp;i&iuWp7V0e~4');
define('NONCE_SALT',       'Wm.v?$V&K!RMmvadP+O{x%<M5Uh3+bv95FP Dv[ (L=FfPo;g|_jt@)}EKEoH}yn');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
