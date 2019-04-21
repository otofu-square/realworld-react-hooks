import React from "react";

const Index = () => {
  return (
    <div>
      <p>Hello Next.js</p>
    </div>
  );
};

Index.getInitialProps = async ctx => {
  console.log(ctx.req.i18n);
  return {};
};

export default Index;
