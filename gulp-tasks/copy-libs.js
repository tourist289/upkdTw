"use strict";

import gulp from "gulp";

gulp.task("copylibs", () => {
    return gulp.src("./src/libs/*.*")
        .pipe(gulp.dest('./dist/libs/'))
});