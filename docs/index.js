const dirNames=['小1','小2','小3','小4','小5','小6','中2','中3','常用','常用外'];function loadConfig(){if(localStorage.getItem('darkMode')==1){document.documentElement.dataset.theme='dark';}}
loadConfig();function toggleDarkMode(){if(localStorage.getItem('darkMode')==1){localStorage.setItem('darkMode',0);delete document.documentElement.dataset.theme;}else{localStorage.setItem('darkMode',1);document.documentElement.dataset.theme='dark';}}
function search(){var hiras=document.getElementById('search').value;var dir=dirNames[document.getElementById('gradeOption').selectedIndex];if(hiras[0]){if(/[ぁ-ん].test(hiras[0])/){var code=hiras[0].codePointAt(0);var akasatas1=Array.from('あかさたなはまやらわん');var akasatas2=Array.from('おこそとのほもよろんん');var akasataCodes1=akasatas1.map(akasata=>akasata.codePointAt(0));var akasataCodes2=akasatas2.map(akasata=>akasata.codePointAt(0));for(var i=0;i<akasataCodes1.length;i++){if(akasataCodes1[i]<=code&&code<akasataCodes1[i+1]){var from=akasatas1[i];var to=akasatas2[i];location.href=`/homonym-ja/${dir}/${from}〜${to}/`;}}}else{location.href=`/homonym-ja/${dir}/あ〜お/`;}}}
document.addEventListener('keydown',function(event){if(event.key=='Enter'){search();}},false);