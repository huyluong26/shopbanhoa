// Lưu trữ thông tin tài khoản người dùng vào localStorage
function saveUserData(username, password) {
    const userData = {
        username: username,
        password: password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
}

// Lấy thông tin tài khoản từ localStorage
function getUserData() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
        return JSON.parse(userDataString);
    }
    return null;
}

// Đăng ký tài khoản
function validateRegister() {
    const regUsername = document.getElementById('reg-username').value.trim();
    const regPassword = document.getElementById('reg-password').value.trim();
    const regRepassword = document.getElementById('reg-repassword').value.trim();
    const regEmail = document.getElementById('reg-email').value.trim();
    const errorDiv = document.getElementById('register-error');

    if (regUsername === '' || regPassword === '' || regRepassword === '' || regEmail === '') {
        errorDiv.textContent = 'Tất cả các trường đều là bắt buộc.';
        return false;
    }

    if (regPassword.length < 8) {
        errorDiv.textContent = 'Mật khẩu phải có ít nhất 8 ký tự.';
        return false;
    }

    if (regPassword !== regRepassword) {
        errorDiv.textContent = 'Mật khẩu nhập lại không khớp.';
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(regEmail)) {
        errorDiv.textContent = 'Định dạng email không hợp lệ.';
        return false;
    }

    // Lưu thông tin đăng ký vào localStorage
    saveUserData(regUsername, regPassword);

    alert('Đăng ký thành công!');
    resetRegisterForm();
    return false;
}

// Đăng nhập và kiểm tra thông tin tài khoản
function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('login-error');

    const userData = getUserData();
    if (userData && username === userData.username && password === userData.password) {
        window.location.href = 'home.html'; // Chuyển hướng sau khi đăng nhập thành công
    } else {
        errorDiv.textContent = 'Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }

    return false;
}

// Chức năng quên mật khẩu
function forgotPassword() {
    alert('Vui lòng nhập email của bạn để đặt lại mật khẩu.');
}

// Chuyển sang form đăng ký và ẩn form đăng nhập
function showRegisterForm() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none'; // Ẩn form đăng nhập khi chuyển sang form đăng ký
}

// Đặt lại form đăng ký và hiện lại form đăng nhập
function resetRegisterForm() {
    document.getElementById('reg-username').value = '';
    document.getElementById('reg-password').value = '';
    document.getElementById('reg-repassword').value = '';
    document.getElementById('reg-email').value = '';
    document.getElementById('register-error').textContent = '';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block'; // Hiện lại form đăng nhập khi reset form đăng ký
}

const listImages = document.querySelector('.list-images');
const imgs = document.querySelectorAll('.list-images img');
let slideIndex = 0;

function showSlides() {
    slideIndex++;
    if (slideIndex >= imgs.length) {
        slideIndex = 0;
    }
    let slideWidth = imgs[0].offsetWidth;
    listImages.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
}

setInterval(showSlides, 4000);


document.addEventListener('DOMContentLoaded', function() {
    const productContainers = document.querySelectorAll('.anhsp');

    productContainers.forEach(container => {
        const image1 = container.querySelector('.image1');
        const image2 = container.querySelector('.image2');

        container.addEventListener('mouseover', function() {
            image1.style.display = 'none';
            image2.style.display = 'block';
        });

        container.addEventListener('mouseout', function() {
            image2.style.display = 'none';
            image1.style.display = 'block';
        });
    });
});






function thayDoiHinh(duongDanHinh) {
    var hinhLon = document.getElementById("hinhLon");
    hinhLon.src = duongDanHinh;
}

function thayDoiSoLuong(thayDoi) {
    var inputSoLuong = document.getElementById("soLuong");
    var soLuongHienTai = parseInt(inputSoLuong.value);
    var soLuongMoi = soLuongHienTai + thayDoi;

    if (soLuongMoi > 0) {
        inputSoLuong.value = soLuongMoi;
    }
}