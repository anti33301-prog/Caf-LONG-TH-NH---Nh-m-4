let searchForm = document.querySelector('.search-form');
let navbar = document.querySelector('.navbar');

// Xử lý hiện/ẩn thanh tìm kiếm khi bấm icon
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active'); // Đóng menu mobile nếu đang mở
}

// Xử lý menu trên điện thoại (nếu có)
let menuBtn = document.querySelector('#menu-btn');
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

// Khi người dùng cuộn trang, tự động đóng các thanh đang mở
window.onscroll = () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}