/**
 * BÀI TẬP VỀ NHÀ - MẢNG (ARRAY)
 * CyberSoft Academy - Khóa học Lập trình Front-End BC98
 */

// Biến toàn cục lưu trữ mảng số nguyên
var numArray = [];

// Biến toàn cục lưu trữ mảng số thực cho bài tập 9
var arrayFloat = [];

/**
 * Hàm tiện ích lấy phần tử DOM theo ID
 * @param {string} id 
 * @returns {HTMLElement}
 */
function getEle(id) {
    return document.getElementById(id);
}

/**
 * THÊM SỐ VÀO MẢNG CHÍNH
 */
function getNumber() {
    var input = getEle("inputNum");
    var val = input.value.trim();

    if (val === "") {
        alert("Vui lòng nhập một số nguyên!");
        return;
    }

    var n = Number(val);
    numArray.push(n);

    // Hiển thị mảng ra giao diện
    getEle("txtArray").innerHTML = numArray.join(", ");

    // Reset ô input và tự động focus
    input.value = "";
    input.focus();
}

/**
 * XÓA MẢNG CHÍNH
 */
function clearArray() {
    numArray = [];
    getEle("txtArray").innerHTML = "";
    getEle("inputNum").value = "";
    getEle("inputNum").focus();
}

/**
 * 1. TỔNG CÁC SỐ DƯƠNG TRONG MẢNG
 */
function sumPositive() {
    if (numArray.length === 0) {
        getEle("txtSum").innerHTML = "Vui lòng thêm số vào mảng trước!";
        return;
    }

    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sum += numArray[i];
        }
    }

    getEle("txtSum").innerHTML = "Tổng số dương: " + sum;
}

/**
 * 2. ĐẾM CÓ BAO NHIÊU SỐ DƯƠNG TRONG MẢNG
 */
function countPositive() {
    if (numArray.length === 0) {
        getEle("txtCount").innerHTML = "Vui lòng thêm số vào mảng trước!";
        return;
    }

    var count = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count++;
        }
    }

    getEle("txtCount").innerHTML = "Số dương: " + count;
}

/**
 * 3. TÌM SỐ NHỎ NHẤT TRONG MẢNG
 */
function findMin() {
    if (numArray.length === 0) {
        getEle("txtMin").innerHTML = "Vui lòng thêm số vào mảng trước!";
        return;
    }

    var min = numArray[0];
    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }

    getEle("txtMin").innerHTML = "Số nhỏ nhất: " + min;
}

/**
 * 4. TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
 */
function findMinPos() {
    if (numArray.length === 0) {
        getEle("txtMinPos").innerHTML = "Vui lòng thêm số vào mảng trước!";
        return;
    }

    var posArray = [];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            posArray.push(numArray[i]);
        }
    }

    if (posArray.length > 0) {
        var minPos = posArray[0];
        for (var j = 1; j < posArray.length; j++) {
            if (posArray[j] < minPos) {
                minPos = posArray[j];
            }
        }
        getEle("txtMinPos").innerHTML = "Số dương nhỏ nhất: " + minPos;
    } else {
        getEle("txtMinPos").innerHTML = "Không có số dương trong mảng";
    }
}

/**
 * 5. TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG. NẾU KHÔNG CÓ THÌ TRẢ VỀ -1
 */
function findEven() {
    if (numArray.length === 0) {
        getEle("txtEven").innerHTML = "Vui lòng thêm số vào mảng trước!";
        return;
    }

    var lastEven = -1;
    // Duyệt từ cuối mảng về đầu để tìm số chẵn cuối cùng
    for (var i = numArray.length - 1; i >= 0; i--) {
        if (numArray[i] % 2 === 0) {
            lastEven = numArray[i];
            break;
        }
    }

    if (lastEven !== -1) {
        getEle("txtEven").innerHTML = "Số chẵn cuối cùng: " + lastEven;
    } else {
        getEle("txtEven").innerHTML = "-1 (Không có số chẵn trong mảng)";
    }
}

/**
 * Hàm đổi chỗ 2 phần tử trong mảng theo chỉ số n và r
 */
function swap(n, r) {
    var temp = numArray[n];
    numArray[n] = numArray[r];
    numArray[r] = temp;
}

/**
 * 6. ĐỔI CHỖ 2 GIÁ TRỊ TRONG MẢNG THEO VỊ TRÍ
 */
function changePosition() {
    if (numArray.length === 0) {
        getEle("txtChangePos").innerHTML = "Vui lòng thêm số vào mảng trước!";
        return;
    }

    var index1Val = getEle("inputIndex1").value.trim();
    var index2Val = getEle("inputIndex2").value.trim();

    if (index1Val === "" || index2Val === "") {
        alert("Vui lòng nhập đầy đủ cả hai vị trí!");
        return;
    }

    var index1 = Number(index1Val);
    var index2 = Number(index2Val);

    if (
        index1 < 0 ||
        index1 >= numArray.length ||
        index2 < 0 ||
        index2 >= numArray.length ||
        !Number.isInteger(index1) ||
        !Number.isInteger(index2)
    ) {
        alert("Vị trí không hợp lệ! Vui lòng nhập số nguyên từ 0 đến " + (numArray.length - 1));
        return;
    }

    swap(index1, index2);

    // Cập nhật mảng trên giao diện
    getEle("txtArray").innerHTML = numArray.join(", ");
    getEle("txtChangePos").innerHTML = "Mảng sau khi đổi: " + numArray.join(", ");
}

/**
 * 7. SẮP XẾP MẢNG THEO THỨ TỰ TĂNG DẦN
 */
function sortIncrease() {
    if (numArray.length === 0) {
        getEle("txtIncrease").innerHTML = "Vui lòng thêm số vào mảng trước!";
        return;
    }

    // Sử dụng thuật toán sắp xếp nổi bọt (Bubble Sort)
    for (var i = 0; i < numArray.length - 1; i++) {
        for (var j = 0; j < numArray.length - 1 - i; j++) {
            if (numArray[j] > numArray[j + 1]) {
                swap(j, j + 1);
            }
        }
    }

    getEle("txtArray").innerHTML = numArray.join(", ");
    getEle("txtIncrease").innerHTML = "Mảng sau khi sắp xếp: " + numArray.join(", ");
}

/**
 * Hàm kiểm tra một số có phải số nguyên tố hay không
 * @param {number} n 
 * @returns {boolean}
 */
function checkPrime(n) {
    if (n < 2 || !Number.isInteger(n)) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * 8. TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG. NẾU KHÔNG CÓ TRẢ VỀ -1
 */
function findPrime() {
    if (numArray.length === 0) {
        getEle("txtPrime").innerHTML = "Vui lòng thêm số vào mảng trước!";
        return;
    }

    var prime = -1;
    for (var i = 0; i < numArray.length; i++) {
        if (checkPrime(numArray[i])) {
            prime = numArray[i];
            break; // Tìm thấy số nguyên tố đầu tiên thì thoát vòng lặp
        }
    }

    if (prime !== -1) {
        getEle("txtPrime").innerHTML = "Số nguyên tố đầu tiên: " + prime;
    } else {
        getEle("txtPrime").innerHTML = "-1 (Không có số nguyên tố)";
    }
}

/**
 * THÊM SỐ VÀO MẢNG SỐ THỰC (Bài tập 9)
 */
function getFloat() {
    var input = getEle("inputFloat");
    var val = input.value.trim();

    if (val === "") {
        alert("Vui lòng nhập một số!");
        return;
    }

    var n = Number(val);
    arrayFloat.push(n);

    getEle("txtArrayFloat").innerHTML = arrayFloat.join(", ");

    input.value = "";
    input.focus();
}

/**
 * XÓA MẢNG SỐ THỰC
 */
function clearArrayFloat() {
    arrayFloat = [];
    getEle("txtArrayFloat").innerHTML = "";
    getEle("inputFloat").value = "";
    getEle("inputFloat").focus();
}

/**
 * 9. ĐẾM XEM TRONG MẢNG CÓ BAO NHIÊU SỐ NGUYÊN
 */
function findInt() {
    if (arrayFloat.length === 0) {
        getEle("txtInt").innerHTML = "Vui lòng nhập số vào mảng số thực trước!";
        return;
    }

    var count = 0;
    for (var i = 0; i < arrayFloat.length; i++) {
        if (Number.isInteger(arrayFloat[i])) {
            count++;
        }
    }

    getEle("txtInt").innerHTML = "Số nguyên: " + count;
}

/**
 * 10. SO SÁNH SỐ LƯỢNG SỐ DƯƠNG VÀ SỐ LƯỢNG SỐ ÂM
 */
function compareNum() {
    if (numArray.length === 0) {
        getEle("txtCompare").innerHTML = "Vui lòng thêm số vào mảng trước!";
        return;
    }

    var posCount = 0;
    var negCount = 0;

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            posCount++;
        } else if (numArray[i] < 0) {
            negCount++;
        }
    }

    if (posCount > negCount) {
        getEle("txtCompare").innerHTML = "Số dương > Số âm (Dương: " + posCount + " > Âm: " + negCount + ")";
    } else if (posCount < negCount) {
        getEle("txtCompare").innerHTML = "Số âm > Số dương (Âm: " + negCount + " > Dương: " + posCount + ")";
    } else {
        getEle("txtCompare").innerHTML = "Số âm = Số dương (" + posCount + " = " + negCount + ")";
    }
}
