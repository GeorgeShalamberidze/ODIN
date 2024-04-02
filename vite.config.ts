import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const rootPath = path.resolve(process.cwd());
  const srcPath = `${rootPath}/src`;
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath,
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    base: "/",
  };
});
