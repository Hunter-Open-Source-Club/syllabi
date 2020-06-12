const reducer = files =>
  files.reduce((stored, course) => {
    const [course_num, course_info] = course.basename.split(/_(.+)/);
    let course_data = stored[course_num] || {};
    course_data[course_info] = course;
    return { ...stored, [course_num]: course_data };
  }, {});

const main = (siteurl, files) => {
  console.log(reducer(files));
  document.getElementById("container").innerHTML = siteurl;
};
