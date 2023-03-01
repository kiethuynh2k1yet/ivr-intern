export interface ListData {
  title: string;
  list?: string[];
  confirm?: string;
}

export const updateList: ListData[] = [
  {
    title: "Xin lưu ý cùng Quý khách:",
    list: [
      "Việc cập nhật/thay đổi Ngày tháng năm sinh hoặc Giới tính có thể dẫn đến thay đổi phí bảo hiểm. Thông tin chi tiết sẽ được thông báo đến Quý khách",
      "Trong trường hợp Quý khách thay đổi số điện thoại di động, chúng tôi sẽ liên hệ với Quý khách trước khi thực hiện yêu cầu này.",
      "Yêu cầu điều chỉnh của Quý khách sẽ có hiệu lực kể từ ngày được FWD xác nhận bằng văn bản/email.",
      "Thư xác nhận sẽ được FWD gửi qua email/địa chỉ liên lạc của Quý khách đã đăng ký với Công ty.",
    ],
  },
];

export const confirmList: ListData[] = [
  {
    title: `Quý khách đã xác nhận thông tin phiếu yêu cầu bằng mã xác thực một lần <span style="color:#E87722">(OTP)</span> vào lúc <span style="color:#E87722">22:00 22/01/2023</span> như sau:`,
    list: [
      "Tôi xác nhận các thông tin điều chỉnh nói trên. Tôi đồng ý giao dịch điều chỉnh dưới xác thực Bên mua bảo hiểm của tôi là cơ sở để FWD Việt Nam xử lý các giao dịch/yêu cầu của tôi",
      "Mã xác thực một lần (OTP) sẽ được gửi đến số điện thoại của Bên mua bảo hiểm. Bằng việc xác thực mã OTP này, Bên mua bảo hiểm xác nhận tính trung thực, chính xác và đầy đủ của các thông tin đã cung cấp trong yêu cầu điều chỉnh thông tin này.",
    ],
  },
];

export const considerTime: ListData[] = [
  {
    title: "Những thay đổi trong thời gian cân nhắc",
    list: [
      "Quý khách vui lòng liên hệ Tư vấn tài chính hỗ trợ lập Bảng minh họa quyền lợi bảo hiểm đối với các yêu cầu thêm/hủy sản phẩm bổ trợ, tăng/giảm số tiền bảo hiểm",
      "Nếu có thay đổi về phí bảo hiểm, chúng tôi sẽ thông báo chi tiết đến Quý khách trong vòng 03 ngày làm việc",
    ],
  },
  {
    title: "Những thay đổi sau thời gian cân nhắc",
    list: [
      "Sau khi nhận được yêu cầu của Quý khách, chúng tôi sẽ thẩm định và thông báo kết quả đến Quý khách trong vòng 03 ngày làm việc",
    ],
  },
];

export const considerTime1: ListData[] = [
  {
    title: "Những thay đổi trong thời gian cân nhắc",
    list: [
      "Quý khách vui lòng liên hệ Tư vấn tài chính hỗ trợ lập Bảng minh họa quyền lợi bảo hiểm đối với các yêu cầu thêm/hủy sản phẩm bổ trợ, tăng/giảm số tiền bảo hiểm",
      "Nếu có thay đổi về phí bảo hiểm, chúng tôi sẽ thông báo chi tiết đến Quý khách trong vòng 03 ngày làm việc",
    ],
  },
  {
    title: "Những thay đổi sau thời gian cân nhắc",
    list: [
      "Sau khi nhận được yêu cầu của Quý khách, chúng tôi sẽ thẩm định và thông báo kết quả đến Quý khách trong vòng 03 ngày làm việc",
      "Việc giảm số tiền bảo hiểm của các SP liên kết đầu tư có thể không ảnh hưởng dến Phí bảo hiểm định kỳ.",
    ],
  },
];

export const considerUpdate: ListData[] = [
  {
    title: "Những thay đổi trong thời gian cân nhắc",
    list: [
      "Quý khách vui lòng liên hệ Tư vấn tài chính hỗ trợ lập Bảng minh họa quyền lợi bảo hiểm đối với các yêu cầu thêm/hủy sản phẩm bổ trợ, tăng/giảm số tiền bảo hiểm",
      "Nếu có thay đổi về phí bảo hiểm, chúng tôi sẽ thông báo chi tiết đến Quý khách trong vòng 03 ngày làm việc",
    ],
  },
  {
    title: "Những thay đổi sau thời gian cân nhắc",
    list: [
      "Sau khi nhận được yêu cầu của Quý khách, chúng tôi sẽ thẩm định và thông báo kết quả đến Quý khách trong vòng 03 ngày làm việc",
    ],
    confirm: `Các sản phẩm bổ trợ được chọn ở trên đây sẽ được huỷ theo yêu cầu của Quý khách và các Quyền lợi kèm theo sẽ không còn tiếp tục, FWD sẽ gửi thông báo xác nhận đến Quý khách khi hoàn tất. <br/>Quý khách có thể yêu cầu bổ sung thêm sản phẩm bổ trợ khi có nhu cầu. Vui lòng liên hệ 1800969690 để được hỗ trợ.`,
  },
];
