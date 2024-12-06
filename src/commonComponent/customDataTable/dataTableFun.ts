export const dynamicColumnsGeneration = (dataVal: any) => {
  let updatedColumnsData: any = [];
  dataVal.map((d: any) => {
    updatedColumnsData.push({
      name: d.displayVal,
      selector: (row: any) => row[d.dataVal],
      sortable: true,
    });
  });
  return updatedColumnsData;
};
