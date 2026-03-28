const targetElement = document.getElementById('target');

function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = "Unknown";
  let browserVersion = "Unknown";

  if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Google Chrome";
    browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Mozilla Firefox";
    browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Apple Safari";
    browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Edge") > -1) {
    browserName = "Microsoft Edge";
    browserVersion = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
  }

  return `${browserName}, ${browserVersion}`;
}

function getOS() {
  const platform = navigator.platform;

  if (platform.indexOf("Win") > -1) {
    return "Windows";
  } else if (platform.indexOf("Mac") > -1) {
    return "macOS";
  } else if (platform.indexOf("Linux") > -1) {
    return "Linux";
  } else if (platform.indexOf("Android") > -1) {
    return "Android";
  } else if (platform.indexOf("iPhone") > -1 || platform.indexOf("iPad") > -1) {
    return "iOS";
  }

  return "Unknown OS";
}

function getScreenDimensions() {
  return `${window.innerWidth}x${window.innerHeight}`;
}

function getAvailableScreenSpace() {
  return `${window.screen.availWidth}x${window.screen.availHeight}`;
}

function getCurrentDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'Europe/Helsinki'
  };

  const finnishDate = now.toLocaleString('fi-FI', options);

  const formattedDate = finnishDate.replace(/(\d{1,2})\s(\w+)\s(\d{4})/, '$1. $2 $3');
  const time = finnishDate.split(' ')[4];

  return `${formattedDate}, ${time}`;
}

targetElement.innerHTML = `
  <p>Browser: ${getBrowserInfo()}</p>
  <p>Operating System: ${getOS()}</p>
  <p>Screen Dimensions: ${getScreenDimensions()}</p>
  <p>Available Screen Space: ${getAvailableScreenSpace()}</p>
  <p>Current Date and Time: ${getCurrentDateTime()}</p>
`;
