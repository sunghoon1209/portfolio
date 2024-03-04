document.addEventListener("mousemove", function(e) {
    // 마우스 위치 가져오기
    var mouseX = e.clientX;
    var mouseY = e.clientY;
  
    // 커스텀 커서 요소 선택
    var cursor = document.querySelector(".custom-cursor");
  
    // 커서 위치 설정
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });
  
$(document).ready(function () {
    $('input:not(".pn"),textarea').focus(function () {
        // 포커스가 들어온 입력 필드 스타일 변경
        $(this).css('background-color', '#D9D9D9');
    }).blur(function () {
        // 포커스가 빠져나간 입력 필드 스타일 원래대로 변경
        $(this).css('background-color', '');
    });

    // 햄버거버튼 클릭시 아이콘 전환 및 메뉴호출
    $('.hbm').on("click", function () {

        let hbmOn = $('.hbm>img').attr("src");
        if (hbmOn == "./images/hbm.gif" | hbmOn == "./images/hbmrev.gif") {
            $('.hbm>img').attr("src", "./images/hbmani.gif")
            $('header').css('right', '0');


        } else {
            $('.hbm>img').attr("src", "./images/hbmrev.gif")
            $('header').css('right', '');

        }


    });

    $(".submenu li").on("click",function(){
        $('.hbm>img').attr("src", "./images/hbmrev.gif")
        $('header').css('right', '');
    });


    // input값 실시간 변경
    $("#name, #email, #subject, #message").on("propertychange change paste input", function () {
        var nameValue = $("#name").val();
        var emailValue = $("#email").val();
        var subjectValue = $("#subject").val();
        var messageValue = $("#message").val();

        // input 영역 모두 채워지면 버튼 색 변경
        if (nameValue !== "" && emailValue !== "" && subjectValue !== "" && messageValue !==
            "") {
            $("#btn").addClass("buttonon");
            $("#btn").removeClass("button");

        } else {
            $("#btn").addClass("button");
            $("#btn").removeClass("buttonon");
        }
    });
 
    // 모달창 열릴때 화면 y축 좌표고정
    $(".details").on("click", function () {
        // 스크롤 고정
        $('html, body').animate({
            scrollTop: 0
        }, 400)
    });




    $(".xbtn").on("click", function () {

        $(".modal").css("display", "");
        $("body").css("overflow", "")
        $(".modalbg").css("display", "");

        // 헴버거메뉴 보이기
        $(".hbm").css("display", "");
    });

    // 모달창 오픈일때 배경 누르면

    $(".modalbg").on("click", function () {
        $(".modal").css("display", "");
        $("body").css("overflow", "")
        $(".modalbg").css("display", "");
        // 헴버거메뉴 보이기
        $(".hbm").css("display", "");

    });

  

    $(".details").on("click", function () {
        // 스크롤 고정
        $("body").css("overflow", "hidden");
        // 모달창오픈
        $(".modalPort").css("display", "block");
        $(".modal").css("display", "block");

        // 햄버거메뉴 숨기기
        $(".hbm").css("display", "none")
    });

    // esc 창닫기
    $(document).keydown(function(event) {
        if ( event.keyCode == 27 || event.which == 27 ) {
            $(".modal").css("display", "");
            $("body").css("overflow", "")
            $(".modalbg").css("display", "");
            // 헴버거메뉴 보이기
            $(".hbm").css("display", "");
        }
    });

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
            $(".modalImg").attr("src", data.imgSrc);
            $(".link").attr("href", data.linkHref);
            $(".detailsImg").attr("src", data.imgSrc2);
        });
        // 모달 이미지와 링크 속성 변경
        // let img = document.getElementById("modalImg");


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
        modalURL: "https://sunghoon1209.github.io/portfolio/landingpage",
        modalZip: "Portfolio.zip",
        modalSort1: "HTML5  SCSS  JQUERY  JAVASCRIPT",
        modalSort2: "Visual Studio Code Figma Animate Photoshop",
        modalPrdes: "포트폴리오를 웹페이지형식으로 기획, 디자인, 코딩까지 전부 웹접근성과 사용자 경험,편의성에 맞춰서 제작하였습니다.",
        modalContactd: " contactMe 영역에서 Html에 Form 요소를 만들어서 이용자의 정보를 입력하고 전송하여 그대로 제 e-mail과 구글 스프레드시트에 저장되게 만들었습니다. 또한 사용자 경험을 늘리고자 현재 Focus된 Input에 배경색을 주었고 모든 Input이 작성되었을때 Send 버튼의 색을 변경되게 했습니다. 작성이 되지 않을 Input이 존재할 경우 alert창을 띄우며 해당 영역에 Focus를 주었습니다.",
        imgSrc2 : "./images/contactdetails.gif" ,
        imgSrc: "./images/portFolio.png",
        linkHref: "https://sunghoon1209.github.io/portfolio/landingpage"
    });

    addClickListener(".detailsGucci", {
        modalName: "Gucci 클론 코딩",
        modalURL: "https://sunghoon1209.github.io/Gucci/",
        modalZip: "Gucci.zip",
        modalSort1: "HTML5 SCSS JQUERY",
        modalSort2: "Visual Studio Code figma",
        modalPrdes: "구찌 홈페이지를 반응형을 제작하였습니다.",
        modalContactd: "구찌홈페이지기능설명추가",
        imgSrc: "./images/gucci.png",
        imgSrc2: "./images/groundXdetails.gif",
        linkHref: "https://sunghoon1209.github.io/Gucci/"
    });

    addClickListener(".detailsGroundX", {
        modalName: "Ground X 클론 코딩",
        modalURL: "https://sunghoon1209.github.io/GroundX",
        modalZip: "GroundX.zip",
        modalSort1: "HTML5 SCSS JQUERY JAVASCRIPT",
        modalSort2: "Visual Studio Code figma",
        modalPrdes: "기존에 존재하는 Ground X 홈페이지를 반응형으로 제작하였습니다.",
        modalContactd: "스크롤 이벤트로 nav메뉴 클릭시 해당 내용이 있는 곳으로 이동하고 메뉴의 색이 변하게 만들었습니다.",
        imgSrc: "./images/groundX.png",
        imgSrc2: "./images/groundXdetails.gif",
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






});




// 제출영역
function doAction() {
    // 입력값이 잘못된 경우 false를 리턴
    // document.querySelector("input[name='id']"); 한개만 접근할 때

    // 자주 쓰는 경로를 변수로 묶어준다.
    var nameValue = $("#name").val();
    var emailValue = $("#email").val();
    var subjectValue = $("#subject").val();
    var messageValue = $("#message").val();

    // name 체크
    if (nameValue == "") { // id의 value값이 없다면.
        alert("이름을 입력하세요.");

        // 사용자 편의성을 위해 ID엘리먼트에 포커스를 설정.
        $("#name").focus();
        return false;
    }
    // email 입력 체크
    if (emailValue == "") {
        alert("email을 입력하세요.");

        $("#email").focus();
        return false;
        console.log
    }
    // subject vaule
    if (subjectValue == "") {
        alert("제목을 입력하세요.");

        $("#subject").focus();
        return false;
    }

    if (messageValue == "") {
        alert("내용을 입력하세요.");

        $("#message").focus();
        return false;
    }
    alert("전송이 완료되었습니다.");

}










// 현재스크롤위치확인
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    console.log(scrollY);
    var currentPosition = window.scrollY + window.innerHeight;
    if (currentPosition >= 2000) {
        // 원하는 이벤트 실행
        document.querySelector(".hbm").style.display = "block";
    }

    if (currentPosition < 2000) {

        document.querySelector(".hbm").style.display = "";
    }

});