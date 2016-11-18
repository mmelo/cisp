'use strict';
//	var LIVERELOAD_PORT = 35730;
//	var SERVER_PORT = 3000;
//	var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
//	var mountFolder = function (connect, dir) {
//		return connect.static(require('path').resolve(dir));
//	};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'handlebars'

module.exports = function (grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	// configurable paths
	var yeomanConfig = {
		app: 'app',
		dist: 'dist'
	};

	grunt.initConfig({
		yeoman: yeomanConfig,
		watch: {
			options: {
				nospawn: true,
				//livereload: LIVERELOAD_PORT
			},
			sass: {
				files: ['<%= yeoman.app %>/styles/**/*.{scss,sass}'],
				tasks: ['sass:server']
			},
			handlebars: {
				files: [
					'<%= yeoman.app %>/scripts/templates/**/*.hbs'
				],
				tasks: ['handlebars']
			}
		},
		browserSync: {
			options: {
				watchTask: true,
				open : 'local',
				//https: true,
				ghostMode: {
					clicks: true,
					forms: true,
					scroll: true
				},
				server: {
					baseDir: "app"
				}
			},
			files: [
				'<%= yeoman.app %>/*.html',
				'<%= yeoman.app %>/styles/**/*.{scss,sass}',
				'{.tmp,<%= yeoman.app %>}/scripts/**/*.{js,hbs}',
				'<%= yeoman.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
				'<%= yeoman.app %>/locales/**/*',
				'<%= yeoman.app %>/fixtures/**/*'
			]
		},
		clean: {
			dist: ['.tmp', '<%= yeoman.dist %>/*'],
			server: '.tmp'
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'<%= yeoman.app %>/scripts/**/*.js',
				'!<%= yeoman.app %>/scripts/vendor/*',
				'!<%= yeoman.app %>/scripts/helpers/backbone/localStorage.js',
				'!<%= yeoman.app %>/scripts/helpers/handlebars/helpers.js'
			]
		},
		sass: {
			options: {
				sourceMap: true,
				style: 'compressed'
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/styles',
					src: ['*.{scss,sass}'],
					dest: '<%= yeoman.dist %>/styles',
					ext: '.css'
				}]
			},
			server: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/styles',
					src: ['*.{scss,sass}'],
					dest: '<%= yeoman.app %>/styles',
					ext: '.css'
				}]
			}
		},
		requirejs: {
			dist: {
				// Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
				options: {
					almond: true,
					name: 'config',
					out: '<%= yeoman.dist %>/bower_components/requirejs/require.js',
					mainConfigFile: 'app/scripts/config.js',
					baseUrl: '<%= yeoman.app %>/scripts',
					optimize: 'uglify2',
					paths: {
						'text': '../../<%= yeoman.app %>/bower_components/requirejs-text/text',
						'templates': '../../<%= yeoman.app %>/scripts/templates',
						'jquery': '../../<%= yeoman.app %>/scripts/vendor/zepto',
						'backbone': '../../<%= yeoman.app %>/bower_components/backbone/backbone-min',
						'underscore': '../../<%= yeoman.app %>/bower_components/lodash/lodash.min'
					},
					inlineText: true,
					subModules: ['text'],
					preserveLicenseComments: false,
					useStrict: true,
					screwIE8: true,
					uglify2: {
						compress: {
							sequences: true,
							dead_code: true,
							drop_debugger: true,
							conditionals: true,
							comparisons: true,
							booleans: true,
							loops: true,
							unused: true,
							hoist_funs: true,
							if_return: true,
							join_vars: true,
							cascade: true,
							drop_console: true
						}
					} // https://github.com/mishoo/UglifyJS2
				}
			}
		},
		useminPrepare: {
			html: '<%= yeoman.app %>/index.html',
			options: {
				dest: '<%= yeoman.dist %>'
			}
		},
		usemin: {
			html: ['<%= yeoman.dist %>/{,*/}*.html'],
			css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
			options: {
				dirs: ['<%= yeoman.dist %>']
			}
		},
		imagemin: {
			options: {
				optimizationLevel: 1
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/images',
					src: '{,*/}*.{png,jpg,jpeg}',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		cssmin: {
			dist: {
				options: {
					benchmark: true,//keep this to track css performance and overall health
					sourceMap: true
				},
				files: [{
					'<%= yeoman.dist %>/styles/main.css': [
						'<%= yeoman.app %>/styles/{,*/}*.css'
					]
				}]
			}
		},
		htmlmin: {
			dist: {
				options: {
					// removeCommentsFromCDATA: true,
					// https://github.com/yeoman/grunt-usemin/issues/44
					// collapseWhitespace: true,
					// collapseBooleanAttributes: true,
					// removeAttributeQuotes: true,
					// removeRedundantAttributes: true,
					// useShortDoctype: true,
					// removeEmptyAttributes: true,
					// removeOptionalTags: true
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>',
					src: '*.html',
					dest: '<%= yeoman.dist %>'
				}]
			}
		},
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico,txt}',
						'images/**/*',
						'styles/fonts/{,*/}*.*',
						'i18n/**/*',
						'locales/**/*',
						'fixtures/**/*'
					]
				}, {
					//src: 'node_modules/apache-server-configs/dist/.htaccess',
					src: '<%= yeoman.app %>/.htaccess_prd',
					dest: '<%= yeoman.dist %>/.htaccess'
				}]
			}
		},
		bower: {
			all: {
				rjsConfig: '<%= yeoman.app %>/scripts/main.js'
			}
		},
		handlebars: {
			compile: {
				options: {
					namespace: 'JST',
					amd: true
				},
				files: {
					'<%= yeoman.app %>/scripts/templates.js': ['<%= yeoman.app %>/scripts/templates/**/*.hbs']
				}
			}
		},
		rev: {
			dist: {
				files: {
					src: [
						'<%= yeoman.dist %>/scripts/{,*/}*.js',
						'<%= yeoman.dist %>/styles/{,*/}*.css',
						'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,svg}',
						'/styles/fonts/{,*/}*.*'
					]
				}
			}
		},
		autoprefixer: {
			dev: {
				src: '<%= yeoman.app %>/styles/main.css',
				dest: '<%= yeoman.app %>/styles/main.css'
			},
			dist: {
				src: '<%= yeoman.dist %>/styles/main.css',
				dest: '<%= yeoman.dist %>/styles/main.css'
			}
		},
		jsdoc : {
			dist : {
				src: ['<%= yeoman.app %>/scripts/**/*.js'],
				options: {
					destination: 'doc'
				}
			}
		}
	});

	grunt.registerTask('createDefaultTemplate', function () {
		grunt.file.write('.tmp/scripts/templates.js', 'this.JST = this.JST || {};');
	});

	grunt.registerTask('server', function (target) {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve' + (target ? ':' + target : '')]);
	});

	grunt.registerTask('serve', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'open:server']);
		}

		grunt.task.run([
			'clean:server',
			'createDefaultTemplate',
			'handlebars',
			'sass:server',
			'browserSync',
			'watch'
		]);
	});

	grunt.registerTask('build', [
		'clean:dist',
		'createDefaultTemplate',
		'handlebars',
		'sass:dist',
		'useminPrepare',
		'requirejs',

		'htmlmin',
		'cssmin',
		'copy',
		'autoprefixer:dist',
		'usemin'
	]);

	grunt.registerTask('default', [
		'jshint',
		'build'
	]);
};
