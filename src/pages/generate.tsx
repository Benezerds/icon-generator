import { type NextPage } from "next";
import Head from "next/head";
import { FormGroup } from "~/components/FormGroup";
import { Input } from "~/components/Input";

import { api } from "~/utils/api";

const GeneratePage: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="generate icon page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <form className="flex flex-col gap-4" action="">
          <FormGroup>
            <label>Prompt</label>
            <Input />
          </FormGroup>
          

          <button className="rounded bg-blue-400 px-4 py-2 hover:bg-blue-500">
            Submit
          </button>
        </form>
        <div>Hello</div>
      </main>
    </>
  );
};

export default GeneratePage;
