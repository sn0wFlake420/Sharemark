import { io } from "socket.io-client";
import { toast } from "react-toastify";

const customId = "custom-id-yes";

const notify = (data) => {
  toast.dark(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: customId,
  });
};

const socket = io("http://127.0.0.1:8000");

socket.on("connection", (data) => {
  console.log("User connected");
});

socket.on("broadcast", (data) => {
  console.log(data);
  notify(data);
});

export default socket;
