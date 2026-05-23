export const guests = {
  "guest-001": {
    name: "آقای امیر رضایی",
    companions: "به همراه خانواده",
  },
  "guest-002": {
    name: "خانم نازنین احمدی",
    companions: "",
  },
  "guest-003": {
    name: "آقای محمد و خانم سارا",
    companions: "",
  },
  "guest-004": {
    name: "خانواده محترم کریمی",
    companions: "",
  },
  "guest-005": {
    name: "دوست عزیزمان علی",
    companions: "",
  },
} as const;

export type GuestKey = keyof typeof guests;
export type Guest = (typeof guests)[GuestKey];
