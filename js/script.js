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




// 마우스제어효과
// 체크박스 변수설정
document.addEventListener("DOMContentLoaded", function () {
    // 체크박스 요소들을 가져옵니다.
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // 체크박스 선택 간격 (밀리초)
    const interval = 100;

    // 마우스 휠 이벤트 핸들러를 추가합니다.
    document.addEventListener('wheel', function (event) {
        // 마우스 휠이 아래로 스크롤되었는지 확인합니다.
        const isScrollingDown = event.deltaY > 0;

        // 체크박스를 하나씩 선택하거나 선택 해제합니다.
        checkboxes.forEach(function (checkbox, index) {
            // 체크박스의 현재 상태를 가져옵니다.
            const isChecked = checkbox.checked;

            // 마우스 휠을 아래로 스크롤할 때
            if (isScrollingDown) {
                document.getElementById("main").style.backgroundColor = "#000";
                // 체크박스가 선택되어 있지 않으면 선택합니다.
                if (!isChecked) {
                    setTimeout(function () {
                        checkbox.checked = true;
                    }, interval * index);
                    return;
                }
            }
            /*else { // 마우스 휠을 위로 스크롤할 때
                // 체크박스가 선택되어 있으면 선택 해제합니다.
                if (isChecked) {
                    setTimeout(function() {
                        checkbox.checked = false;
                    }, interval * index);
                    return;
                }
            }*/
        });
    });
});

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