import styled from "styled-components";
import { blue } from "@ant-design/colors";
import { Radio } from "antd";
export const StyledTab = styled(Radio.Group)`
  .ant-radio-button-wrapper-checked {
    background-color: ${blue[5]};
    color: white;

    &:hover {
      color: white;
    }
  }
`;
