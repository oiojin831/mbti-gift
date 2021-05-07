export function clickToCopy(href = "https://mfd-mbti.vercel.app") {
  const el = document.createElement("input");
  el.value = href;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  alert(el.value + "가 복사 되었습니다! 공유해주세요!");
  document.body.removeChild(el);
}
