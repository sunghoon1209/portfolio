// startEvent 함수를 정의합니다.
function startEvent() {
    // 이벤트를 시작하는 코드를 여기에 작성합니다.
    // 체크박스 요소들을 가져옵니다.
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // 체크박스 선택 간격 (밀리초)
    const interval = 100;
    // 마우스 휠 이벤트 핸들러를 추가합니다.
    checkboxes.forEach(function (checkbox, index) {
        // 체크박스의 현재 상태를 가져옵니다.
        const isChecked = checkbox.checked;
        // 배경변경
        document.getElementById("left").style.width = "50%";
        document.getElementById("right").style.width = "50%";

        // document.getElementById("main").style.backgroundColor = "#000";
        // 체크박스가 선택되어 있지 않으면 선택합니다.
        if (!isChecked) {
            setTimeout(function () {
                checkbox.checked = true;
            }, interval * index);
            return;
        }
    });
}
// 검정배경 위로 올라가는 효과
function background() {
    document.getElementById("left").style.height = "0vh";
    document.getElementById("right").style.height = "0vh";
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // 체크박스 선택 간격 (밀리초)
    const interval = 50;
    // 마우스 휠 이벤트 핸들러를 추가합니다.
    checkboxes.forEach(function (checkbox, index) {
        // 체크박스의 현재 상태를 가져옵니다.
        const isChecked = checkbox.checked;
        // 배경변경
        document.getElementById("left").style.width = "50%";
        document.getElementById("right").style.width = "50%";

        // 체크박스가 선택되어 있으면 선택 해제합니다.
        // const interval = 50;
        if (isChecked) {
            setTimeout(function () {
                checkbox.checked = false;
                document.getElementById("text").style.color="#fff";
            }, interval * index);
            return;
        }

    });
    

}


// 2초 후에 startEvent 함수를 실행합니다.



// window.onload 이벤트 핸들러에서 startEvent 함수를 호출합니다.
window.onload = function () {
    setTimeout(startEvent, 1000);
    setTimeout(background, 4000);
    setTimeout(function() {
        window.location.href = "https://sunghoon1209.github.io/portfolio/"; // 이동할 페이지의 URL을 여기에 입력합니다.
    }, 6000);


};