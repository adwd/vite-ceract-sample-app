import { Helmet } from "react-helmet-async";

export const Head = () => (
  <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="version" content={String(import.meta.env.VITE_TEST_ENV)} />
  </Helmet>
);
