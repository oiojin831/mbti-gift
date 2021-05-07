export function clickToCopy(href = "https://mfd-mbti.vercel.app") {
  const el = document.createElement("input");
  el.value = href;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  alert("Copied the text: " + el.value);
  document.body.removeChild(el);
}
