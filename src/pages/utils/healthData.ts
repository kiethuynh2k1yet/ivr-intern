export interface HealthCardData {
  label: string;
  value?: string;
  children?: HealthCardData[];
  content?: HealthCardData[];
}

export const healthQuestion: HealthCardData[] = [
  {
    label:
      "Ông/Bà đã có đề nghị bảo hiểm nhân thọ hoặc y tế nào (bảo hiểm cho chính mình) bị từ chối/tạm hoãn/được chấp thuận không phải theo các điều khoản thông thường? Nếu có, hãy nêu tên Công ty và chi tiết quyết định thẩm định.",
    value: "Không",
  },
  {
    label:
      "Hiện tại Ông/Bà có đang được hoặc đang chuẩn bị để được điều trị y tế của một bác sỹ, hoặc dự định tham khảo ý kiến của bác sỹ vì bất cứ lý do nào không? Nếu có, hãy nêu rõ tính chất điều trị, nêu tên và địa chỉ của bác sỹ.",
    value: "Không",
  },
  {
    label:
      "Trong ba (3) năm qua, Ông/Bà đã bao giờ đi chụp X-quang, siêu âm, chụp cắt lớp (CT), làm xét nghiệm sinh thiết, điện tâm đồ (ECG), xét nghiệm máu, xét nghiệm nước tiểu hoặc bất kỳ xét nghiệm nào khác? Nếu có, xin nêu lý do và kết quả.",
    value: "Không",
  },
  {
    label:
      "Ông/Bà có hút thuốc trong mười hai (12) tháng qua? Nếu có, vui lòng nêu số lượng (trung bình hàng ngày) và thời gian (bao nhiêu năm)?",
    value: "Không",
  },
  {
    label:
      "Trong ba (3) năm qua, Ông/Bà đã bao giờ đi chụp X-quang, siêu âm, chụp cắt lớp (CT), làm xét nghiệm sinh thiết, điện tâm đồ (ECG), xét nghiệm máu, xét nghiệm nước tiểu hoặc bất kỳ xét nghiệm nào khác? Nếu có, xin nêu lý do và kết quả.",
    value: "Không",
  },
  {
    label:
      "Ông/Bà đã bao giờ sử dụng chất gây nghiện/ma tuý hoặc đã bao giờ được điều trị về nghiện rượu hoặc nghiện ma tuý chưa? Nếu có, hãy nêu chi tiết.",
    value: "Không",
  },
  {
    label:
      "Ông/Bà có uống bia, rượu hoặc đồ uống có cồn khác không? Nếu có, nêu loại đồ uống, số lượng (trung bình hàng tuần) và thời gian (bao nhiêu năm)?",
    value: "Không",
  },

 
];

export const healthQuestion1: HealthCardData[] = [
  {
    label: "Ông/Bà đã bao giờ mắc bệnh hoặc đã được điều trị về:",
    children: [
      {
        label:
          "a. bệnh tiểu đường, rối loạn tuyến giáp, tuyến thượng thận, tuyến yên hoặc bất kỳ chứng rối loạn nội tiết nào?",
        value: "Không",
      },
      {
        label:
          "b. hen suyễn, ho kéo dài, ho ra máu, bệnh phổi mãn tính, lao, đau ngực, khó thở, rối loạn hô hấp hoặc bất kỳ chứng rối loạn nào về phổi?",
        value: "Không",
      },
      {
        label:
          "c. tăng mỡ máu, cao huyết áp, nhồi máu cơ tim, thiếu máu cơ tim, tiếng thổi tim, sa van tim, nhịp tim bất thường, thở thiếu hơi, đau ngực, sốt, thấp khớp, bệnh hoặc rối loạn của tim hoặc mạch máu khác?",
        value: "Không",
      },
      {
        label:
          "d. động kinh, ngất xỉu, đột quỵ, liệt, run chân tay, đau đầu kéo dài, co giật, bất tỉnh, sa sút trí tuệ, suy nhược, chóng mặt kéo dài, viêm tuỷ sống, viêm não - màng não hoặc bất kỳ chứng rối loạn về tâm thần, thần kinh nào?",
        value: "Không",
      },
      {
        label:
          "e. viêm, loét dạ dày, tá tràng, xuất huyết tiêu hoá, đường rò, trĩ, viêm đại tràng mạn hoặc bất kỳ rối loạn tiêu hoá nào?",
        value: "Không",
      },
      {
        label:
          "f. vàng da, mang mầm bệnh hoặc viêm gan siêu vi B/C hoặc bất kỳ viêm gan nào, xơ gan, viêm gan mãn, rối loạn về gan mật?",
        value: "Không",
      },
      {
        label:
          "g. có máu, đạm, đường trong nước tiểu, sỏi thận, phù, nhiễm trùng, bệnh hoặc rối loạn thận, bàng quang, hoặc bộ phận sinh dục?",
        value: "Không",
      },
      {
        label:
          "h. thoát vị đĩa đệm, thấp khớp, gút, viêm khớp, đau/dị dạng/rối loạn về cơ, cột sống, tay chân, khớp hoặc bị chấn thương nặng?",
        value: "Không",
      },
      {
        label:
          "i. thiếu máu, bệnh bạch cầu, dễ chảy máu dưới da hoặc bệnh bẩm sinh về máu hoặc bất kỳ rối loạn máu khác, được khuyên phải kiêng, không cho máu, hoặc không nhận truyền máu hoặc các sản phẩm từ máu do bị máu không đông, Lupus ban đỏ hoặc bất kỳ lý do nào?",
        value: "Không",
      },
      {
        label:
          "j. chảy nước lỗ tai, chảy máu cam, chứng nhìn đôi, giảm thị lực, giảm thính lực, khiếm khuyết phát âm, khàn giọng hoặc lác mắt, nuốt khó hoặc bất kỳ chứng rối loạn nào về mắt, tai, mũi hoặc họng?",
        value: "Không",
      },
      {
        label:
          "k. ung thư, u, u nang, nổi hạch cổ, hạch bẹn, hạch hàm hoặc bất kỳ khối u nào, nhiễm chất độc da cam, nhiễm hoá chất, sốt kéo dài?",
        value: "Không",
      },
      {
        label:
          "l. dị dạng hoặc thương tật mất khả năng hoạt động, phẫu thuật hoặc tai nạn hoặc bất kỳ bệnh lý nào khác không được nêu ở trên?",
        value: "Không",
      },
    ],
  },
  {
    label:
      "Ông/Bà hoặc vợ chồng của Ông/Bà đã bao giờ cho Ông/Bà biết là có hoặc đã được tư vấn, thăm khám hoặc điều trị liên quan đến bệnh lây truyền qua đường tình dục, HIV/AIDS, hoặc bất kỳ tình trạng nào liên quan đến AIDS?",
    value: "Không",
  },
  {
    label:
      "Ông/Bà đã bao giờ làm xét nghiệm HIV (nêu lý do và kết quả); hoặc trong vòng ba (3) tháng vừa qua có các triệu chứng nào sau đây trong hơn một tuần liên tục: mệt lử, giảm cân, tiêu chảy, u bướu to ra hoặc các tổn thương bất thường trên da?",
    value: "Không",
  },
  {
    label:
      "Trong sáu (6) tháng qua, Ông/Bà có tăng hoặc giảm từ (03) kg trở lên không? Nếu có, xin vui lòng cho biết số kg tăng/giảm và lý do.*",
    value: "Không",
  },
  {
    label:
      "Có ai trong những người là Bố, Mẹ đẻ hoặc Anh, Chị, Em ruột của Ông/Bà đã mất vì hoặc mắc bệnh ung thư, tim, đột quỵ, huyết áp cao, tiểu đường, thận, tâm thần, lao hoặc bất kỳ bệnh di truyền nào không? Nếu có, nêu tình trạng, mối quan hệ, độ tuổi khi mắc bệnh hoặc khi mất.",
    value: "Không",
  },
  {
    label:
      "Ông/Bà có tham gia hoặc có dự định tham gia vào môn thể thao hoặc nghề nào nguy hiểm như lặn có khí cụ/lặn trần, đua mô tô, bay bằng máy bay quân sự/cá nhân mà không phải với tư cách là hành khách? Nếu có, hãy nêu chi tiết.",
    value: "Không",
  },
  {
    label:
      "Trong một (1) năm tới, Ông/Bà có dự định đi tới (các) quốc gia nào khác ngoài nơi Ông/Bà đang sinh sống không? Nếu có, hãy nêu tên quốc gia, thời gian và mục đích đi.",
    value: "Không",
  },
];

export const healthQuestion2: HealthCardData[] =[
  {
    label: "Câu hỏi dành cho Người Được Bảo Hiểm là nữ",
    children: [
      {
        label: "a. Hiện Bà có mang thai không? Nếu có, được bao nhiêu tháng?",
        value: "Không",
      },
      {
        label:
          "b. Bà đã bao giờ bị biến chứng trong (các) lần mang thai trước kia chưa? Nếu có, nêu rõ thời gian và tính chất của biến chứng đó.",
        value: "Không",
      },
      {
        label:
          "c. Bà đã bao giờ được phát hiện là có, hoặc nhận thấy có các cục u ở vú hoặc (các) bệnh về vú? Nếu có, xin nêu chi tiết.",
        value: "Không",
      },
      {
        label:
          "d. Bà đã bao giờ được làm xét nghiệm Phết tế bào âm đạo để tầm soát ung thư (Pap Smear) cho kết quả bất thường hoặc được bác sỹ yêu cầu làm lại xét nghiệm này trong vòng sáu (6) tháng tới không? Nếu có, xin nêu chi tiết.",
        value: "Không",
      },
      {
        label:
          "e. Bà đã bao giờ bị rối loạn kinh nguyệt một cách thường xuyên/bất thường, đau bụng kinh hoặc rong kinh liên tục chưa? Nếu có, xin nêu chi tiết.",
        value: "Không",
      },
      {
        label:
          "f. Bà đã bao giờ được yêu cầu làm xét nghiệm chụp X-quang cho khối u ở ngực, xét nghiệm sinh thiết, phẫu thuật ngực, siêu âm vùng chậu hoặc khám bệnh phụ khoa (không bao gồm kiểm tra sức khoẻ định kỳ) chưa? Nếu có, xin nêu chi tiết.",
        value: "Không",
      },
    ],
  },
  {
    label: "Tên và địa chỉ của bác sỹ Ông/Bà thường đến khám (nếu có)?",
    content: [
      {
        label: "Tên Bác sỹ",
        value: "Lê Hoàng Minh",
      },
      {
        label: "Địa chỉ của Bác sỹ",
        value: "17 Hồ Thị Kỹ, Quận 3, TPHCM",
      },
    ],
  },
]