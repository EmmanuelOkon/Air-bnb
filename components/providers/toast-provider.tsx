"use client";

import { Toaster } from "sonner";

const ToastProvider = () => {
  return (
    <Toaster
      position='top-right'
      expand={false}
      richColors
      closeButton
      visibleToasts={3}
      toastOptions={{
        className: "",
        duration: 2500,
        style: {
          borderRadius: "5px",
          fontSize: "14px",
        },
      }}
    />
  );
};

export default ToastProvider;
