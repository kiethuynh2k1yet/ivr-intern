import React from "react";
import { NoteWrapper, NoteTitle, NoteParagraph } from "./styled";
export default function NoteForm() {
  return (
    <NoteWrapper>
      <NoteTitle>Ghi chú</NoteTitle>
      <NoteParagraph>
        Để hoàn tất yêu cầu, Quý khách vui lòng bổ sung thông tin FATCA theo đạo
        luật thuế Hoa Kỳ qua email Customerconnect.vn@fwd.com. Trường hợp Quý
        khách đã bổ sung thông tin, vui lòng bỏ qua bước này. Quý khách vui lòng
        liên hệ với FWD theo số điện thoại 1800 96 96 90 để được hỗ trợ và giải
        đáp các thắc mắc.
      </NoteParagraph>
    </NoteWrapper>
  );
}
