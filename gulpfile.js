var gulp = require("gulp");
var server = require("browser-sync").create();

gulp.task("serve", function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("css/**/*.css").on("change", server.reload);
  gulp.watch("js/**/*.js").on("change", server.reload);
  gulp.watch("*.html").on("change", server.reload);
  gulp.watch("img/**/*.{jpg,svg,png}").on("change", server.reload);
});
