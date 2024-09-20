const updatetime = () => {
  let d = new Date();
  nigeria.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Africa/Lagos",
    })
    .split(", ")[1];
  usa.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "America/Chicago",
    })
    .split(", ")[1];
  austria.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Europe/Vienna",
    })
    .split(", ")[1];
};
setInterval(updatetime, 1000);
