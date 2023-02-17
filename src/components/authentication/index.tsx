import React, { useState } from "react";
import { useRouter } from "next/router";
import { Error } from "styles/global.styled";
import { PatternFormat } from "react-number-format";
import {
  Container,
  Title,
  Info,
  InfoTitle,
  InputInfoTitle,
  Demo,
  DesTitle,
  DesCheckBox,
  StyleBtn,
  ColorDesHighLight,
  Wapper,
  InputInfo,
  CheckInfo,
  CheckTitle,
  Checkmark,
} from "./styles";

export default function Authentication() {
  const [formValues, setFormValues] = useState({
    date: "",
    id: "",
    checkbox: "",
  });
  const [check, setCheck] = useState(true);
  const [formErrors, setFormErrors] = useState<any>({});
  const [error, setError] = useState([]);
  const router = useRouter();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    if (error.includes(name)) {
      setError(error.filter((e) => e !== name));
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values: typeof formValues) => {
    const errors: any = {};
    if (!values.date) {
      errors.date = "Vui lòng nhập ngày tháng năm sinh";
    } else if (values.date) {
      errors.date = "Ngày tháng năm sinh chưa hợp lệ";
    }
    if (!values.id) {
      errors.id = "Vui lòng nhập số CMND/CCCD/Hộ chiếu";
    } else if (values.id) {
      errors.id = "Số CMND/CCCD/Passport chưa hợp lệ";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorList = [];
    if (!formValues.date) {
      errorList.push("date");
    }
    if (!formValues.id) {
      errorList.push("id");
    }
    if (!formValues.checkbox) {
      errorList.push("checkbox");
    }
    if (formValues.date !== "25/08/2001" && formValues.id !== "000000000000") {
      errorList.push("id");
      errorList.push("date");
    } else if (check === true) {
      router.push(`/e-ARK/otp`);
    }
    console.log(errorList);
    setFormErrors(validate(formValues));
    setError(errorList);
  };

  return (
    <Container>
      <Wapper onSubmit={handleSubmit}>
        <Title>
          Chúc mừng hợp đồng bảo hiểm 31235802 của quý khách new TC038.2 đã được
          phát hành
        </Title>
        <DesTitle>
          Để nhận trực tuyến bộ Hợp đồng bảo hiểm, Quý khách vui lòng nhập các
          thông tin sau đây:
        </DesTitle>
        <Info>
          <InfoTitle>Ngày tháng năm sinh của Bên mua bảo hiểm</InfoTitle>
          <InputInfo>
            <InputInfoTitle
              className={error.includes("date") ? "errorInfo" : ""}
            >
              <PatternFormat
                format="##/##/####"
                placeholder="Ngay/Thang/Nam"
                mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
                name="date"
                value={formValues.date}
                onChange={handleChange}
              />
            </InputInfoTitle>
            <Error>{formErrors.date}</Error>
          </InputInfo>
          <Demo>Minh họa 31/01/2019</Demo>
        </Info>
        <Info>
          <InfoTitle>Số CMND/CCCD/Passport</InfoTitle>
          <InputInfo>
            <InputInfoTitle className={error.includes("id") ? "errorInfo" : ""}>
              <PatternFormat
                format="############"
                type="text"
                name="id"
                placeholder=""
                value={formValues.id}
                onChange={handleChange}
              />
            </InputInfoTitle>
            <Error>{formErrors.id}</Error>
          </InputInfo>
        </Info>
        <DesTitle>
          Theo Quy tắc và Điều khoản hợp đồng bảo hiểm,{" "}
          <ColorDesHighLight>
            Quý khách có thời gian cân nhắc là 21 ngày, kể từ ngày hôm nay
            29/09/2022 đến hết ngày 20/10/2022
          </ColorDesHighLight>
          , để kiểm tra lại các thông tin của Quý khách, tìm hiểu kỹ các quyền
          lợi, nghĩa vụ và Quy tắc Điều khoản của Hợp đồng bảo hiểm. Trong
          khoảng thời gian 21 ngày này, Quý khách có thể cân nhắc và quyết định
          tiếp tục thực hiện hợp đồng bảo hiểm hoặc yêu cầu hủy bỏ hợp đồng bảo
          hiểm.
        </DesTitle>
        <DesTitle>
          Đồng thời, Quý khách sẽ nhận được{" "}
          <ColorDesHighLight>bộ giấy Chứng nhận bảo hiểm</ColorDesHighLight> từ
          chúng tôi thông qua nhà cung cấp dịch vụ bưu phát.
        </DesTitle>
        <CheckInfo>
          <DesCheckBox
            
          />
          <Checkmark
            className={error.includes("checkbox") ? "errorCheckbox" : ""}
          />
          <CheckTitle
            className={error.includes("checkbox") ? "errorCheckbox" : ""}
          >
            Tôi, bên mua bảo hiểm của Hợp đồng bảo hiểm số 31235802 đã đọc và
            hiểu rõ các nội dung nói trên
          </CheckTitle>
        </CheckInfo>
        <StyleBtn>Tiếp tục</StyleBtn>
      </Wapper>
    </Container>
  );
}
