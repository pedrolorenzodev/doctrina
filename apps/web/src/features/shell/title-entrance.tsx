const titleReadyScript = `(function(){var r=document.documentElement;var go=function(){r.setAttribute("data-title-ready","")};var t=setTimeout(go,800);requestAnimationFrame(function(){requestAnimationFrame(function(){document.fonts.ready.then(function(){clearTimeout(t);go()})})})})();`;

export function TitleEntrance() {
  return <script dangerouslySetInnerHTML={{ __html: titleReadyScript }} />;
}
