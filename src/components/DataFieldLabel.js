export default {
  keyLabelDict: [
    { name: "DateTime", label: "日期时间" },
    { name: "PreClosePx", label: "昨收价" },
    { name: "OpenPx", label: "开盘价" },
    { name: "HighPx", label: "最高价" },
    { name: "LowPx", label: "最低价" },
    { name: "LastPx", label: "最新价" },
    { name: "NumTrades", label: "成交笔数" },
    { name: "InstrumentStatus", label: "交易状态" },
    { name: "TotalVolumeTrade", label: "成交总量" },
    { name: "TotalAmountTrade", label: "成交总金额" },
    { name: "TotalBidQty", label: "委托买入总量" },
    { name: "TotalOfferQty", label: "委托卖出总量" },
    { name: "WeightedAvgBidPx", label: "加权平均委买价格（债券共用）" },
    { name: "WeightedAvgOfferPx", label: "加权平均委卖价格（债券共用）" },
    { name: "WithdrawBuyNumber", label: "买入撤单笔数" },
    { name: "WithdrawSellNumber", label: "卖出撤单笔数" },
    { name: "WithdrawBuyAmount", label: "买入撤单数量" },
    { name: "WithdrawBuyMoney", label: "买入撤单金额" },
    { name: "WithdrawSellAmount", label: "卖出撤单数量" },
    { name: "WithdrawSellMoney", label: "卖出撤单金额" },
    { name: "TotalBidNumber", label: "买入总笔数" },
    { name: "TotalOfferNumber", label: "卖出总笔数" },
    { name: "BidTradeMaxDuration", label: "买入委托成交最大等待时间" },
    { name: "OfferTradeMaxDuration", label: "卖出委托成交最大等待时间" },
    { name: "NumBidOrders", label: "买方委托价位数" },
    { name: "NumOfferOrders", label: "卖方委托价位数" },
    { name: "BidPrice", label: "申买十价" },
    { name: "BidOrderQty", label: "申买十量" },
    { name: "BidNumOrders", label: "申买十实际总委托笔数" },
    { name: "BidOrders", label: "申买一前50笔订单" },
    { name: "OfferPrice", label: "申卖十价" },
    { name: "OfferOrderQty", label: "申卖十量" },
    { name: "OfferNumOrders", label: "申卖十实际总委托笔数" },
    { name: "OfferOrders", label: "申卖一前50笔订单" },
    { name: "IOPV", label: "ETF净值估值（ETF）" },
    { name: "ETFBuyNumber", label: "ETF申购笔数（ETF）" },
    { name: "ETFBuyAmount", label: "ETF申购数量（ETF）" },
    { name: "ETFBuyMoney", label: "ETF申购金额（ETF）" },
    { name: "ETFSellNumber", label: "ETF赎回笔数（ETF）" },
    { name: "ETFSellAmount", label: "ETF赎回数量（ETF）" },
    { name: "ETFSellMoney", label: "ETF赎回金额（ETF）" }
  ],
  keyLabel: {
    DateTime: "日期时间",
    PreClosePx: "昨收价",
    OpenPx: "开盘价",
    HighPx: "最高价",
    LowPx: "最低价",
    LastPx: "最新价",
    NumTrades: "成交笔数",
    InstrumentStatus: "交易状态",
    TotalVolumeTrade: "成交总量",
    TotalAmountTrade: "成交总金额",
    TotalBidQty: "委托买入总量",
    TotalOfferQty: "委托卖出总量",
    WeightedAvgBidPx: "加权平均委买价格（债券共用）",
    WeightedAvgOfferPx: "加权平均委卖价格（债券共用）",
    WithdrawBuyNumber: "买入撤单笔数",
    WithdrawSellNumber: "卖出撤单笔数",
    WithdrawBuyAmount: "买入撤单数量",
    WithdrawBuyMoney: "买入撤单金额",
    WithdrawSellAmount: "卖出撤单数量",
    WithdrawSellMoney: "卖出撤单金额",
    TotalBidNumber: "买入总笔数",
    TotalOfferNumber: "卖出总笔数",
    BidTradeMaxDuration: "买入委托成交最大等待时间",
    OfferTradeMaxDuration: "卖出委托成交最大等待时间",
    NumBidOrders: "买方委托价位数",
    NumOfferOrders: "卖方委托价位数",
    BidPrice: "申买十价",
    BidOrderQty: "申买十量",
    BidNumOrders: "申买十实际总委托笔数",
    BidOrders: "申买一前50笔订单",
    OfferPrice: "申卖十价",
    OfferOrderQty: "申卖十量",
    OfferNumOrders: "申卖十实际总委托笔数",
    OfferOrders: "申卖一前50笔订单",
    IOPV: "ETF净值估值（ETF）",
    ETFBuyNumber: "ETF申购笔数（ETF）",
    ETFBuyAmount: "ETF申购数量（ETF）",
    ETFBuyMoney: "ETF申购金额（ETF）",
    ETFSellNumber: "ETF赎回笔数（ETF）",
    ETFSellAmount: "ETF赎回数量（ETF）",
    ETFSellMoney: "ETF赎回金额（ETF）"
  },
  // keyGroup: {
  // "PriceInfo": {
  //     label: "价格信息",
  //     type: "group",
  //     item: ["PreClosePx", "OpenPx", "HighPx", "LowPx", "LastPx"]
  // },
  // "TradeInfo": {
  //     label: "交易信息",
  //     type: "group",
  //     item: ["NumTrades","InstrumentStatus","TotalVolumeTrade","TotalAmountTrade","TotalBidQty","TotalOfferQty","WeightedAvgBidPx","WeightedAvgOfferPx"]
  // },
  // "WithdrawInfo": {
  //     label: "撤单信息",
  //     type: "group",
  //     item: ["WithdrawBuyNumber","WithdrawSellNumber","WithdrawBuyAmount","WithdrawBuyMoney","WithdrawSellAmount","WithdrawSellMoney"]
  // },
  // "BidInfo": {
  //     label: "买卖信息",
  //     type: "group",
  //     item: ["TotalBidNumber","TotalOfferNumber","BidTradeMaxDuration","OfferTradeMaxDuration","NumBidOrders","NumOfferOrders"]
  // },
  // "BidPrice": {
  //     label: "申买十价",
  //     type: "array",
  //     item: ["BidPrice"]
  // },
  // "BidOrderQty": {
  //     label: "申买十量",
  //     type: "array",
  //     item: ["BidOrderQty"]
  // },
  // "BidNumOrders": {
  //     label: "申买十实际总委托笔数",
  //     type: "array",
  //     item: ["BidNumOrders"]
  // },
  // "BidOrders": {
  //     label: "申买一前50笔订单",
  //     type: "array",
  //     item: ["BidOrders"]
  // },
  // "OfferPrice": {
  //     label: "申卖十价",
  //     type: "array",
  //     item: ["OfferPrice"]
  // },
  // "OfferOrderQty": {
  //     label: "申卖十量",
  //     type: "array",
  //     item: ["OfferOrderQty"]
  // },
  // "OfferNumOrders": {
  //     label: "申卖十实际总委托笔数",
  //     type: "array",
  //     item: ["OfferNumOrders"]
  // },
  // "OfferOrders": {
  //     label: "申卖一前50笔订单",
  //     type: "array",
  //     item: ["OfferOrders"]
  // },
  // "ETF": {
  //     label: "ETF",
  //     type: "group",
  //     item: ["IOPV","ETFBuyNumber","ETFBuyAmount","ETFBuyMoney","ETFSellNumber","ETFSellAmount","ETFSellMoney"]
  // }
  // },
  keyGroup: [
    {
      label: "价格信息",
      type: "group",
      item: ["PreClosePx", "OpenPx", "HighPx", "LowPx", "LastPx"]
    },
    {
      label: "交易信息",
      type: "group",
      item: [
        "NumTrades",
        "InstrumentStatus",
        "TotalVolumeTrade",
        "TotalAmountTrade",
        "TotalBidQty",
        "TotalOfferQty",
        "WeightedAvgBidPx",
        "WeightedAvgOfferPx"
      ]
    },
    {
      label: "撤单信息",
      type: "group",
      item: [
        "WithdrawBuyNumber",
        "WithdrawSellNumber",
        "WithdrawBuyAmount",
        "WithdrawBuyMoney",
        "WithdrawSellAmount",
        "WithdrawSellMoney"
      ]
    },
    {
      label: "买卖信息",
      type: "group",
      item: [
        "TotalBidNumber",
        "TotalOfferNumber",
        "BidTradeMaxDuration",
        "OfferTradeMaxDuration",
        "NumBidOrders",
        "NumOfferOrders"
      ]
    },
    {
      label: "申买十价",
      type: "array",
      item: ["BidPrice"]
    },
    {
      label: "申买十量",
      type: "array",
      item: ["BidOrderQty"]
    },
    {
      label: "申买十实际总委托笔数",
      type: "array",
      item: ["BidNumOrders"]
    },
    {
      label: "申买一前50笔订单",
      type: "array",
      item: ["BidOrders"]
    },
    {
      label: "申卖十价",
      type: "array",
      item: ["OfferPrice"]
    },
    {
      label: "申卖十量",
      type: "array",
      item: ["OfferOrderQty"]
    },
    {
      label: "申卖十实际总委托笔数",
      type: "array",
      item: ["OfferNumOrders"]
    },
    {
      label: "申卖一前50笔订单",
      type: "array",
      item: ["OfferOrders"]
    },
    {
      label: "ETF",
      type: "group",
      item: [
        "IOPV",
        "ETFBuyNumber",
        "ETFBuyAmount",
        "ETFBuyMoney",
        "ETFSellNumber",
        "ETFSellAmount",
        "ETFSellMoney"
      ]
    }
  ],
  keyList: [
    "DateTime",
    "PreClosePx",
    "OpenPx",
    "HighPx",
    "LowPx",
    "LastPx",
    "NumTrades",
    "InstrumentStatus",
    "TotalVolumeTrade",
    "TotalAmountTrade",
    "TotalBidQty",
    "TotalOfferQty",
    "WeightedAvgBidPx",
    "WeightedAvgOfferPx",
    "WithdrawBuyNumber",
    "WithdrawSellNumber",
    "WithdrawBuyAmount",
    "WithdrawBuyMoney",
    "WithdrawSellAmount",
    "WithdrawSellMoney",
    "TotalBidNumber",
    "TotalOfferNumber",
    "BidTradeMaxDuration",
    "OfferTradeMaxDuration",
    "NumBidOrders",
    "NumOfferOrders",
    "BidPrice",
    "BidOrderQty",
    "BidNumOrders",
    "BidOrders",
    "OfferPrice",
    "OfferOrderQty",
    "OfferNumOrders",
    "OfferOrders",
    "IOPV",
    "ETFBuyNumber",
    "ETFBuyAmount",
    "ETFBuyMoney",
    "ETFSellNumber",
    "ETFSellAmount",
    "ETFSellMoney"
  ],
  dataStore: {
    DateTime: "",
    PreClosePx: "",
    OpenPx: "",
    HighPx: "",
    LowPx: "",
    LastPx: "",
    NumTrades: "",
    InstrumentStatus: "",
    TotalVolumeTrade: "",
    TotalAmountTrade: "",
    TotalBidQty: "",
    TotalOfferQty: "",
    WeightedAvgBidPx: "",
    WeightedAvgOfferPx: "",
    WithdrawBuyNumber: "",
    WithdrawSellNumber: "",
    WithdrawBuyAmount: "",
    WithdrawBuyMoney: "",
    WithdrawSellAmount: "",
    WithdrawSellMoney: "",
    TotalBidNumber: "",
    TotalOfferNumber: "",
    BidTradeMaxDuration: "",
    OfferTradeMaxDuration: "",
    NumBidOrders: "",
    NumOfferOrders: "",
    BidPrice: [],
    BidOrderQty: [],
    BidNumOrders: [],
    BidOrders: [],
    OfferPrice: [],
    OfferOrderQty: [],
    OfferNumOrders: [],
    OfferOrders: [],
    IOPV: "",
    ETFBuyNumber: "",
    ETFBuyAmount: "",
    ETFBuyMoney: "",
    ETFSellNumber: "",
    ETFSellAmount: "",
    ETFSellMoney: ""
  }
};
