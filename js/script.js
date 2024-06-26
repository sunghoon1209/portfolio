$(document).ready(function () {

    $("html").on("mouseout", function () {
        $(".custom-cursor").css('opacity', '0')
    });
    $("html").on("mouseover", function () {
        $(".custom-cursor").css('opacity', '')
    });


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

        let hbmOn = $('.hbm>.hbmInner>img').attr("src");
        if (hbmOn == "./images/hbm.gif" | hbmOn == "./images/hbmrev.gif") {
            $('.hbm>.hbmInner>img').attr("src", "./images/hbmani.gif")
            $('.hbmInner').css('box-shadow','0px 0px 0px #fff')
            $('.mPagaName').css('display','none')
            $('header').css('right', '0');


        } else {
            $('.hbm>.hbmInner>img').attr("src", "./images/hbmrev.gif")
            $('.hbmInner').css('box-shadow','')
            $('.mPagaName').css('display','')
            $('header').css('right', '');

        }


    });
    // 헤더메뉴 클릭시 헴버거 메뉴 변경 및 메뉴 닫힘
    $(".submenu li").on("click", function () {
        $('.hbm>.hbmInner>img').attr("src", "./images/hbmrev.gif")
        $('header').css('right', '')
        $('.mPagaName').css('display','');
    });


    // input값 실시간 변경
    $("#name, #email, #subject, #message").on("propertychange change paste input", function () {
        var allFilled = $("#name").val() !== "" && $("#email").val() !== "" && $("#subject").val() !== "" && $("#message").val() !== "";
        $("#btn").toggleClass("button", !allFilled).toggleClass("buttonon", allFilled);
    });


    // 모달창 열릴때 화면 y축 좌표고정
    // $(".details").on("click", function () {
    //     // 스크롤 고정
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 400)
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


    let modalElements = {
        modalName: $("#modalName"),
        modalImg: $("#modalImage"),
        modalSkills: $("#modalSkills"),
        modalURL: $("#URL"),
        modalGitURL:$("#GitURL"),
        modalOverview: $("#overView"),
        mouseicon:$(".mouseicon"),
        modalGit:$("#GithubURL"),
    };

    function addClickListener(selector, data) {

        // 주어진 셀렉터에 대해 클릭 이벤트 리스너 설정
        $(selector).on("click", function () {
            changeModalContent(data); // 클릭 시 모달 내용 변경

        });
    }

    // 모달 내용 변경 함수
    function changeModalContent(data) {
        $(".icon").empty();
        // 데이터 객체의 키들을 반복하여 모달 요소의 텍스트 내용 변경
        $.each(data, function (key, value) {
            $(modalElements[key]).text(value);
            $("#modalImage").attr("src", data.imgSrc);
            $("#modalImage").attr("alt", data.imgAlt);
            $("#URL").attr("href", data.linkHref);
            $(".GithubURLHREF").attr("href", data.gitlinkHref);
            $(".mouseicon").css("display", data.display);
            $(".siteFull img").css("height", data.height);
            $(".siteFull").scrollTop(data.scrollTop);

            // 팝업창열때 이미지 개수 확인후 배열에 맞는 img추가
            if ($(".icon").children().length === 0) {
                data.tools.forEach(tool => {
                    $(".icon").append(`<img src="${tool}" alt="Tool">`);

                });
            }
        });
    }


    // 클릭 이벤트 리스너 추가 함수
    addClickListener(".detailsPort", {
        modalName: "Portfolio",
        modalGit: "https://github.com/sunghoon1209/portfolio",
        modalSkills: "HTML5  SCSS  jQuery  Javascript",
        modalOverview: "포트폴리오를 웹페이지형식으로 기획, 디자인, 코딩까지 전부 웹접근성과 사용자 경험,편의성에 맞춰서 제작",
        imgSrc: "./images/portfull.jpg",
        imgAlt: "포트폴리오 풀페이지",
        linkHref: "https://sunghoon1209.github.io/portfolio/landingpage",
        gitlinkHref: "https://github.com/sunghoon1209/portfolio",
        display: "block",
        height: "",
        scrollTop: 0,
        tools: ["./images/figma.svg", "./images/vs.svg", "./images/photoshop.svg"]
    });

    addClickListener(".detailsGucci", {
        modalName: "GUCCI",
        modalGit: "https://github.com/sunghoon1209/Gucci",
        modalSkills: "HTML5  SCSS  jQuery ",
        modalOverview: "구찌 홈페이지를 반응형을 제작",
        imgSrc: "./images/gucciFull.jpg",
        imgAlt: "구찌 풀페이지",
        linkHref: "https://sunghoon1209.github.io/Gucci",
        gitlinkHref: "https://github.com/sunghoon1209/Gucci",
        display: "block",
        height: "",
        scrollTop: 0,
        tools: ["./images/vs.svg", "./images/figma.svg"]


    });
    addClickListener(".detailsDev", {
        modalName: "Devsisters",
        modalGit: "https://github.com/sunghoon1209/Devsisters",
        modalSkills: "HTML5  CSS3  jQuery Javascript ",
        modalOverview: "Devsisters의 홈페이지를 참고하여 유사성을 살려서 새롭게 웹페이지 제작",
        imgSrc: "./images/devFull.jpg",
        imgAlt: "데브시스터즈 풀페이지",
        linkHref: "https://sunghoon1209.github.io/Devsisters",
        gitlinkHref: "https://github.com/sunghoon1209/Devsisters",
        display: "block",
        height: "",
        scrollTop: 0,
        tools: ["./images/vs.svg", "./images/figma.svg"]

    });
    addClickListener(".detailsSamyang", {
        modalName: "Samyang",
        modalGit: "https://github.com/sunghoon1209/samyang",
        modalSkills: "HTML5  CSS3  Javascript ",
        modalOverview: "삼양식품 홈페이지를 그대로 제작",
        imgSrc: "./images/samyangfull.jpg",
        imgAlt: "삼양식품 풀페이지",
        gitlinkHref: "https://github.com/sunghoon1209/samyang",
        linkHref: "https://sunghoon1209.github.io/samyang",
        display: "block",
        height: "",
        scrollTop: 0,
        tools: ["./images/vs.svg"]

    });
    addClickListener(".detailsItsix", {
        modalName: "ITSIX",
        modalGit: "https://github.com/sunghoon1209/itsix",
        modalSkills: "HTML5  CSS3  Javascript jQuery ",
        modalOverview: "ITSIX홈페이지를 보완하여 반응형으로  제작",
        imgSrc: "./images/itsixfullpage.jpeg",
        imgAlt: "itsix 풀페이지",
        gitlinkHref: "https://github.com/sunghoon1209/itsix",
        linkHref: "https://sunghoon1209.github.io/itsix/",
        display: "block",
        height: "",
        scrollTop: 0,
        tools: ["./images/vs.svg"]

    });
    addClickListener(".deatilsPetfriends", {
        modalName: "Petfriends",
        modalGit: "https://github.com/sunghoon1209/petfriends",
        modalSkills: "HTML5  SCSS  Javascript ",
        modalOverview: "기존에는 어플리케이션 형식으로만 존재하던 펫프렌즈 홈페이지를 웹 형식에 맞게 반응형으로 디자인하여 제작",
        imgSrc: "./images/petfriendsFull.jpg",
        imgAlt: "펫프렌즈 풀페이지",
        gitlinkHref: "https://github.com/sunghoon1209/petfriends",
        linkHref: "https://sunghoon1209.github.io/petfriends/",
        display: "block",
        height: "",
        scrollTop: 0,
        tools: ["./images/vs.svg", "./images/figma.svg"]

    });
    addClickListener(".detailsHpoint", {
        modalName: "H.Point",
        modalGit: "https://github.com/sunghoon1209/hpoint",
        modalSkills: "HTML5  CSS3 jQuery Javascript ",
        modalOverview: "현대백화점그룹 통합멤버십 웹페이지를 그대로 제작",
        imgSrc: "./images/hpointFull.jpg",
        imgAlt: "hpoint 풀페이지",
        gitlinkHref: "https://github.com/sunghoon1209/hpoint",
        linkHref: "https://sunghoon1209.github.io/hpoint/",
        display: "block",
        height: "",
        scrollTop: 0,
        tools: ["./images/vs.svg"]


    });

    addClickListener(".detailsHanhwa", {
        modalName: "Hanhwa Chemical",
        modalGit: "https://github.com/sunghoon1209/hanhwa",
        modalSkills: "HTML5  CSS3 jQuery Javascript ",
        modalOverview: "한화케미칼 웹페이지를 그대로 제작",
        imgSrc: "./images/hanhwaFull.jpg",
        imgAlt: "한화케미칼 풀페이지",
        gitlinkHref: "https://github.com/sunghoon1209/hanhwa",
        linkHref: "https://sunghoon1209.github.io/hanhwa/",
        display: "block",
        height: "",
        scrollTop: 0,
        tools: ["./images/vs.svg"]

    });
    addClickListener(".detailsGroundX", {
        modalName: "Ground X",
        modalGit: "https://github.com/sunghoon1209/GroundX",
        modalSkills: "HTML5  CSS3 jQuery Javascript ",
        modalOverview: "Ground X 홈페이지를 반응형으로 그대로 제작",
        imgSrc: "./images/groundXfull.jpg",
        imgAlt: "ground X 풀페이지",
        gitlinkHref: "https://github.com/sunghoon1209/GroundX",
        linkHref: "https://sunghoon1209.github.io/GroundX/",
        display: "block",
        height: "",
        scrollTop: 0,
        tools: ["./images/vs.svg", "./images/figma.svg"]

    });

    addClickListener(".details3d", {
        modalName: "3D SITE",
        modalGit: "https://github.com/sunghoon1209/3D",
        modalSkills: "HTML5  CSS3 Javascript ",
        modalOverview: "3D로 돌아가는 웹페이지 제작",
        imgSrc: "./images/3d.gif",
        imgAlt: "3d 풀페이지",
        gitlinkHref: "https://github.com/sunghoon1209/3D",
        linkHref: "https://sunghoon1209.github.io/3D/",
        display: "none",
        height: "100%",
        scrollTop: 0,
        tools: ["./images/vs.svg"]
    });

    addClickListener(".detailsSkpic", {
        modalName: "SK Picglobal",
        modalGit: "https://github.com/sunghoon1209/skPicglobal",
        modalSkills: "HTML5  CSS3 Javascript ",
        modalOverview: "SK Picglobal 홈페이지를 그대로 제작",
        imgSrc: "./images/skPicFull.jpg",
        imgAlt: "Sk picglobal 풀페이지",
        gitlinkHref: "https://github.com/sunghoon1209/skPicglobal",
        linkHref: "https://sunghoon1209.github.io/skPicglobal/",
        display: "block",
        height: "",
        scrollTop: 0,
        tools: ["./images/vs.svg"]
    });
    addClickListener(".detailsVedio", {
        modalName: "Introduce To Video ",
        modalGit: "https://github.com/sunghoon1209/introducetovideo",
        modalSkills: "HTML5  SCSS Javascript ",
        modalOverview: "비디오를 소개하는  동직인 웹페이지를 반응형으로 제작",
        imgSrc: "./images/video.jpg",
        imgAlt: "비디오소개 풀페이지",
        gitlinkHref: "https://github.com/sunghoon1209/introducetovideo",
        linkHref: "https://sunghoon1209.github.io/introducetovideo/",
        display: "none",
        height: "100%",
        scrollTop: 0,
        tools: ["./images/vs.svg"]
    });

// 스크롤 위치확인
    $(document).ready(function() {
        $(window).on('scroll', function() {
            var scrollTop = $(window).scrollTop();
            var scrollLeft = $(window).scrollLeft();
            console.log('Current vertical scroll position: ' + scrollTop);
            console.log('Current horizontal scroll position: ' + scrollLeft);
        });
    });
});




// 제출영역
function doAction() {
    // 입력값이 잘못된 경우 false를 리턴

    let nameValue = $("#name").val();
    let emailValue = $("#email").val();
    let subjectValue = $("#subject").val();
    let messageValue = $("#message").val();


    //  메세지 상자 함수로
    function showAlert(text, inputId) {
        $(".alertbox").addClass("alertboxOn").text(text);
        $(inputId).focus();
        setTimeout(function () {
            $(".alertbox").removeClass("alertboxOn");
        }, 2000);
    }
    // name 체크

    if (nameValue == "") { // id의 value값이 없다면.
        showAlert("이름을 입력해주세요.", "#name");
        return false;
    }
    // email 입력 체크
    if (emailValue == "") {
        showAlert("이메일을 입력해주세요.", "#email");
        return false;

    }
    // subject vaule
    if (subjectValue == "") {
        showAlert("제목을 입력해주세요.", "#subject");
        return false;
    }

    if (messageValue == "") {
        showAlert("내용을 입력해주세요.", "#message");
        return false;
    }
    showAlert("이메일 전송이 완료되었습니다.", "");

}


// 자바스크립트

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


window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    if (scrollY >= 4000) {
        let textbgr = document.querySelector(".lightpen");
        textbgr.classList.add("lightpenOn");

    }

});

// 반응형에서 왼쪽위에 section 이름 나오게 하는데
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    if (scrollY < 2800) {
        let mPagaName = document.querySelector(".mPagaName");
        mPagaName.textContent = 'Project';
    }
    if (scrollY >= 2800) {
        let mPagaName = document.querySelector(".mPagaName");
        mPagaName.textContent = 'Skills';
    }
    if (scrollY >= 3600) {
        let mPagaName = document.querySelector(".mPagaName");
        mPagaName.textContent = 'About Me';
    }
    if (scrollY >= 4700) {
        let mPagaName = document.querySelector(".mPagaName");
        mPagaName.textContent = 'Contact Us';
    }

});