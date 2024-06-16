import { useConnect } from "wagmi";

const ConnectingWallet = () => {
  const { connectors } = useConnect();

  return (
    <>
      {connectors.map((connector) => (
        <div key={connector.uid}>{connector.name}</div>
      ))}
    </>
  );
};

export default ConnectingWallet;
