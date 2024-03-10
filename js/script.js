document.addEventListener("mousemove", function (e) {
    // 마우스 위치 가져오기

    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // 커스텀 커서 요소 선택
    let cursor = document.querySelector(".custom-cursor");


    // 커서 위치 설정
    cursor.style.display = "block";
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});




$(document).ready(function () {


    $("html").on("mouseout", function () {
        $(".custom-cursor").css('opacity', '0')
    });
    $("html").on("mouseover", function () {
        $(".custom-cursor").css('opacity', '')
    });
    // $("div.scroll").on("mouseover",function(){
    //     $(".custom-cursor").html(`<i class="fa-solid fa-computer-mouse-scrollwheel"></i>`);
    //     $(".custom-cursor").css('background-color','transparent');
    // });
    // $("div.scroll").on("mouseleave",function(){
    //     $(".custom-cursor").empty();
    //     $(".custom-cursor").css('background-color','');
    // });

    $('input:not(".pn"),textarea').focus(function () {
        // 포커스가 들어온 입력 필드 스타일 변경
        // $(this).css('background-color', '#D9D9D9');
        $(this).css('border', '2px solid #000');

    }).blur(function () {
        // 포커스가 빠져나간 입력 필드 스타일 원래대로 변경
        $(this).css('border', '');
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

    $(".submenu li").on("click", function () {
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
    // $(".siteFull").on("scroll", function() {
    //     $(".siteFull").scrollTop(400);

    // });




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



    $(".worksBox").on("click", function () {


        // 스크롤 고정
        $("body").css("overflow", "hidden");

        // 모달창오픈
        $(".modalPort").css("display", "block");
        $(".modal").css("display", "block");

        // 햄버거메뉴 숨기기
        $(".hbm").css("display", "none");
    });

    // esc 창닫기
    $(document).keydown(function (event) {
        if (event.keyCode == 27 || event.which == 27) {
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
        modalImg: document.getElementById("modalImage"),
        modalSkills: document.getElementById("modalSkills"),
        modalURL: document.getElementById("URL"),
        modalGitURL: document.getElementById("GitURL"),
        modalOverview: document.getElementById("overView"),
        mouseicon: document.querySelector(".mouseicon"),
        modalGit: document.getElementById("GithubURL"),

    };


    // 모달 내용 변경 함수
    function changeModalContent(data) {
        // 데이터 객체의 키들을 반복하여 모달 요소의 텍스트 내용 변경
        Object.keys(data).forEach(key => {
            modalElements[key].textContent = data[key];
            $("#modalImage").attr("src", data.imgSrc);
            $("#URL").attr("href", data.linkHref);
            $(".GithubURLHREF").attr("href", data.gitlinkHref);
            $(".mouseicon").css("display", data.display);
            $(".siteFull img").css("height", data.height);
            $(".siteFull").scrollTop(data.scrollTop);

        })
        // 모달 이미지와 링크 속성 변경
        // let img = document.getElementById("modalImg");


    }

    // 클릭 이벤트 리스너 추가 함수
    function addClickListener(selector, data) {
        $(".icon").empty();
        // 주어진 셀렉터에 대해 클릭 이벤트 리스너 설정
        $(selector).on("click", function () {
            changeModalContent(data); // 클릭 시 모달 내용 변경
        });
        

      

    }


    $(".detailsPort").on("click", function () {
       
        openPopup(4, 'modal');
    });
    $(".detailsGucci").on("click", function () {
        openPopup(1, 'modal');
    });


    function openPopup(iconCount, ) {
       
        // Clear previous content

        // 아이콘의 URL 예시 (원하는 URL로 변경하세요)
        let iconURLs = [
            "./images/figma.svg",
            "./images/vs.svg",
            "./images/photoshop.svg",
            "./images/ani.svg"
        ]
        
        // 팝업에 아이콘 추가
        for (let i = 0; i < iconCount; i++) {
            let icon = document.createElement("img");
            icon.src = iconURLs[i % iconURLs.length];
            $(".icon").append(icon);
        }

        // popup.style.display = "flex";
    }

    addClickListener(".detailsPort", {
        modalName: "Portfolio",
        modalGit: "https://github.com/sunghoon1209/portfolio",
        modalSkills: "HTML5  SCSS  JQUERY  JAVASCRIPT",
        modalOverview: "포트폴리오를 웹페이지형식으로 기획, 디자인, 코딩까지 전부 웹접근성과 사용자 경험,편의성에 맞춰서 제작",
        imgSrc: "./images/portfull.png",
        linkHref: "https://sunghoon1209.github.io/portfolio/landingpage",
        gitlinkHref: "https://github.com/sunghoon1209/portfolio",
        display: "block",
        height: "",
        scrollTop: 0,

    });
    addClickListener(".detailsGucci", {
        modalName: "Gucci",
        modalGit: "https://github.com/sunghoon1209/Gucci",
        modalSkills: "HTML5  SCSS  JQUERY ",
        modalOverview: "구찌 홈페이지를 반응형을 제작",
        imgSrc: "./images/gucciFull.png",
        linkHref: "https://sunghoon1209.github.io/Gucci",
        gitlinkHref: "https://github.com/sunghoon1209/Gucci",
        display: "block",
        height: "",
        scrollTop: 0


    });
    addClickListener(".detailsDev", {
        modalName: "Devsisters",
        modalGit: "https://github.com/sunghoon1209/Devsisters",
        modalSkills: "HTML5  CSS3  JQUERY JAVASCRIPT ",
        modalOverview: "Devsisters의 홈페이지를 참고하여 유사성을 살려서 새롭게 웹페이지 제작",
        imgSrc: "./images/devFull.png",
        linkHref: "https://sunghoon1209.github.io/Devsisters",
        gitlinkHref: "https://github.com/sunghoon1209/Devsisters",
        display: "block",
        height: "",
        scrollTop: 0

    });
    addClickListener(".detailsSamyang", {
        modalName: "Samyang",
        modalGit: "https://github.com/sunghoon1209/samyang",
        modalSkills: "HTML5  CSS3  JAVASCRIPT ",
        modalOverview: "삼양식품 홈페이지를 그대로 제작",
        imgSrc: "./images/samyangfull.png",
        gitlinkHref: "https://github.com/sunghoon1209/samyang",
        linkHref: "https://sunghoon1209.github.io/samyang",
        display: "block",
        height: "",
        scrollTop: 0

    });
    addClickListener(".detailsItsix", {
        modalName: "ITSIX",
        modalGit: "https://github.com/sunghoon1209/itsix",
        modalSkills: "HTML5  CSS3  JAVASCRIPT JQUERY ",
        modalOverview: "ITSIX홈페이지를 오류를 수정하여 제작",
        imgSrc: "./images/samyangfull.png",
        gitlinkHref: "https://github.com/sunghoon1209/itsix",
        linkHref: "https://sunghoon1209.github.io/itsix/",
        display: "block",
        height: "",
        scrollTop: 0

    });
    addClickListener(".deatilsPetfriends", {
        modalName: "ITSIX",
        modalGit: "https://github.com/sunghoon1209/petfriends",
        modalSkills: "HTML5  CSS3  JAVASCRIPT ",
        modalOverview: "기존에는 어플리케이션 형식으로만 존재하던 펫프렌즈 홈페이지를 웹 형식에 맞게 반응형으로 디자인하여 제작",
        imgSrc: "./images/petfriendsFull.png",
        gitlinkHref: "https://github.com/sunghoon1209/petfriends",
        linkHref: "https://sunghoon1209.github.io/petfriends/",
        display: "block",
        height: "",
        scrollTop: 0

    });
    addClickListener(".detailsHpoint", {
        modalName: "H.point",
        modalGit: "https://github.com/sunghoon1209/hpoint",
        modalSkills: "HTML5  CSS3 JQUERY JAVASCRIPT ",
        modalOverview: "현대백화점그룹 통합멤버십 웹페이지를 그대로 제작    ",
        imgSrc: "./images/hpointFull.png",
        gitlinkHref: "https://github.com/sunghoon1209/hpoint",
        linkHref: "https://sunghoon1209.github.io/hpoint/",
        display: "block",
        height: "",
        scrollTop: 0

    });

    addClickListener(".detailsHanhwa", {
        modalName: "Hanhwa",
        modalGit: "https://github.com/sunghoon1209/hanhwa",
        modalSkills: "HTML5  CSS3 JQUERY JAVASCRIPT ",
        modalOverview: "한화케미칼 웹페이지를 그대로 제작",
        imgSrc: "./images/hanhwaFull.png",
        gitlinkHref: "https://github.com/sunghoon1209/hanhwa",
        linkHref: "https://sunghoon1209.github.io/hanhwa/",
        display: "block",
        height: "",
        scrollTop: 0

    });
    addClickListener(".detailsGroundX", {
        modalName: "Ground X",
        modalGit: "https://github.com/sunghoon1209/GroundX",
        modalSkills: "HTML5  CSS3 JQUERY JAVASCRIPT ",
        modalOverview: "Ground X 홈페이지를 반응형으로 그대로 제작",
        imgSrc: "./images/groundXfull.png",
        gitlinkHref: "https://github.com/sunghoon1209/GroundX",
        linkHref: "https://sunghoon1209.github.io/GroundX/",
        display: "block",
        height: "",
        scrollTop: 0

    });

    addClickListener(".details3d", {
        modalName: "3D Site",
        modalGit: "https://github.com/sunghoon1209/3D",
        modalSkills: "HTML5  CSS3 JAVASCRIPT ",
        modalOverview: "기존에는 어플리케이션 형식으로만 존재하던 펫프렌즈 홈페이지를 웹 형식에 맞게 반응형으로 디자인하여 제작",
        imgSrc: "./images/3d.gif",
        gitlinkHref: "https://github.com/sunghoon1209/3D",
        linkHref: "https://sunghoon1209.github.io/3D/",
        display: "none",
        height: "100%",
        scrollTop: 0
    });

    addClickListener(".detailsSkpic", {
        modalName: "Sk Picglobal",
        modalGit: "https://github.com/sunghoon1209/skPicglobal",
        modalSkills: "HTML5  CSS3 JAVASCRIPT ",
        modalOverview: "SK Picglobal 홈페이지를 그대로 제작",
        imgSrc: "./images/skPicFull.png",
        gitlinkHref: "https://github.com/sunghoon1209/skPicglobal",
        linkHref: "https://sunghoon1209.github.io/skPicglobal/",
        display: "block",
        height: "",
        scrollTop: 0
    });
    addClickListener(".detailsVedio", {
        modalName: "Introduce To Video ",
        modalGit: "https://github.com/sunghoon1209/introducetovideo",
        modalSkills: "HTML5  CSS3 JAVASCRIPT ",
        modalOverview: "기존에는 어플리케이션 형식으로만 존재하던 펫프렌즈 홈페이지를 웹 형식에 맞게 반응형으로 디자인하여 제작",
        imgSrc: "./images/Video.png",
        gitlinkHref: "https://github.com/sunghoon1209/introducetovideo",
        linkHref: "https://sunghoon1209.github.io/introducetovideo/",
        display: "none",
        height: "100%",
        scrollTop: 0
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


console.log(document.scroll);








window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    console.log(scrollY);
    if (scrollY >= 4000) {
        let textbgr = document.querySelector(".lightpen")
        textbgr.classList.add("lightpenOn");

    }

});