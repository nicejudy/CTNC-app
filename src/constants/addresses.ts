import { Networks } from "./blockchain";

export const ETH_ADDRESSES = {
    USDT_ADDRESS: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    CML_ADDRESS: "0x1a9323154D95f1d78145B866eFF74e4186761D85",
    NFT_MANAGER: "0x26270681918c3ba9523b49f4111243da8be46a5e",
    PAIR_ADDRESS: "0xD5C6E198a989122aAc58BAD8F316F2c998dE23BB",
    MULTICALL_ADDRESS: "0x2E59Cb289399799D776271Fec02D5D2E1ff25631"
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.ETH) return ETH_ADDRESSES;

    throw Error("Network don't support");
};
