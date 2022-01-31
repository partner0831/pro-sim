import { IoEllipsisVertical } from "react-icons/io5";
export const dashcol = [
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "In",
    accessor: "in",
  },
  {
    Header: "Out",
    accessor: "out",
  },
  {
    Header: "BALANCE (£)",
    accessor: "balance",
  },
  {
    Header: "",
    accessor: "button",
    Cell: ({ cell }: any) => <IoEllipsisVertical size={20} color="#000000" />,
  },
];
export const dashdata = [
  {
    description: {
      date: "13 Sep 21",
      name: "CAR PARK CHARGES",
    },
    type: "DEB",
    in: "",
    out: "2,00",
    balance: "28000.56",
  },
  {
    description: {
      date: "13 Sep 21",
      name: "CAR PARK CHARGES",
    },
    type: "DEB",
    in: "",
    out: "2,00",
    balance: "28000.56",
  },
  {
    description: {
      date: "13 Sep 21",
      name: "CAR PARK CHARGES",
    },
    type: "DEB",
    in: "",
    out: "2,00",
    balance: "28000.56",
  },
  {
    description: {
      date: "2 3 Sep 21",
      name: "PAYPAL",
    },
    type: "DEB",
    in: "",
    out: "2,00",
    balance: "28000.56",
  },
  {
    description: {
      date: "18 Sep 21",
      name: "CAR PARK CHARGES",
    },
    type: "DEB",
    in: "",
    out: "5,00",
    balance: "4000.56",
  },
];
