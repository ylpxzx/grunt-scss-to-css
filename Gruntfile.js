module.exports = function(grunt) {

  grunt.initConfig({    //初始化配置grunt任务
    sass: {
      dist: {
        files: {
          'dist/css/output.css': 'src/scss/index.scss'  // src/scss/index.scss文件编译后输出到dist/css/output.css文件
        }
      }
    },
    watch:{
      scripts:{
        files:["src/scss/*.scss"],  // 监控文件夹下的scss文件
        tasks:["sass"],  // 监控到文件变化后，执行sass任务
        options:{
          spawn: false
        }
      }
    },
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');   //加载watch监听插件任务
  grunt.loadNpmTasks('grunt-contrib-sass');   //加载sass插件任务

  grunt.registerTask('scsstocss', ['sass', 'watch']);  //新增一个注册任务test, 运行sass和watch任务
};