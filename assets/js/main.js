// Lấy các phần tử cần sử dụng
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Thiết lập các biến
const slideWidth = swiperWrapper.offsetWidth / 8;
let currentTranslate = 0;

// Hàm tự động scroll
function autoScroll() {
  currentTranslate -= slideWidth;
  swiperWrapper.style.transition = 'transform 0.5s ease-in-out';
  swiperWrapper.style.transform = `translateX(${currentTranslate}px)`;

  if (currentTranslate <= -slideWidth * 8) {
    // Khi cuộn đến slide cuối cùng, quay trở lại slide đầu tiên
    setTimeout(() => {
      currentTranslate = 0;
      swiperWrapper.style.transition = 'none';
      swiperWrapper.style.transform = `translateX(${currentTranslate}px)`;
    }, 500);
  }

  // Gọi lại hàm autoScroll sau một khoảng thời gian
  setTimeout(autoScroll, 2000); // Thay đổi thời gian ở đây (đơn vị: ms)
}

// Bắt đầu auto scroll
autoScroll();

