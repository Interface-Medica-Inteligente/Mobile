import * as React from "react";
import { useSelector } from "react-redux";
import recordSelector from "../selectors/recordSelector";

const useRecord = ({
  setValue,
  transform = null,
}: {
  setValue: any;
  transform?: any;
}) => {
  const record = useSelector(recordSelector.getRecord);

  React.useEffect(() => {
    const keys = Object.keys(record);
    keys.forEach((key) => {
      const item = (record as any)[key];
      if (item) {
        const value = !transform ? item : transform(key, item);
        setValue(key, value);
      }
    });
  }, [record]);
};

export default useRecord;
