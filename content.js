function addButton() {

    var targetElement = document.getElementsByClassName("mynavi-button-portfolio")[0];
    var parentElement = targetElement.cloneNode(true);
    var childElement = parentElement.children[0];
    childElement.href = "home_library_query";
    childChild = childElement.children[0];
    childChild.src = "https://manaba.tsukuba.ac.jp/button_unsubmitted-ja1.png";
    childChild.alt = "未提出課題の一覧";
    childChild.title = "未提出課題の一覧";
    if (targetElement) {
      targetElement.after(parentElement);
    }
  }
  
  window.addEventListener("load", addButton);
  