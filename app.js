const submitButton = document.querySelector(".submitButton");
const urlForm = document.querySelector(".urlForm");
const urlInput = document.querySelector(".urlInput");
const warningMessage = "please provide a url";
const showShortUrlUl = document.querySelector(".show-short-url");
const showResultHeader = document.querySelector(".show-result-header");

const showShortUrl = (orgURL, shortURL) => {
  const li = document.createElement("li");
  showResultHeader.innerText = "Congrats! Please use your short url";

  const orgLink = document.createElement("a");
  const shortLink = document.createElement("a");

  const orgLinkText = document.createTextNode(`${orgURL}`);
  const shortLinkText = document.createTextNode(
    `https://merri.url/${shortURL}`
  );

  orgLink.appendChild(orgLinkText);
  shortLink.appendChild(shortLinkText);

  orgLink.title = orgURL;
  orgLink.href = `http://${orgURL}`;

  shortLink.title = shortURL;
  shortLink.href = `http://${orgURL}`;

  li.appendChild(orgLink);
  li.appendChild(shortLink);
  showShortUrlUl.appendChild(li);
};

const submitHandler = e => {
  e.preventDefault();
  const orgURL = urlInput.value;
  const shortURL =
    Math.random()
      .toString(36)
      .substring(2, 6) +
    Math.random()
      .toString(36)
      .substring(2, 6);
  const urlRegex = new RegExp(
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  );

  if (urlRegex.test(orgURL)) {
    const urls = localStorage.getItem("urls");
    if (urls) {
      const localStorageUrls = JSON.parse(localStorage.getItem("urls"));
      localStorageUrls.push([orgURL, `https://merri.url/${shortURL}`]);
      localStorage.setItem("urls", JSON.stringify(localStorageUrls));
      urlInput.value = "";
      showShortUrl(orgURL, shortURL);
    } else {
      const urlArr = [];
      urlArr.push([orgURL, `https://merri.url/${shortURL}`]);
      localStorage.setItem("urls", JSON.stringify(urlArr));
      urlInput.value = "";
    }
  } else {
    console.log("please provide a url");
  }
};

// Event Listeners
urlForm.addEventListener("submit", submitHandler); //Modern browsers
