// deep merge utility from https://stackoverflow.com/a/34749873
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

//=============================================================
// actual populate.js
const restructure_lookup = lookup =>
  Object.keys(lookup).reduce((stored, course_type) => {
    const course_with_info = Object.keys(lookup[course_type]).reduce(
      (stored, course) => ({
        ...stored,
        [course.replace(" ", "")]: {
          course_info: course + ":" + lookup[course_type][course],
          course_type
        }
      }),
      {}
    );
    return { ...stored, ...course_with_info };
  }, {});

const reducer = files =>
  files.reduce((stored, course) => {
    const [course_num, course_info] = course.basename.split(/_(.+)/);
    let course_data = stored[course_num] || { syllabi: {} };
    course_data.syllabi[course_info] = course;
    return { ...stored, [course_num]: course_data };
  }, {});

const restructure_data = (lookup, data) => {
  let ret = Object.keys(lookup).reduce(
    (stored, current) => ({ ...stored, [current]: [] }),
    {}
  );
  Object.keys(data).reduce((stored, current) => {
    ret[data[current].course_type].push(data[current]);
  }, {});

  return ret;
};

const main = (siteurl, files, lookup) => {
  const restructured_lookup = restructure_lookup(lookup);
  const reduced_files = reducer(files);
  const data = mergeDeep(restructured_lookup, reduced_files);
  const restructured_data = restructure_data(lookup, data);
  console.log(restructured_data);

  var everyChild = document.querySelectorAll("#container .courses");
  for (var i = 0; i < everyChild.length; i++) {
    const id = everyChild[i].getAttribute("id");

    const htmlizedData = restructured_data[id].forEach(info => {
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      summary.innerHTML = info.course_info;
      details.appendChild(summary);

      if (info.syllabi) {
        Object.keys(info.syllabi).forEach(syllabus => {
          const ul = document.createElement("ul");
          const li = document.createElement("li");
          const a = document.createElement("a");
          const link = document.createTextNode(syllabus);
          a.appendChild(link);
          a.title = `Open ${syllabus} PDF`;
          a.href = info.syllabi[syllabus].path;
          li.appendChild(a);
          ul.appendChild(li);
          details.appendChild(ul);
        });
      }

      everyChild[i].appendChild(details);
    });
    console.log(htmlizedData);
  }
};
