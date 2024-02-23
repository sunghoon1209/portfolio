// 모달창 텍스트내용 제어
let modalElements = {
    modalName: document.getElementById("modalName"),
    modalURL: document.getElementById("URL"),
    modalZip: document.getElementById("zip"),
    modalSort1: document.getElementById("sort1"),
    modalSort2: document.getElementById("sort2"),
    modalPrdes: document.getElementById("prdes"),
    modalContactd: document.getElementById("contactD")
};

// 모달 내용 변경 함수
function changeModalContent(data) {
    // 데이터 객체의 키들을 반복하여 모달 요소의 텍스트 내용 변경
    Object.keys(data).forEach(key => {
        modalElements[key].textContent = data[key];
    });
    // 모달 이미지와 링크 속성 변경
    $(".modalImg").attr("src", data.imgSrc);
    $(".link").attr("href", data.linkHref);
}

// 클릭 이벤트 리스너 추가 함수
function addClickListener(selector, data) {
    // 주어진 셀렉터에 대해 클릭 이벤트 리스너 설정
    $(selector).on("click", function () {
        changeModalContent(data); // 클릭 시 모달 내용 변경
    });
}


addClickListener(".detailsPort", {
    modalName: "Portfolio",
    modalURL: "https://sunghoon1209.github.io/portfolio/",
    modalZip: "Portfolio.zip",
    modalSort1: "HTML5 SCSS JQUERY JAVASCRIPT",
    modalSort2: "Visual Studio Code Figma Animate Photoshop",
    modalPrdes: "포트폴리오를 웹페이지형식으로 기획, 디자인, 코딩까지 전부 웹접근성과 사용자 경험,편의성에 맞춰서 제작하였습니다.",
    modalContactd: " contactMe 영역에서 Html에 Form 요소를 만들어서 이용자의 정보를 입력하고 전송하여 그대로 제 e-mail과 구글 스프레드시트에 저장되게 만들었습니다. 또한 사용자 경험을 늘리고자 현재 Focus된 Input에 배경색을 주었고 모든 Input이 작성되었을때 Send 버튼의 색을 변경되게 했습니다. 작성이 되지 않을 Input이 존재할 경우 alert창을 띄우며 해당 영역에 Focus를 주었습니다.",
    imgSrc: "./images/portFolio.png",
    linkHref: "https://sunghoon1209.github.io/portfolio/"
});

addClickListener(".detailsGucci", {
    modalName: "Gucci 클론 코딩",
    modalURL: "https://sunghoon1209.github.io/Gucci/",
    modalZip: "Gucci.zip",
    modalSort1: "HTML5 SCSS JQUERY JAVASCRIPT",
    modalSort2: "Visual Studio Code figma",
    modalPrdes: "구찌 홈페이지를 반응형을 제작하였습니다.",
    modalContactd: "구찌홈페이지기능설명추가",
    imgSrc: "./images/gucci.png",
    linkHref: "https://sunghoon1209.github.io/Gucci/"
});

addClickListener(".detailsGroundX", {
    modalName: "Ground X 클론 코딩",
    modalURL: "https://sunghoon1209.github.io/GroundX",
    modalZip: "GroundX.zip",
    modalSort1: "HTML5 SCSS JQUERY JAVASCRIPT",
    modalSort2: "Visual Studio Code figma",
    modalPrdes: "Ground X 홈페이지를 반응형으로 제작하였습니다.",
    modalContactd: "GroundX홈페이지기능설명추가",
    imgSrc: "./images/groundX.png",
    linkHref: "https://sunghoon1209.github.io/GroundX"
});

addClickListener(".detailsDev", {
    modalName: "Devsisters",
    modalURL: "https://sunghoon1209.github.io/Devsisters/",
    modalZip: "Devsisters.zip",
    modalSort1: "HTML5 CSS3 JQUERY JAVASCRIPT",
    modalSort2: "Visual Studio Code figma",
    modalPrdes: "Devsisters의 홈페이지를 참고하여 유사성을 살려서 새롭게 코딩하였습니다.",
    modalContactd: "GroundX홈페이지기능설명추가",
    imgSrc: "./images/dev.png",
    linkHref: "https://sunghoon1209.github.io/Devsisters"
});
