import React from "react";
import { CircleHelp } from "lucide-react";
import { ExchangeProcedure as ExchangeProcedureData } from "@/constants/constants";
import { TableRow } from "./TableRow";

export const ExchangeProcedure: React.FC = () => {
  return (
    <section className="mt-16 mb-30">
      <h2 className="flex gap-2 items-center mb-8 text-2xl font-bold text-violet-500">
        <CircleHelp color="#8771EF" />
        Exchange procedure
      </h2>
      <div className="bg-white rounded-3xl border border-solid border-zinc-300 border-opacity-90">
        <dl>
          {ExchangeProcedureData.map((procedure) => (
            <TableRow key={procedure.title} title={procedure.title} content={procedure.description} className={procedure.className} rounded={procedure.rounded} />
          ))}
        </dl>
      </div>
    </section>
  );
};
