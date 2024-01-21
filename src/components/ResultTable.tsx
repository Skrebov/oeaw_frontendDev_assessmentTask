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
input:StellenResult
}
export const ResultTable: FunctionComponent<Props> = ({input}) => {

  console.log(input)

  return (
    <Table>
      <TableCaption>A list of the fetched results for the Zitat.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">display_label</TableHead>
          <TableHead>keywords</TableHead>
          <TableHead>year range</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
