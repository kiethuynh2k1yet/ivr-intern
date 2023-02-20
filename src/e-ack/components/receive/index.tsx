import { group } from "console";
import Image from "next/image";
import { useRouter } from 'next/router';
import {
  Container,
  Wrapper,
  ListMenuUl,
  Title,
  TitleDes,
  ColorDesHighLight,
  StyleTitle,
  TitleContact,
  TitleContactLink,
  DesContact,
  ListItemLi,
} from "./style";

export default function Receive() {
  const logo: string = require("../../../../public/images/group.svg").default;
  const router = useRouter();

  const onSubmit = () => {
    router.push ('./linkSuccess');
  }

  return (
    <Container>
      <Wrapper>
        <Title>HOÀN TẤT NHẬN HỢP ĐỒNG BẢO HIỂM</Title>
        <TitleDes>
          Cảm ơn Quý khách New Tc038.2 đã nhận bộ Hợp đồng bảo hiểm.
        </TitleDes>
        <TitleDes>
          Hợp đồng bảo hiểm của quý khách gồm có các tài liệu chính sau đây:
        </TitleDes>
        <ListMenuUl>
          <ListItemLi>Giấy chứng nhận bảo hiểm </ListItemLi>
          <ListItemLi>Hồ sơ yêu cầu bảo hiểm</ListItemLi>
          <ListItemLi>Bảng minh họa quyền lợi bảo hiểm </ListItemLi>
          <ListItemLi>Quy tắc, Điều khoản của sản phẩm bảo hiểm</ListItemLi>
          <ListItemLi>Các thỏa thuận khác của hai bên trong quá trình giao kết và thực
          hiện Hợp đồng bảo hiểm.</ListItemLi>
        </ListMenuUl>
          <DesContact>
            <TitleDes>
              Theo Quy tắc và Điều khoản hợp đồng bảo hiểm,<ColorDesHighLight>
              Quý khách có thời gian cân nhắc là 21 ngày, kể từ ngày hôm nay
              29/09/2022 đến hết ngày 20/10/2022</ColorDesHighLight>, 
              để kiểm tra lại các thông tin của Quý khách, tìm hiểu kỹ các quyền
              lợi, nghĩa vụ và Quy tắc Điều khoản của Hợp đồng bảo hiểm.
            </TitleDes>
            <TitleDes>
              Trong khoảng thời gian 21 ngày này, Quý khách có thể cân nhắc và
              quyết định tiếp tục thực hiện hợp đồng bảo hiểm hoặc yêu cầu hủy bỏ
              hợp đồng bảo hiểm.<StyleTitle>Trường hợp Quý khách muốn hủy bỏ 
              hợp đồng bảo hiểm, vui lòng liênlạc với Tư vấn tài chính hoặc Trung 
              tâm dịch vụ khách hàng của FWD Việt Nam để được hỗ trợ.</StyleTitle>
            </TitleDes>
            <TitleContact>
              <Image
                src={logo}
                alt="logo"
                width={52}
                height={52}
              />
              <TitleContactLink onClick={onSubmit}> BỘ HỢP ĐỒNG BẢO HIỂM ĐIỆN TỬ</TitleContactLink>
            </TitleContact>
            <TitleDes>
              Để bảo mật thông tin Hợp đồng bảo hiểm của Quý khách, bộ Hợp đồng bảo
              hiểm tại đường dẫn trên sẽ có hiệu lực <ColorDesHighLight>trong vòng 
              05 phút</ColorDesHighLight>. Sau thời gian này, Quý khách cũng có 
              thể xem lại bộ Hợp đồng điện tử tại <ColorDesHighLight>FWD Dịch vụ 
              trực tuyến</ColorDesHighLight> .
            </TitleDes>
        </DesContact>
      </Wrapper>
    </Container>
  );
}
