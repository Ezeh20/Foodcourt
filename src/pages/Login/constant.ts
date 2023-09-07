import delegate from "../../../public/assets/delegate.svg";
import manage from "../../../public/assets/manage.svg";
import monitor from "../../../public/assets/monitor.svg";

export interface ITM {
  id: number;
  title: string;
  text: string;
  src: string;
  alt: string;
}

export const constants = {
  HEADING: "Hi there, see what’s new",
  SUB_HEADING:
    "Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient",
  WRITE_UP: [
    {
      id: 0,
      title: "Monitor your Earnings",
      text: "Easily see how much your busineses are earning  on each transaction and watch your earnings rise.",
      src: monitor,
      alt: "monitor",
    },
    {
      id: 1,
      title: "Manage your Businesses",
      text: "Easily see how much your businesses are earning  on each transaction and watch your earnings rise. ",
      src: manage,
      alt: "manage",
    },
    {
      id: 2,
      title: "Delegate to Staff",
      text: "Easily see how much your businesses are earning  on each transaction and watch your earnings rise. ",
      src: delegate,
      alt: "delegate",
    },
  ],
};
