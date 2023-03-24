"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { FC } from "react";
import Code from "@/components/Code";
import { nodejs, python } from "@/helpers/documantation-code";

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJs</TabsTrigger>
        <TabsTrigger value="python">python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        {/* <SimpleBar></SimpleBar> */}
        <Code animated language="javascript" code={nodejs} show />
      </TabsContent>
      <TabsContent value="python">
        {/* <SimpleBar></SimpleBar> */}
        <Code animated language="python" code={python} show />
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
