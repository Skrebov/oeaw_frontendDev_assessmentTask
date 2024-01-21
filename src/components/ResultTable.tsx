import { FunctionComponent } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../shadcn/components/ui/table";
import { StellenResult, Stelle } from "@/Interface/StelleTypes";

type Props = {
  input: StellenResult;
};
export const ResultTable: FunctionComponent<Props> = ({ input }) => {
  console.log(input);

  return (
    <Table>
      <TableCaption>A list of the fetched results for the Zitat.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">title</TableHead>
          <TableHead>keywords</TableHead>
          <TableHead>year range</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {input.results.map((result) => {
          return (
            <TableRow key={result.id}>
              <TableCell className="font-medium">
                {<a target="_blank" href={`https://mmp.acdh-dev.oeaw.ac.at/archiv/stelle/detail/${result.id}`}>{result.display_label}</a>}
              </TableCell>
              <TableCell>
                <ul>
                  {result.key_word.stichwort.map((keyword, index) => (
                    <li key={index}>
                      {index === result.key_word.stichwort.length - 1 ? (
                        keyword
                      ) : (
                        <>{keyword},</>
                      )}
                    </li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
