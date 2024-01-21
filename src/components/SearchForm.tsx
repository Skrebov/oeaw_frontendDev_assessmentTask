import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/components/ui/select";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { StelleService } from "@/Service/StelleService";
import debounce from "lodash.debounce";

type Props = {
  onFetch: (data: any) => void;
};
export const SearchForm: FunctionComponent<Props> = ({ onFetch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState("10");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const fetchResults = async () => {
    onFetch(StelleService.transformData(await StelleService.searchStelle(searchTerm)));
  };

  //debouncing the search with 300ms, to not call API too often
  const debouncedFetchResults = useMemo(
    () => debounce(fetchResults, 300),
    [searchTerm]
  );

  //cancelling the debouncing when leaving the page
  useEffect(() => {
    if (searchTerm) {
      debouncedFetchResults();
    }
    return () => {
      debouncedFetchResults.cancel();
    };
  }, [searchTerm, debouncedFetchResults]);

  return (
    <div className="flex mb-10">
     
      <div className="grid w-full max-w-lg items-center gap-1.5 mt-5 mr-10">
        <Label htmlFor="zitat">Enter Zitat</Label>
        <Input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          id="zitat"
          placeholder="Zitat"
        />
      </div>
      <div className="grid w-full max-w-lg items-center gap-1.5 mt-5 mr-10">
        <Label htmlFor="zitat">Search Limit</Label>
        <Select value={limit} onValueChange={setLimit}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Limit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Limit</SelectLabel>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="40">40</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
