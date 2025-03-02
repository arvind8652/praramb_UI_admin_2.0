interface IdynamicColumnsGeneration {
  displayVal: string;
  dataVal: string;
}
export const dynamicColumnsGeneration = (
  dataVal: IdynamicColumnsGeneration[]
) => {
  let updatedColumnsData: any = [];
  dataVal.map((d: IdynamicColumnsGeneration) => {
    if (d.displayVal) {
      updatedColumnsData.push({
        name: d.displayVal,
        selector: (row: any) => row[d.dataVal],
        sortable: true,
      });
    }
  });
  return updatedColumnsData;
};
