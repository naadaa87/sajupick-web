// 스크롤 시 부드러운 이동 (GNB 링크)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 로그인 모달창 제어 로직 (향후 회원가입/결제 확장성 고려)
const modal = document.getElementById("loginModal");

function openLoginModal() {
    modal.style.display = "block";
}

function closeLoginModal() {
    modal.style.display = "none";
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
