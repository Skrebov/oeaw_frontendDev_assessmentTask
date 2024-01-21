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
import { StellenResult } from "@/Interface/StelleTypes";
import { Button } from "@/shadcn/components/ui/button";
import { StelleService } from "@/Service/StelleService";

type Props = {
  input: StellenResult;
  onFetch: (data: any) => void;
};
export const ResultTable: FunctionComponent<Props> = ({ input, onFetch }) => {
  return (
    input &&
    <div className="flex flex-col">
        <div className="mb-6 flex justify-end">
        <Button
          type="button"
          variant={"outline"}
          className="mr-5"
          disabled={input.previous === null}
          onClick={async () =>
            onFetch(StelleService.transformData(await StelleService.searchStellePagination(input.previous)))
          }
        >
          Previous
        </Button>
        <Button
          type="button"
          variant={"outline"}
          disabled={input.next === null}
          onClick={async () =>
            onFetch(StelleService.transformData(await StelleService.searchStellePagination(input.next)))
          }
        >
          Next
        </Button>
      </div>
      <Table className="mb-5">
        <TableCaption>
          A list of the fetched results for the Zitat.
        </TableCaption>
        <TableHeader className="text-lg font-bold">
          <TableRow>
            <TableHead className="w-[20%]">Title</TableHead>
            <TableHead>Keywords</TableHead>
            <TableHead>Year Range (manuscript)</TableHead>
            <TableHead>Author</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {input.results.map((result) => {
            return (
              <TableRow key={result.id}>
                <TableCell className="font-medium">
                  {
                    <a
                      target="_blank"
                      href={`https://mmp.acdh-dev.oeaw.ac.at/archiv/stelle/detail/${result.id}`}
                    >
                      {result.display_label}
                    </a>
                  }
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
                <TableCell>{`${result.text_start_date} - ${result.text_end_date}`}</TableCell>
                <TableCell>
                  {
                    <ul>
                      {result.authors.map((keyword, index) => (
                        <li key={index}>
                          {index === result.authors.length - 1 ? (
                            keyword
                          ) : (
                            <>{keyword},</>
                          )}
                        </li>
                      ))}
                    </ul>
                  }
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

    
    </div>
  );
};
