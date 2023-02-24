export interface InfoCardData {
  label: string;
  value: string;
}

export const infoData: InfoCardData[][] = [
  [
    {
      label: "Họ tên",
      value: "Bùi Bích Diệp",
    },
    {
      label: "Giới tính",
      value: "Nữ",
    },
    {
      label: "Tình trạng hôn nhân",
      value: "Kết hôn",
    },
  ],
  [
    {
      label: "Ngày sinh",
      value: "12/12/1992",
    },
    {
      label: "Nơi sinh",
      value: "Hà Nội",
    },
    {
      label: "",
      value: "",
    },
  ],
];

export const fatca = [
  [
    {
      label:
        "Quý khách có thu nhập từ Hoa Kỳ hoặc là người nộp thuế tại Hoa Kỳ không?",
      value: "Không",
    },
  ],
];

export const documentData: InfoCardData[][] = [
  [
    {
      label: "Loại chứng từ",
      value: "Hộ chiếu",
    },
    {
      label: "Số Hộ chiếu",
      value: "12345678",
    },
    {
      label: "Ngày hết hạn",
      value: "12/12/2034",
    },
  ],
  [
    {
      label: "Ngày cấp",
      value: "12/12/2014",
    },
    {
      label: "Nơi cấp",
      value: "Hà Nội",
    },
    {
      label: "",
      value: "",
    },
  ],
];

export const policyData = [
  [
    {
      label: `${process.env.basePath}/images/pdf.svg`,
      value: "",
    },
    {
      label: `${process.env.basePath}/images/pdf.svg`,
      value: "",
    },
    // {
    //   label: "",
    //   value: "",
    // },
    // {
    //   label: "",
    //   value: "",
    // },
    // {
    //   label: "",
    //   value: "",
    // },
  ],
  // [
  //   {
  //     label: "",
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     value: "",
  //   },
  // ],
];
export const jobData: InfoCardData[][] = [
  [
    {
      label: "Nghề nghiệp",
      value: "Kỹ sư",
    },
    {
      label: "Chức vụ",
      value: "Trưởng phòng",
    },
    {
      label: "Tên công ty",
      value: "Company",
    },
  ],
  [
    {
      label: "Mô tả công việc",
      value: "Giám sát",
    },
  ],
];

export const contactData: InfoCardData[][] = [
  [
    {
      label: "Di động",
      value: "09123456789",
    },
    {
      label: "Nhà riêng",
      value: "033456789",
    },
    {
      label: "Số khác",
      value: "033456777",
    },
  ],
  [
    {
      label: "Email",
      value: `bichdiep@gmail<span style="transform: translateX(-5px)">.com</span>`,
    },
  ],
];

export const addressData: InfoCardData[][] = [
  [
    {
      label: "Quốc gia",
      value: "Việt Nam",
    },
    {
      label: "Thành phố/Tỉnh",
      value: "Hà Nội",
    },
    {
      label: "Quận/Huyện",
      value: "Ba Đình",
    },
  ],
  [
    {
      label: "Phường/Xã",
      value: "Điện Biên",
    },
    {
      label: "Đường",
      value: "Cao Bá Quát",
    },
    {
      label: "Số nhà",
      value: "222",
    },
  ],
];

export const periodicFeeData: InfoCardData[][] = [
  [
    {
      label: "Định kỳ đóng phí sau điều chỉnh",
      value: "Nửa năm",
    },
    {
      label: "Phí bảo hiểm định kỳ sau khi điều chỉnh",
      value: "5.212.212 đ",
    },
  ],
  [
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
    {
      label: "",
      value: "",
    },
  ],
];
