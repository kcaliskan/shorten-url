const localStorageUrls = JSON.parse(localStorage.getItem("urls"));
const adminUrlsWrapper = document.querySelector("ul");

const liMaker = (orgURL, shortURL) => {
  const li = document.createElement("li");
  const orgLink = document.createElement("a");
  const shortLink = document.createElement("a");

  const orgLinkText = document.createTextNode(`${orgURL}`);
  const shortLinkText = document.createTextNode(`${shortURL}`);

  orgLink.appendChild(orgLinkText);
  shortLink.appendChild(shortLinkText);

  orgLink.title = orgURL;
  orgLink.href = `http://${orgURL}`;

  shortLink.title = shortURL;
  shortLink.href = `http://${orgURL}`;

  li.appendChild(orgLink);
  li.appendChild(shortLink);
  adminUrlsWrapper.appendChild(li);
};

if (localStorageUrls) {
  localStorageUrls.map(url => {
    liMaker(url[0], url[1]);
  });

  console.log(localStorageUrls);
} else {
  // There is no URL created
}
