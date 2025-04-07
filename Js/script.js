window.addEventListener("load", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    // 모든 슬라이드를 숨긴다.
    slides.forEach((slide) => {
      slide.style.opacity = 0;
    });

    // 현재 슬라이드만 보이도록 설정
    slides[index].style.opacity = 1;
  }

  // 슬라이드 3초마다 전환
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides; // 슬라이드 순차적으로 바뀌게
    showSlide(currentSlide);
  }, 3000);

  // 첫 번째 슬라이드를 초기화
  showSlide(currentSlide);
});
// document.addEventListener("DOMContentLoaded", function () {
//   const elements = document.querySelectorAll(".reveal");

//   function revealOnScroll() {
//     elements.forEach((el) => {
//       const rect = el.getBoundingClientRect();
//       if (rect.top < window.innerHeight * 0.7) {
//         el.classList.add("visible");
//       }
//     });
//   }

//   window.addEventListener("scroll", revealOnScroll);
//   revealOnScroll(); // 초기 로드 시 체크
// });
// 스크롤 이벤트에 맞춰 각 섹션을 표시할 IntersectionObserver 설정
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150; // 150px 정도로 설정 (보여지기 시작할 때)

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("visible");
    } else {
      reveals[i].classList.remove("visible");
    }
  }
}

// 페이지 로딩 시 한번 실행
window.onload = revealOnScroll;

// 스크롤할 때마다 실행
window.onscroll = function () {
  revealOnScroll();
};

document.addEventListener("DOMContentLoaded", () => {
  // 검색창 입력 이벤트 처리
  document.getElementById("portfolio-search").addEventListener("input", function (e) {
    const searchValue = e.target.value.toLowerCase(); // 입력된 값 소문자로 변환
    const portfolioItems = document.querySelectorAll(".portfolio-item"); // 모든 포트폴리오 항목

    portfolioItems.forEach((item) => {
      const title = item.querySelector("h4").innerText.toLowerCase(); // 항목 제목
      if (title.includes(searchValue)) {
        item.style.display = ""; // 검색 결과에 맞는 항목 표시
      } else {
        item.style.display = "none"; // 검색 결과에 맞지 않으면 숨기기
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // 검색창 입력 이벤트 처리
  document.getElementById("portfolio-search").addEventListener("input", function (e) {
    const searchValue = e.target.value.toLowerCase(); // 입력된 값 소문자로 변환
    const portfolioItems = document.querySelectorAll(".portfolio-item"); // 모든 포트폴리오 항목

    let found = false; // 항목이 검색 결과에 해당하는지 체크

    portfolioItems.forEach((item) => {
      const title = item.querySelector("h4").innerText.toLowerCase(); // 항목 제목
      if (title.includes(searchValue)) {
        item.style.display = ""; // 검색 결과에 맞는 항목은 기본적으로 보이게
        if (!found) {
          item.scrollIntoView({
            behavior: "smooth", // 부드러운 스크롤
            block: "center", // 화면 중앙으로 위치
          });
          found = true; // 첫 번째 검색 결과에 대해서만 스크롤 이동
        }
      } else {
        item.style.display = ""; // 검색되지 않은 항목은 숨기지 않고 그대로 표시
      }
    });
  });
});

function createLightning() {
  // 강력한 플래시 효과 추가
  let flash = document.createElement("div");
  flash.classList.add("lightning-flash");
  document.body.appendChild(flash);

  setTimeout(() => {
    flash.remove();
  }, 400); // 플래시 효과 지속 시간 증가

  let boltSegments = [];
  let segmentCount = Math.floor(Math.random() * 10) + 8; // 번개 길이 (8~18 조각)
  let startX = Math.random() * window.innerWidth; // 번개 시작 위치 랜덤
  let startY = 0; // 화면 상단에서 시작

  for (let i = 0; i < segmentCount; i++) {
    let segment = document.createElement("div");
    segment.classList.add("bolt");

    let segmentWidth = Math.random() * 20 + 10; // 두께 랜덤 (10~30px)
    let segmentHeight = Math.random() * 150 + 100; // 길이 랜덤 (100~250px)

    segment.style.width = segmentWidth + "px";
    segment.style.height = segmentHeight + "px";
    segment.style.left = startX + "px";
    segment.style.top = startY + "px";

    document.body.appendChild(segment);
    boltSegments.push(segment);

    // 번개가 급격히 꺾이도록 (90도 회전 효과 추가)
    if (Math.random() > 0.5) {
      startX += Math.random() * 200 - 100; // 좌우로 크게 흔들리게 (90도 꺾임)
    }
    startY += segmentHeight;
  }

  setTimeout(() => {
    boltSegments.forEach((segment) => {
      segment.style.transition = "opacity 0.8s ease-out"; // 사라질 때 더 오래 남게
      segment.style.opacity = "0.3"; // 잔상이 오래 남도록

      setTimeout(() => {
        segment.remove();
      }, 800);
    });
  }, 500); // 번개가 더 오래 지속된 후 서서히 사라짐
}

// 번개를 더 자주 치게 (0.5초 ~ 2초 간격)
setInterval(createLightning, Math.random() * 4500 + 1000);

//번개 끝
document.addEventListener("DOMContentLoaded", () => {
  const rainContainer = document.createElement("div");
  rainContainer.classList.add("rain-container");
  document.body.appendChild(rainContainer);

  function createRaindrop() {
    const raindrop = document.createElement("div");
    raindrop.classList.add("raindrop");
    raindrop.style.left = Math.random() * window.innerWidth + "px";
    raindrop.style.animationDuration = Math.random() * 1.5 + 0.5 + "s"; // 랜덤 속도
    rainContainer.appendChild(raindrop);

    setTimeout(() => {
      raindrop.remove();
    }, 2000); // 애니메이션이 끝나면 제거
  }

  setInterval(createRaindrop, 10); // 빠르게 비 생성하여 폭우 느낌
});
