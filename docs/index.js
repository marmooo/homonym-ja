const dirNames=["小1","小2","小3","小4","小5","小6","中2","中3","高校","常用","準1級","1級"];loadConfig();function loadConfig(){localStorage.getItem("darkMode")==1&&document.documentElement.setAttribute("data-bs-theme","dark")}function toggleDarkMode(){localStorage.getItem("darkMode")==1?(localStorage.setItem("darkMode",0),document.documentElement.setAttribute("data-bs-theme","light")):(localStorage.setItem("darkMode",1),document.documentElement.setAttribute("data-bs-theme","dark"))}function search(){const e=document.getElementById("searchText").value,t=dirNames[document.getElementById("gradeOption").selectedIndex];if(e[0])if(/[ぁ-ん]/.test(e[0])){{const s=e[0].codePointAt(0),o=Array.from("あかさたなはまやらわん"),i=Array.from("おこそとのほもよろんん"),n=o.map(e=>e.codePointAt(0));for(let e=0;e<n.length;e++)if(n[e]<=s&&s<n[e+1]){const n=o[e],s=i[e];location.href=`/homonym-ja/${t}/${n}〜${s}/`}}}else location.href=`/homonym-ja/${t}/あ〜お/`}function changeGrade(e){const t=dirNames[e.target.selectedIndex];location.href=`/homonym-ja/${t}/あ〜お/`}document.addEventListener("keydown",e=>{e.key=="Enter"&&search()}),document.getElementById("toggleDarkMode").onclick=toggleDarkMode,document.getElementById("search").onclick=search,document.getElementById("gradeOption").onchange=changeGrade