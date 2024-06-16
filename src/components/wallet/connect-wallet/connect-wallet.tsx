import { Button, theme } from "antd";
import { WalletOutlined } from "@ant-design/icons";
import { useState } from "react";

const ConnectWallet = () => {
  const { token: themeToken } = theme.useToken();
  const [hover, setHover] = useState(false);

  return (
    <Button
      type="default"
      shape="round"
      size="large"
      icon={<WalletOutlined />}
      style={{
        borderColor: themeToken.colorText,
        background: hover
          ? themeToken.colorPrimaryBorder
          : themeToken.colorText,
        color: "white",
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWallet;
