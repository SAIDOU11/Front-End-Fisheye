function byDate(a, b) {
  // Chronologically by year, month, day then hour
  return new Date(a.date).valueOf() - new Date(b.date).valueOf();
}

function byLikes(a, b) {
  // By popularity
  return parseInt(b.likes) - parseInt(a.likes);
}

function byTitle(a, b) {
  // Alphabetically by Title
  if (a.title > b.title) {
    return 1;
  } else if (b.title > a.title) {
    return -1;
  } else {
    return 0;
  }
}
