const dirNames = ["小1", "小2", "小3", "小4", "小5", "小6", "中2", "中3", "常用", "常用外"];
loadConfig();

function loadConfig() {
  if (localStorage.getItem("darkMode") == 1) {
    document.documentElement.dataset.theme = "dark";
  }
}

function toggleDarkMode() {
  if (localStorage.getItem("darkMode") == 1) {
    localStorage.setItem("darkMode", 0);
    delete document.documentElement.dataset.theme;
  } else {
    localStorage.setItem("darkMode", 1);
    document.documentElement.dataset.theme = "dark";
  }
}

function search() {
  const hiras = document.getElementById("searchText").value;
  const dir = dirNames[document.getElementById("gradeOption").selectedIndex];
  if (hiras[0]) {
    if (/[ぁ-ん]/.test(hiras[0])) {
      const code = hiras[0].codePointAt(0);
      const akasatas1 = Array.from("あかさたなはまやらわん");
      const akasatas2 = Array.from("おこそとのほもよろんん");
      const akasataCodes1 = akasatas1.map((akasata) => akasata.codePointAt(0));
      // const akasataCodes2 = akasatas2.map((akasata) => akasata.codePointAt(0));
      for (let i = 0; i < akasataCodes1.length; i++) {
        if (akasataCodes1[i] <= code && code < akasataCodes1[i + 1]) {
          const from = akasatas1[i];
          const to = akasatas2[i];
          location.href = `/homonym-ja/${dir}/${from}〜${to}/`;
        }
      }
    } else {
      location.href = `/homonym-ja/${dir}/あ〜お/`;
    }
  }
}

function changeGrade(event) {
  const dir = dirNames[event.target.selectedIndex];
  location.href = `/homonym-ja/${dir}/あ〜お/`;
}

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") search();
});
document.getElementById("toggleDarkMode").onclick = toggleDarkMode;
document.getElementById("search").onclick = search;
document.getElementById("gradeOption").onchange = changeGrade;
