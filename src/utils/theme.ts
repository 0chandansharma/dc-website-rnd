export const customTheme = {
  navbar: {
    root: {
      base: "py-2.5 px-4 sm:px-4 md:flex md:items-center md:justify-between",
    },
    collapse: {
      base: "w-[344px] md:w-[532px] xl:w-full mobile-menu transition-transform fixed z-40 right-0 top-0 xl:static xl:block xl:w-auto",
      hidden: {
        on: " translate-x-full ",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex xl:hidden",
      icon: "text-white",
    },
    brand: {
      base: "flex items-center",
    },
  },
    modal: {
      content: {
        base: "relative h-screen w-full p-0 ",
        inner:
          "relative flex max-h-screen h-screen flex-col bg-image-modal rounded-xl",
      },
      header: {
        base: "flex !bg-transparent lg:!px-[200px] items-start justify-start",
        close: {
          base: " inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
          icon: "h-5 w-5",
        },
      },
    },
  };