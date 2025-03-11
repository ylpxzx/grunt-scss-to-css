module.exports = function(grunt) {

  grunt.initConfig({    //初始化配置grunt任务
    sass: {
      dist: {
        files: {
          'dist/css/output.css': 'src/scss/index.scss'
        }
      }
    },
    watch:{
      scripts:{
        files:["src/css/*.scss"],
        tasks:["sass"],
        options:{
          spawn:true  //变量更新，true指全量更新，就是一处css改变，所有内容都重新编译构建
        }
      }
    },
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');   //加载watch监听插件任务
  grunt.loadNpmTasks('grunt-contrib-sass');   //加载sass插件任务

  grunt.registerTask('scsstocss', ['sass', 'watch']);  //新增一个注册任务test, 运行sass和watch任务
};