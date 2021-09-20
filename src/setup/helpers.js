// Helpers
import moment from 'moment';
// import { isArrowFunctionExpression } from '@babel/types';
// Render element or component by provided condition
export function renderIf(condition, renderFn) {
  return condition ? renderFn() : null
}

// Substring with ...
export function subString(string, length = 0) {
  return string.length > length ? `${string.substr(0, length)}...` : string
}

// Duplicate object
export function duplicate(object) {
  return Object.assign({}, object)
}

// Return empty string if value is null
export function nullToEmptyString(value) {
  return value === null ? '' : value
}

// Return zero if value is null
export function nullToZero(value) {
  return value === null ? 0 : value
}

// Add (s) to any string by count
export function plural(value) {
  return value === 1 ? '' : 's'
}

// Check if object is empty
export function isEmpty(obj) {
  let name;
  for (name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false;
    }
  }
  return true;
}

// Slug
export function slug(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    //.replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')            // Trim - from end of text
}

// Routing
// export function getRoutesForStack(routes) {
//   return Object.values(routes).reduce((result, route) => {
//     result[route.name] = route
//     return result
//   }, {})
// }

export function formatDate(date, format) {
  return moment(date).format(format || 'YYYY-MM-DD HH:mm:ss');
}
export function dateDiff(pastDate, futureDate, unitOfTime) {
  return moment(futureDate).diff(pastDate, unitOfTime);
}
export function getFirstDay(date, unit, format) {
  return moment(date).startOf(unit).format(format);
}
export function getLastDay(date, unit, format) {
  return moment(date).endOf(unit).format(format);
}
export function getRelativeTime(dateTime) {
  return  moment(dateTime).fromNow()
 }
 
export function addTimeUnit(date, amount, unit) {
  return moment(date).add(amount, unit).toDate();
}
export function subTimeUnit(date, amount, unit) {
  return moment(date).subtract(amount, unit).toDate();
}
export function ISODate(date) {
  return moment(date);
}
export function getMoment(date) {
  return moment(date)
}

export function isTimeAfter(date1, date2) {
  return moment(date1).isAfter(date2)
}
export function isTimeBefore(date1, date2) {
  return moment(date1).isAfter(date2)
}
export function isTimeAfterUnit(date1, date2) {
  return moment(date1).isAfter(date2,'day')
}
export function isTimeSame(date1, date2) {
  return moment(date1).isSame(date2,'day')
}

export function dayDifference(date1, date2) {
  const Difference_In_Time = date2.getTime() - date1.getTime(); 
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Math.round(Difference_In_Days);
}

export function toDataUrl(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
          resolve(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  });
}
