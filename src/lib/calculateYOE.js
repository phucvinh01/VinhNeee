export default function calculateYOE(startDate) {
    // Chuyển chuỗi ngày tháng thành đối tượng Date
    const [month, year] = startDate.split('/');

    // Chuyển đổi thành đối tượng Date
    const startDateObj = new Date(year, month - 1, 1);
    console.log(startDateObj);
    // Lấy thời gian hiện tại
    const currentDate = new Date();

    // Tính toán số năm kinh nghiệm

    const yoe = (currentDate - startDateObj) / (365 * 24 * 60 * 60 * 1000);


    return yoe.toFixed(1);
}

