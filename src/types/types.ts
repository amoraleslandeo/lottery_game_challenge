export type TDraws = {
  id: string;
  name: string;
  logo: string;
  jackpot: {
    amount: number;
    currency: string;
  };
};

export type TDraw = TDraws & {
  specification: {
    maxNumbers: number;
    totalNumbers: number;
  };
  pricing: {
    amount: number;
    currency: string;
  };
};

export type TSaveDraw = {
  drawId: string;
  numbers: number[];
};
