const config = {
  api: import.meta.env.VITE_API,
  headers: {
    "X-RapidAPI-Key": import.meta.env["VITE_X-RapidAPI-Key"],
    "X-RapidAPI-Host": import.meta.env["VITE_X-RapidAPI-Host"],
  },
};

export default config;
