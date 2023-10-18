export interface BranchDataTypes {
  id?: number;
  title: string;
  address: string;
  // contact: Array<string>;
  contact: string[];
}

export const BRANCH_DATA = [
    {
      id: 1,
      title: "Abu Hail Branch",
      address: "Shop Number: 4, Abu Hail Residence, Behind Abu Hail Center",
      contact: ["+971-4-234 64 65", "+971-4-245 25 64"],
    },
    {
      id: 2,
      title: "Abu Hail Branch",
      address: "Shop Number: 4, Abu Hail Residence, Behind Abu Hail Center",
      contact: ["+971-4-234 64 65"],
    },
    {
      id: 3,
      title: "Abu Hail Branch",
      address: "Shop Number: 4, Abu Hail Residence, Behind Abu Hail Center",
      contact: ["+971-4-234 64 65", "+971-4-245 25 64"],
    },
    {
      id: 4,
      title: "Abu Hail Branch",
      address: "Shop Number: 4, Abu Hail Residence, Behind Abu Hail Center",
      contact: ["+971-4-234 64 65"],
    },
  ];